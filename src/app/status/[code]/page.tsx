"use client";

import Image from "next/image";
import {useParams, useRouter} from "next/navigation";
import Link from "next/link";
import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";

import statusCodes from "../../../../data/statusCodes.json";

const Page = () => {
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

          setIsError(true); // Optional: trigger fallback on the frontend

          throw new Error(errorData);
        }

        const data = await res.json();

        setImageParams(data.image);
      } catch (err) {
        // eslint-disable-next-line no-console
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
        <Icon height={"24"} icon="tabler:arrow-bar-left" width={"24"} />
        Go back
      </button>

      <div className="mt-8 flex flex-col gap-6 md:flex-row">
        <div className="order-2 flex w-full flex-col gap-3 md:order-1 md:w-1/2">
          <h2 className="text-6xl font-bold text-blue-400">{selectedStatus?.code}</h2>
          <div className="my-6 w-max rounded-full bg-blue-400/50 px-4 py-1">
            {selectedStatus?.phrase}
          </div>
          <div className="text-lg font-bold text-blue-400">
            Category: <span>{selectedStatus?.category}</span>
          </div>
          <p className="w-full text-lg text-zinc-400 sm:w-[80%] md:text-xl">
            {selectedStatus?.shortDescription}
          </p>
          <p className="w-full text-lg sm:w-[80%] md:text-xl">{selectedStatus?.LongDescription}</p>
          <Link
            className="mt-6 flex items-center gap-1 hover:underline"
            href={selectedStatus?.url ?? ""}
          >
            Learn more <Icon height="16" icon={"ion:arrow-up-right-box-outline"} width="16" />
          </Link>
        </div>
        <div className="order-1 flex h-full w-full items-center justify-center md:w-1/2">
          {isError ? (
            <div className="flex h-[300px] w-full items-center justify-center rounded-lg border border-dashed border-r-zinc-400 text-4xl md:h-[500px]">
              Oops! Error fetching 🦆❌ ...
            </div>
          ) : imageParams || isImageLoaded ? (
            <Image
              priority
              alt={`Duck ${code}`}
              className="block h-full w-full overflow-hidden rounded-lg object-contain"
              height={400}
              src={imageParams?.webp || ""}
              width={300}
              onLoad={() => setIsImageLoaded(true)}
            />
          ) : (
            <div className="flex h-[300px] w-full items-center justify-center rounded-lg border border-dashed border-r-zinc-400 text-4xl md:h-[500px]">
              🦆🦆🦆...
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
