"use client";

import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Icon} from "@iconify/react";
import Fuse from "fuse.js";

import statusCodes from "../../data/statusCodes.json";

import EmptySearch from "./empty-search";
import ResultPanel from "./result-panel";
import InitialSearch from "./initial-search";
import SearchInput from "./search-input";
// import LoadingSearch from "./loading-search";

const SearchBar = () => {
  const [active, setActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const fuse = new Fuse(statusCodes, {
    keys: ["code", "phrase"],
    threshold: 0.3,
  });

  useEffect(() => {
    if (searchInput.trim() === "") {
      setResults([]);

      return;
    }

    const found = fuse.search(searchInput).map((r) => r.item);

    setResults(found);
  }, [searchInput]);

  // Toggle with Cmd+K or Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setActive((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Triggered search bar */}
      <button
        aria-label="Open search"
        className="w-full cursor-pointer"
        onClick={() => setActive(true)}
      >
        <div className="flex items-center rounded-2xl border border-gray-300 bg-white p-4 shadow-lg dark:border-[#464646] dark:bg-[#262628]">
          <Icon
            className="text-[#7d7d7d] dark:text-white"
            height="32"
            icon="iconamoon:search-light"
            width="32"
          />
          <input
            className="mx-4 w-full border-l border-l-[#7d7d7d] bg-transparent pl-4 text-2xl outline-0 dark:border-l-[#464646]"
            placeholder="Search HTTP codes..."
          />
          <div className="ml-auto flex w-max items-center gap-0.5 rounded-lg bg-[#7d7d7d] px-2.5 py-1.5 font-bold text-white dark:bg-[#464646]">
            <span>⌘</span>
            <span>K</span>
          </div>
        </div>
      </button>

      {/* Overlay + Expanded UI */}
      <AnimatePresence>
        {active && (
          <>
            {/* Background Overlay */}
            <motion.div
              animate={{opacity: 1}}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xl"
              exit={{opacity: 0}}
              initial={{opacity: 0}}
              onClick={() => setActive(false)}
            />

            {/* Search Popup */}
            <motion.div
              animate={{y: 0, opacity: 1}}
              className="fixed top-[20%] left-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2 rounded-xl shadow-2xl"
              exit={{y: 50, opacity: 0}}
              initial={{y: 50, opacity: 0}}
            >
              <SearchInput action={setSearchInput} searchInput={searchInput} />

              {!searchInput ? (
                <InitialSearch />
              ) : // ) : loading ? (
              //   <LoadingSearch />
              results && results.length > 0 ? (
                <ResultPanel results={results} />
              ) : (
                <EmptySearch
                  searchInput={searchInput}
                  onClearSearchInput={() => setSearchInput("")}
                />
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchBar;
