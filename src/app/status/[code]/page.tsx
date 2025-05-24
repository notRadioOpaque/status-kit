"use client";

import Image from "next/image";
import {useParams} from "next/navigation";
import statusCodes from "../../../../data/statusCodes.json";
import Link from "next/link";
import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";

const page = () => {
  const {code} = useParams();
  const [imageParams, setImageParams] = useState<{webp: string} | null>(null);

  useEffect(() => {
    const fetchDuck = async () => {
      try {
        const res = await fetch("/api/duck/100");
        const data = await res.json();
        setImageParams(data.image);
      } catch (err) {
        console.error("error fetching duck:", err);
      }
    };

    fetchDuck();
  }, []);

  const selectedStatus = statusCodes.find((status: any) => status.code == code);

  return (
    <div className="flex gap-6">
      <div className="flex w-1/2 flex-col gap-3">
        <h2 className="text-6xl font-bold text-blue-400">{selectedStatus?.code}</h2>
        <div className="my-6 w-max rounded-full bg-blue-400/50 px-4 py-1">
          {selectedStatus?.phrase}
        </div>
        <div className="text-lg font-bold text-blue-400">
          Category: <span>{selectedStatus?.category}</span>
        </div>
        <p className="w-full text-xl text-zinc-400 sm:w-[80%]">
          {selectedStatus?.shortDescription}
        </p>
        <p className="w-full text-xl sm:w-[80%]">{selectedStatus?.LongDescription}</p>
        <Link
          className="mt-6 flex items-center gap-1 hover:underline"
          href={selectedStatus?.url ?? ""}
        >
          Learn more <Icon icon={"ion:arrow-up-right-box-outline"} height="16" width="16" />
        </Link>
      </div>
      <div className="w-1/2">
        {imageParams && (
          <Image
            src={imageParams.webp || ""}
            alt={`Duck ${code}`}
            className="block h-full w-full object-contain"
            width={300}
            height={400}
            priority
          />
        )}
      </div>
    </div>
  );
};

export default page;
