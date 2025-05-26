import {Icon} from "@iconify/react";
import {useEffect, useRef} from "react";

const ResultPanel = ({
  results,
  onSelect,
  selectedIndex,
}: {
  results: any[];
  onSelect: (result: any) => void;
  selectedIndex: number;
}) => {
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Scroll selected item into view
  useEffect(() => {
    const currentItem = itemRefs.current[selectedIndex];

    if (currentItem) {
      currentItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-white pt-4 outline-none dark:bg-[#262628]">
      <div className="mx-4 my-1 max-h-[400px] overflow-y-auto md:mx-6 md:my-4">
        <div className="flex flex-col gap-4">
          {results.map((result, index) => (
            <button
              key={result.code}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 p-3 transition-all ease-in-out md:p-4 ${
                index === selectedIndex
                  ? "border-zinc-400 bg-zinc-300 dark:border-[#7a7a7a] dark:bg-[#3f3f41]"
                  : "border-transparent bg-zinc-200 hover:border-zinc-400 dark:bg-[#333337] dark:hover:border-[#464646]"
              }`}
              onClick={() => onSelect(result)}
            >
              <p className="font-bold text-[#1e88e5]">{result.code}</p>
              <span className="h-0 w-4 border-y border-y-[#1e88e5]" />
              <p>{result.phrase}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 border-t border-t-zinc-200 px-6 py-4 dark:border-t-[#464646]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="rounded bg-zinc-300 p-0.5 dark:bg-[#464646]">
              <Icon className="text-white" height="14" icon="mi:arrow-up" width="14" />
            </span>
            <span className="rounded bg-zinc-300 p-0.5 dark:bg-[#464646]">
              <Icon className="text-white" height="14" icon="mi:arrow-down" width="14" />
            </span>
          </div>
          <p className="text-sm">to navigate</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-zinc-300 p-0.5 dark:bg-[#464646]">
            <Icon className="text-white" height="14" icon="mi:enter" width="14" />
          </span>
          <p className="text-sm">to select</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPanel;
