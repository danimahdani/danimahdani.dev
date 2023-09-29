"use client";
import { cxm } from "libs/helpers";
import Main from "~ui/common/Main";
import { FC } from "react";
import { Fragment } from "react";
import { Tab, Transition } from "@headlessui/react";
import { useState } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Main className={cxm()}>
      <div className="">
        <h1 className="mb-3">Portfolio</h1>
        <p className="mb-10">
          I&apos;ve put together a portfolio of my personal work . You&apos;re welcome to take a
          look and explore. Some of the portfolios even have website demos that you can try out if
          you&apos;d like.{" "}
        </p>
      </div>
      <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
        <Tab.List className={cxm("mb-8 flex gap-x-8")}>
          {[
            {
              id: 1,
              name: "Website",
            },
            {
              id: 2,
              name: "Mobile",
            },
          ].map((d) => (
            <Tab
              key={d.id}
              className={({ selected }) =>
                cxm(
                  "w-max border-b-4 font-semibold outline-none",
                  selected ? "border-comet" : "border-transparent"
                )
              }
            >
              {d.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {[1, 2].map((d, idx) => (
            <Tab.Panel key={idx}>
              <Transition
                appear
                show={tabIndex == idx}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </div>
              </Transition>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Main>
  );
};

export default page;
