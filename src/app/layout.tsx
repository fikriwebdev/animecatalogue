import SidebarLeft from "@/components/sidebar-left";
import SidebarRight from "@/components/sidebar-right";
import { clsm } from "@/utils/clsm";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUIProviders from "@/components/next-ui-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Anime List",
  description: "See all anime list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={clsm(inter.className, "bg-slate-950 text-white")}>
        <NextUIProviders>
          <div className="grid grid-cols-12">
            <SidebarLeft />
            <main className="min-h-screen  p-8 bg-slate-950 col-span-8">
              {children}
            </main>
            <SidebarRight />
          </div>
        </NextUIProviders>
      </body>
    </html>
  );
}
