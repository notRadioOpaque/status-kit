"use client";

import {useState} from "react";

import Table from "@/components/table";
import Pagination from "@/components/pagination";

import statusCodes from "../../../data/statusCodes.json";
import {useRouter} from "next/navigation";
import {Icon} from "@iconify/react";

const itemsPerPageOptions = [10, 20, 30];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const router = useRouter();

  function navigate(slug: number) {
    router.push(`status/${slug}`);
  }

  const columns = [
    {
      header: "S/N",
      cell: (item: any) => (
        <div className="flex items-center gap-5 px-3">
          <span className="py-[14px]">{item.id + 1}</span>
        </div>
      ),
    },
    {
      header: "Code",
      cell: (item: any) => (
        <div className={`flex flex-col`}>
          <span className="px-3 py-[14px] text-blue-500">{item.code}</span>
        </div>
      ),
    },
    {
      header: "Title",
      cell: (item: any) => <span className="px-3">{item.phrase}</span>,
    },
    {
      header: "Category",
      cell: (item: any) => <div className="flex items-center gap-1 px-3">{item.category}</div>,
    },
    {
      header: "Short description",
      cell: (item: any) => (
        <div className="flex items-center justify-between pl-[12px]">
          <span>{item.shortDescription}</span>
        </div>
      ),
    },
  ];

  const statuses = statusCodes.map((status, idx) => {
    return {
      id: idx,
      ...status,
    };
  });

  const goback = () => {
    router.back();
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedStatuses = statuses.slice(startIndex, endIndex);

  return (
    <div className="mt-6 flex flex-col gap-7">
      <button
        className="flex cursor-pointer items-center gap-4 text-xl hover:text-blue-400"
        onClick={goback}
      >
        <Icon icon="tabler:arrow-bar-left" height={"24"} width={"24"} />
        Go back
      </button>
      <h1 className="text-4xl font-extrabold">List of all status codes</h1>
      <Table
        onRowClick={(item) => navigate(item.code)}
        columns={columns}
        data={paginatedStatuses || []}
        tableString="List of status codes"
      />
      <div className="flex items-center justify-between">
        <div>
          showing {startIndex + 1}-{endIndex} of {statuses.length}
        </div>

        {statuses.length > 0 && (
          <div className="flex items-center justify-end gap-10">
            <div className="flex items-center gap-2">
              <p>Items per page</p>

              <select
                className="rounded-sm border px-2 py-1"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                {itemsPerPageOptions.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <Pagination
              className="m-4"
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              setCurrentPage={setCurrentPage}
              totalItems={statuses.length || 0}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
