// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";

export default function NextUIProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
