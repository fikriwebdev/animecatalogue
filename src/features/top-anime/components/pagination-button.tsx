"use client";

import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type PaginationButtonProps = {
  hasNextPage: boolean;
};

export default function PaginationButton({
  hasNextPage,
}: PaginationButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") || 1;

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex items-center gap-2">
      <Button
        color="secondary"
        size="sm"
        variant="ghost"
        startContent={<ChevronLeft className="w-4 h-4" />}
        isDisabled={+page === 1}
        onPress={() => {
          router.push(
            pathname + "?" + createQueryString("page", (+page - 1).toString())
          );
        }}
      >
        Prev
      </Button>
      <Button
        color="secondary"
        size="sm"
        variant="ghost"
        endContent={<ChevronRight className="w-4 h-4" />}
        isDisabled={!hasNextPage}
        onPress={() => {
          router.push(
            pathname + "?" + createQueryString("page", (+page + 1).toString())
          );
        }}
      >
        Next
      </Button>
    </div>
  );
}
