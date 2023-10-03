import { Menu, Transition } from "@headlessui/react";
import APP_ROUTE from "libs/constant/routes";
import { cxm } from "libs/helpers";
import { Fragment } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import type { IconType } from "react-icons/lib";
import { RiHome6Line, RiPenNibLine, RiBriefcase5Line } from "react-icons/ri";
import { UnstyledLink } from "~ui/links/UnstyledLink";

type RouteType = (typeof APP_ROUTE)[0] & { icon: IconType };

const icon = {
  home: RiHome6Line,
  portfolio: RiBriefcase5Line,
  blog: RiPenNibLine,
} as Record<string, IconType>;

const route: RouteType[] = APP_ROUTE.map((r) => ({ ...r, icon: icon[r.name.toLowerCase()] }));

export const MobileNav: React.FunctionComponent = () => {
  return (
    <Menu as="div" className="relative z-40 block md:hidden">
      <Menu.Button
        title="Menu button"
        className={cxm(
          "inline-flex items-center justify-center",
          "h-9 w-9 rounded md:h-12 md:w-12",
          "bg-primary-100 text-shiro"
        )}
      >
        <span className="sr-only">Click to open menu</span>
        <HiMenuAlt4 className="h-4 w-4" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="div"
          className={cxm(
            "transfrom absolute top-0 -translate-y-full md:top-14",
            "right-0 w-40 p-1.5",
            "origin-top-right rounded shadow-lg",
            "ring-1 focus:outline-none",
            "bg-stellar ring-comet/5"
          )}
        >
          <div className="flex w-full flex-col">
            {route.map((route) => {
              return (
                <Menu.Item key={route.path} as={Fragment}>
                  {({ active }) => (
                    <UnstyledLink
                      className={cxm(
                        "flex h-10 items-center space-x-2.5 rounded px-2.5 ",
                        active && "bg-comet text-shiro hover:transition-all hover:duration-300"
                      )}
                      href={route.path}
                    >
                      <route.icon className="h-4 w-4" />
                      <span className="text-sm">{route.name}</span>
                    </UnstyledLink>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
