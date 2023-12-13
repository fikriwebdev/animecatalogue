import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function clsm(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
