import {Icon} from "@iconify/react";

const ResultPanel = ({results}: {results: any[]}) => {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-white pt-4 dark:bg-[#262628]">
      <div className="mx-6 my-4 flex flex-col gap-4">
        {results.map((result) => (
          <button
            key={result.code}
            className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-transparent bg-zinc-200 p-4 transition-all ease-in-out hover:border-zinc-400 dark:bg-[#333337] dark:hover:border-[#464646]"
          >
            <p className="font-bold text-[#1e88e5]">{result.code}</p>{" "}
            <span className="h-0 w-4 border-y border-y-[#1e88e5]" />
            <p>{result.phrase}</p>
          </button>
        ))}
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
          <div className="flex gap-1">
            <span className="rounded bg-zinc-300 p-0.5 dark:bg-[#464646]">
              <Icon className="text-white" height="14" icon="mi:enter" width="14" />
            </span>
          </div>

          <p className="text-sm">to select</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPanel;
