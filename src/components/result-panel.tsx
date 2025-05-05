import {Icon} from "@iconify/react";

const ResultPanel = () => {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[#262628] pt-4">
      <div className="mx-6 my-4 flex flex-col gap-4">
        <button className="cursor-pointer rounded-lg border-2 border-transparent bg-[#333337] p-4 transition-all ease-in-out hover:border-[#464646]">
          200 OK — The request was successful
        </button>
        <button className="cursor-pointer rounded-lg border-2 border-transparent bg-[#333337] p-4 transition-all ease-in-out hover:border-[#464646]">
          404 Not Found — The resource was not found
        </button>
      </div>
      {/* Map over actual results here */}

      <div className="flex items-center justify-end gap-4 border-t border-t-[#464646] px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="rounded bg-[#464646] p-0.5">
              <Icon height="14" icon="mi:arrow-up" width="14" />
            </span>
            <span className="rounded bg-[#464646] p-0.5">
              <Icon height="14" icon="mi:arrow-down" width="14" />
            </span>
          </div>

          <p className="text-sm">to navigate</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="rounded bg-[#464646] p-0.5">
              <Icon height="14" icon="mi:enter" width="14" />
            </span>
          </div>

          <p className="text-sm">to select</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPanel;
