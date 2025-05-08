import {Icon} from "@iconify/react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import FAQS from "@/components/faqs";
import {Tag} from "@/components/tag";
import CommandGuide from "@/components/command-guide";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <div className="bg-noise relative grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 bg-white p-8 pb-20 text-[#171717] transition sm:p-10 dark:bg-[#171717] dark:text-white">
      <Header />

      <main className="row-start-2 flex h-max w-full max-w-7xl flex-col items-center justify-center gap-[32px] text-center">
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

        <h1 className="text-4xl font-extrabold">
          Explore HTTP status codes with clarity and speed
        </h1>
        <h1 className="mt-[-20px] text-4xl font-extrabold">no fluff, just the facts you need.</h1>

        <p className="">
          Whether you&apos;re debugging APIs or just curious, StatusKit makes HTTP codes easy to
          understand.
        </p>
        <p className="mt-[-30px]">
          Perfect for devs, learners, and curious minds — learn when, why, and how each code is
          used.
        </p>

        <div className="flex h-24 w-[60%] items-center justify-center">
          <SearchBar />
        </div>

        <CommandGuide />
      </main>

      {/* <FAQS /> */}
      <Footer />
    </div>
  );
}
