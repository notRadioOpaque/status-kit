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

{
  /* <main className="row-start-2 flex h-max w-full max-w-7xl flex-col items-center gap-[32px] border sm:items-start">
        <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm/6 sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-[family-name:var(--font-geist-mono)] font-semibold dark:bg-white/[.06]">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="Vercel logomark"
              className="dark:invert"
              height={20}
              src="/vercel.svg"
              width={20}
            />
            Deploy now
          </a>
          <a
            className="flex h-10 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm font-medium transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:w-auto sm:px-5 sm:text-base md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#3a3a3a]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Read our docs
          </a>
        </div>
      </main> */
}
