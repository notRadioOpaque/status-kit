"use client";

import * as React from "react";
import {ReactNode} from "react";
import {useState} from "react";
import classNames from "classnames";
import {useRouter} from "next/navigation";

export interface TableColumn<T> {
  header: string | React.JSX.Element;
  cell: ReactNode | ((item: T) => ReactNode) | string;
  loader?: ReactNode;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data?: T[];
  isLoading?: boolean;
  tableClassName?: string;
  tdClassName?: string;
  trClassName?: string;
  thClassName?: string;
  cellClassName?: string;
  tableString?: string;
  emptyStateLink?: string | (() => string);
  isSearchParams?: boolean;
  onRowClick?: (item: T) => void;
  emptyStateLabel?: string;
}

const Table = <T,>({
  columns,
  data = [],
  isLoading = false,
  // errorMessage = '',
  tableClassName = "",
  tdClassName = "",
  trClassName = "",
  thClassName = "",
  cellClassName = "",
  tableString,
  emptyStateLink,
  isSearchParams = false,
  onRowClick = undefined,
  emptyStateLabel = "Nothing to show",
}: TableProps<T>) => {
  const [selectedRow, setSelectedRow] = useState<T>();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  if (!isLoading && !data?.length) {
    return (
      <div
        className={`dark:border-dark-stroke relative hidden h-[368px] flex-col items-center justify-center gap-3 rounded-xl pt-[2rem] lg:flex ${tableClassName}`}
      >
        {loading ? (
          <div className="absolute top-[50%] left-[50%] grid h-[200px] w-[200px] translate-x-[-50%] translate-y-[-50%] place-items-center">
            {/* <SectionLoading /> */}
          </div>
        ) : null}

        {!isSearchParams ? (
          <>
            <iframe
              className="mb-4"
              height="103"
              src="https://lottie.host/embed/b90f126b-38e8-4065-8e78-e7d377af2bf4/SXNfHBrkc3.json"
              title="Loading animation"
              width="270"
              onLoad={handleIframeLoad}
            />

            <p className="text-charleston-green-30 text-sm font-medium">{emptyStateLabel}</p>
            <button
              className="text-orange-accent-100 text-sm font-medium hover:underline"
              type="button"
              onClick={() => {
                if (!emptyStateLink) return;
                if (typeof emptyStateLink === "function") {
                  emptyStateLink();
                } else {
                  router.push(emptyStateLink);
                }
              }}
            >
              {tableString}
            </button>
          </>
        ) : (
          <>
            <iframe
              className="mb-4"
              height="103"
              src="https://lottie.host/embed/6b8d5541-a852-4f96-8a21-8e2d70be8d9f/NqpqHZXtFA.json"
              title="Loading animation"
              width="270"
              onLoad={handleIframeLoad}
            />
            <p className="text-charleston-green-30 text-sm font-medium">
              No item matches your search
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="hidden w-full lg:block">
      <div
        className={`${tableClassName} border-gray-accent-300 dark:border-dark-stroke relative !z-[30] w-full !rounded-t-[4px]`}
      >
        <table className="w-full">
          <thead>
            <tr className="global-subtext bg-gray-accent-50 dark:bg-dark-stroke dark:text-dark-text">
              {columns.map((column, index) => (
                <th
                  key={String(index + 1)}
                  className={classNames(
                    `text-12 border border-zinc-500 px-[0.813rem] py-[14px] align-middle font-semibold whitespace-nowrap first:rounded-tl-[4px] last:rounded-tr-[4px] ${thClassName}`,
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-grey-outline dark:divide-dark-stroke divide-y">
            {isLoading
              ? // Render a loading skeleton while data is being fetched
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <tr key={num}>
                    {columns.map((_column, columnIndex) => (
                      <td
                        key={String(columnIndex + 1)}
                        aria-label="loader"
                        className="h-[44px] px-[0.813rem] align-middle text-sm whitespace-nowrap"
                      >
                        {/* <SkeletonLoader /> */}
                      </td>
                    ))}
                  </tr>
                ))
              : data?.map((item, rowIndex) => (
                  <tr
                    key={String(rowIndex + 1)}
                    className={classNames(`transition-all duration-300 ${trClassName}`, {
                      "cursor-pointer bg-transparent hover:bg-zinc-400/20": onRowClick,
                      "": JSON.stringify(item) === JSON.stringify(selectedRow),
                    })}
                    onClick={() => {
                      if (onRowClick) {
                        setSelectedRow(item);
                        onRowClick?.(item);
                      }
                    }}
                  >
                    {columns.map((column, columnIndex) => (
                      <td
                        key={String(columnIndex + 1)}
                        className={classNames(
                          `border border-zinc-500 px-[0.813rem] align-middle text-[14px] font-semibold whitespace-nowrap capitalize ${tdClassName} ${cellClassName}`,
                        )}
                      >
                        {typeof column.cell === "function" ? column.cell(item) : column.cell}
                      </td>
                    ))}
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
