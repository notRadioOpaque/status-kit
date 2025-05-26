import {Icon} from "@iconify/react";
import Link from "next/link";

import CommandGuide from "@/components/command-guide";
import SearchBar from "@/components/search-bar";
import {Tag} from "@/components/tag";

export default function Home() {
  return (
    <main className="row-start-2 flex h-max w-full max-w-7xl flex-col items-center justify-center gap-[32px] pt-0 text-center md:pt-10">
      <Tag
        icon={
          <Icon
            className="!text-white dark:text-[#171717]"
            height="48"
            icon="icon-park:code-laptop"
            width="48"
          />
        }
        text="Decode the Web, One Status at a Time"
        textColor="#171717"
      />

      <h1 className="text-2xl font-extrabold md:text-4xl">
        Explore HTTP status codes with clarity and speed
      </h1>
      <h1 className="mt-[-20px] text-xl font-extrabold md:text-4xl">
        no fluff, just the facts you need.
      </h1>

      <p className="">
        Whether you&apos;re debugging APIs or just curious, StatusKit makes HTTP codes easy to
        understand.
      </p>
      <p className="mt-[-30px]">
        Perfect for devs, learners, and curious minds — learn when, why, and how each code is used.
      </p>

      <div className="flex h-24 w-full items-center justify-center md:w-[60%]">
        <SearchBar />
      </div>

      <Link className="underline hover:text-blue-400 hover:no-underline" href={"status-list"}>
        See full list of codes&nbsp;&nbsp;👀
      </Link>

      <CommandGuide />
    </main>
  );
}
