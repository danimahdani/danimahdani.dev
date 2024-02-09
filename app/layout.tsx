import "./globals.css";
import type { Metadata } from "next";
import { poppins } from "./libs/utils/fonts";
import { cxm } from "./libs/helpers";
import { ChildrenProps } from "danimahdani";
import NextTopLoader from "nextjs-toploader";
import Navbar from "~ui/common/Navigation/Navbar";
import Footer from "~ui/common/Footer";

export const metadata: Metadata = {
  title: "Muhammad Mahdani Rahmatullah",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" className={cxm(poppins.variable)} suppressHydrationWarning>
      <body className="bg-stellar">
        <NextTopLoader color="#F4C2AB" showSpinner={false} />
        <div className={cxm("min-h-[90vh] w-full", " text-shiro")}>
          <Navbar />
          <div className="px-4 md:px-10">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
