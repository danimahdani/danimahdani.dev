import "./globals.css";
import type { Metadata } from "next";
import { poppins } from "./libs/utils/fonts";
import { cxm } from "./libs/helpers";
import { ChildrenProps } from "danimahdani";
import NextTopLoader from "nextjs-toploader";
import Navbar from "~ui/common/Navigation/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://danimahdani.vercel.app"),
  title: "Muhammad Mahdani Rahmatullah",
  description: "Welcome to my portfolio",
  icons: {
    icon: "/dan.svg",
  },
  openGraph: {
    title: "Muhammad Mahdani Rahmatullah",
    description: "Welcome to my portfolio",
    url: "https://danimahdani.vercel.app",
    siteName: "Muhammad Mahdani",
    images: [
      {
        url: "https://danimahdani.vercel.app/dan.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" className={cxm(poppins.variable)} suppressHydrationWarning>
      <link rel="icon" type="image/x-icon" href="/dan.svg"></link>
      <body className="bg-stellar">
        <NextTopLoader color="#F4C2AB" showSpinner={false} />
        <div className={cxm("md:min-h-[90vh]", " text-shiro")}>
          <Navbar />
          <div className="px-4 md:px-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
