"use client";

import { AvailableSeasonsResults } from "@/libs/get-available-seasons";
import { Tab, Tabs } from "@nextui-org/tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SeasonTabsProps = {
  tabs: AvailableSeasonsResults;
};

export default function SeasonTabs({ tabs }: SeasonTabsProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const selected = searchParams.get("tab") || tabs[0].href;

  return (
    <Tabs
      aria-label="Dynamic tabs"
      items={tabs}
      color="default"
      variant="light"
      classNames={{
        // tabList:
        //   "overflow-x-scroll w-[90vw] md:w-fit scrollbar-default md:scrollbar-hide py-4 md:py-0",
        tabList: "flex-wrap",
        tab: "w-fit",
      }}
      defaultSelectedKey={tabs[1].href}
      onSelectionChange={(key) =>
        router.push(`${pathname}?tab=${encodeURIComponent(key)}`)
      }
    >
      {(item) => <Tab key={item.href} title={item.title}></Tab>}
    </Tabs>
  );
}
