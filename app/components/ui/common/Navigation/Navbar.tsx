"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import { cxm } from "libs/helpers";
import APP_ROUTE from "libs/constant/routes";
import { UnstyledLink } from "../../links/UnstyledLink";
import { MobileNav } from "./MobileNav";
import { RiMailLine } from "react-icons/ri";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const pathName = usePathname();

  return (
    <header
      className={cxm(
        "fixed bottom-0 left-0 right-0 z-10 md:sticky",
        "md:px-10 md:pb-4 md:pt-20",
        "bg-stellar"
      )}
    >
      <nav className={cxm("hidden md:flex", " justify-end gap-x-10", "mx-auto md:max-w-4xl")}>
        {APP_ROUTE.map((route) => {
          return (
            <UnstyledLink
              className={cxm(
                "border-b-4 font-semibold",
                pathName === route.path ? "border-comet" : "border-transparent"
              )}
              href={route.path}
              key={route.path}
            >
              {route.name}
            </UnstyledLink>
          );
        })}
      </nav>
      <nav className={cxm("flex md:hidden", "items-center justify-between", "px-5 py-3")}>
        <div className={cxm("h-8 w-8 rounded-full bg-slate-500")}></div>
        <UnstyledLink
          className="mr-2.5 inline-flex h-7 w-7 items-center justify-center"
          href="mailto: mahdanidn@gmail.com?subject="
        >
          <div className="flex items-center gap-x-2">
            <RiMailLine className={cxm("h-5 w-5")} />
            <span className="whitespace-nowrap text-sm">Email Me</span>
          </div>
        </UnstyledLink>
        <span className="">
          <MobileNav />
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
