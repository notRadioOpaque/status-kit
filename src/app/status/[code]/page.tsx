"use client";

import Image from "next/image";
import {useParams, useRouter} from "next/navigation";
import statusCodes from "../../../../data/statusCodes.json";
import Link from "next/link";
import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";

const page = () => {
  const {code} = useParams();
  const [imageParams, setImageParams] = useState<{webp: string} | null>(null);
  const [isError, setIsError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchDuck = async () => {
      try {
        const res = await fetch(`/api/duck/${code}`);

        if (!res.ok) {
          const errorData = await res.json();
          console.error("Server responded with error:", errorData.error);
          setIsError(true); // Optional: trigger fallback on the frontend
          return;
        }

        const data = await res.json();
        setImageParams(data.image);
      } catch (err) {
        console.error("error fetching duck:", err);
      }
    };

    fetchDuck();
  }, []);

  const selectedStatus = statusCodes.find((status: any) => status.code == code);

  const goback = () => {
    router.back();
  };

  return (
    <>
      <button
        className="flex cursor-pointer items-center gap-4 text-xl hover:text-blue-400"
        onClick={goback}
      >
        <Icon icon="tabler:arrow-bar-left" height={"24"} width={"24"} />
        Go back
      </button>

      <div className="mt-8 flex gap-6">
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
        <div className="flex h-full w-1/2 items-center justify-center">
          {isError ? (
            <div className="flex h-[500px] w-full items-center justify-center rounded-lg border border-dashed border-r-zinc-400 text-4xl">
              Oops! Error fetching 🦆❌ ...
            </div>
          ) : imageParams || isImageLoaded ? (
            <Image
              src={imageParams?.webp || ""}
              alt={`Duck ${code}`}
              className="block h-full w-full overflow-hidden rounded-lg object-contain"
              width={300}
              height={400}
              onLoad={() => setIsImageLoaded(true)}
              priority
            />
          ) : (
            <div className="flex h-[500px] w-full items-center justify-center rounded-lg border border-dashed border-r-zinc-400 text-4xl">
              🦆🦆🦆...
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
