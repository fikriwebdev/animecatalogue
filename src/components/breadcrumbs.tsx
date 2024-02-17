"use client";

import {
  Breadcrumbs as NextUIBreadcrumbs,
  BreadcrumbItem,
} from "@nextui-org/breadcrumbs";

type Item = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: Item[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <NextUIBreadcrumbs>
      {items.map((item) => (
        <BreadcrumbItem key={item.label} href={item.href}>
          {item.label}
        </BreadcrumbItem>
      ))}
    </NextUIBreadcrumbs>
  );
}
