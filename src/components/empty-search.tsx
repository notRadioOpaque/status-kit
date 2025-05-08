import {Icon} from "@iconify/react";

const EmptySearch = ({
  searchInput,
  onClearSearchInput,
}: {
  searchInput: string;
  onClearSearchInput: () => void;
}) => {
  return (
    <div className="mt-6 flex h-[280px] flex-col items-center gap-4 rounded-2xl bg-white bg-radial py-10 shadow-2xl dark:bg-[#262628]">
      <Icon height={24} icon="iconamoon:search-light" />

      <h4 className="text-xl font-bold">No results found</h4>
      <p className="mt-[-5px] w-[40%]">
        <span className="font-bold text-[#1e88e5]">&quot;{searchInput}&quot;</span> did not match
        any projects or commands. Please try again.
      </p>

      <button
        className="mt-6 cursor-pointer rounded-md border border-[#464646] px-3 py-1 text-sm font-bold transition-all ease-in-out hover:bg-zinc-300 dark:hover:bg-[#464646]"
        onClick={onClearSearchInput}
      >
        Clear search
      </button>
    </div>
  );
};

export default EmptySearch;
