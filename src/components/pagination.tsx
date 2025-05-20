import React, {useMemo} from "react";
import {Icon} from "@iconify/react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
  itemsPerPageOptions?: number[];
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  //   Total number of pages
  const totalPages = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [itemsPerPage, totalItems],
  );

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col items-center justify-between gap-[10px] rounded-[0.313rem] py-2 text-sm leading-[17px] font-extrabold min-[1130px]:flex-row">
      <div className="item-center mr-4 ml-auto flex w-full justify-center gap-4 overflow-x-auto sm:w-fit">
        <button
          className="hover:text-primary-500 border-dark-stroke-2 global-tertiary-bg group-hover:border-light-outline-1 group-hover:dark:border-dark-stroke-2 flex w-[80px] cursor-pointer justify-between rounded-sm border p-2 transition-colors group-hover:border disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-white"
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <Icon height="16" icon="ep:arrow-left" width="16" />

          <span>Prev</span>
        </button>

        <button
          className="hover:text-primary-500 border-dark-stroke-2 global-tertiary-bg group-hover:border-light-outline-1 group-hover:dark:border-dark-stroke-2 flex w-[80px] cursor-pointer justify-between rounded-sm border p-2 transition-colors group-hover:border disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-white"
          disabled={currentPage >= totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <span>Next</span>
          <Icon height="16" icon="ep:arrow-right" width="16" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
