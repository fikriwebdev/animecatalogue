import SidebarLeft from "@/components/sidebar-left";
import SidebarRight from "@/components/sidebar-right";
import { clsm } from "@/utils/clsm";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUIProviders from "@/components/next-ui-providers";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const defaultTitle = "Anime Catalogue";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s - ${defaultTitle}`,
  },
  description:
    "Welcome to Anime Catalogue, your ultimate destination for exploring a vast and comprehensive collection of anime and manga titles. Dive into a meticulously curated catalogue featuring the latest releases, timeless classics, and hidden gems from the world of Japanese animation and comics. Our user-friendly interface allows you to effortlessly discover, track, and organize your favorite anime and manga series, while staying updated on upcoming releases and industry news. Join our thriving community of otaku enthusiasts and embark on a journey of immersive storytelling, vibrant characters, and endless entertainment. Explore, share, and connect with fellow anime lovers on Anime Catalogue, where your passion for Japanese animation comes to life.",
  keywords: ["anime", "manga", "anime movie", "anime rank"],
  metadataBase: new URL("https://ivsa-green.vercel.app/"),
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
          <div className="grid grid-cols-1 md:grid-cols-12">
            <SidebarLeft />
            <div className="col-span-8">
              <Header />
              <main className="min-h-screen   bg-slate-950 ">{children}</main>
            </div>
            <SidebarRight />
          </div>
        </NextUIProviders>
      </body>
    </html>
  );
}
