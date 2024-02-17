"use client";

import useCreateQueryString from "@/hooks/use-create-query-string";
import { Pagination as NextUIPagination } from "@nextui-org/pagination";
import { usePathname, useRouter } from "next/navigation";

type PaginationProps = {
  totalPage: number;
  page: number;
};

export default function Pagination({ totalPage, page }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useCreateQueryString();

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-4 z-10">
      <NextUIPagination
        total={totalPage}
        color="secondary"
        size="sm"
        showControls
        page={+page}
        onChange={(page) => {
          router.push(
            pathname +
              "?" +
              createQueryString({
                page: page.toString(),
              })
          );
        }}
        classNames={{
          base: "bg-primary-700/20 rounded-xl backdrop-blur-md",
          item: "bg-primary-900 [&[data-hover=true]:not([data-active=true])]:bg-primary-800",
          next: "bg-primary-900 &[data-hover=true]:not([data-active=true])]:bg-primary-800",
          prev: "bg-primary-900 &[data-hover=true]:not([data-active=true])]:bg-primary-800",
        }}
      />
    </div>
  );
}
