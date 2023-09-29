import Main from "~ui/common/Main";
import { cxm } from "./libs/helpers";
import { Heading } from "~ui/typography/Heading";
import { Paragraph } from "~ui/typography/Paragraph";
import { IconStack } from "components/portfolio";
import { WrappedImage } from "~ui/images";
import { UnstyledLink } from "~ui/links/UnstyledLink";
import { IoRocketOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  return (
    <Main className={cxm()}>
      <div className="">
        <div className="mb-5 h-24 w-24 rounded-full bg-shiro"></div>
        <div className="my-4">
          <Heading as="h3" className={cxm("mb-1")}>
            Muhammad Mahdani
          </Heading>
          <Heading as="h5" className={cxm("text-comet")}>
            Front-End Developer and Mobile Developer
          </Heading>
        </div>
        <Paragraph>
          Hello there, I&apos;m Dani from Indonesia and i have been working as FrontEnd Developer
          for more than 2 years. Welcome to my personal website, where you can find my portfolio,
          blog and more.
        </Paragraph>

        <Heading as="h2" className={cxm("my-5 font-semibold")}>
          Features
        </Heading>
        {[1, 2, 3].map((e) => (
          <div
            key={e}
            className={cxm("mb-5 flex flex-col gap-x-5 last:mb-0", "md:flex-row", "lg:flex-row")}
          >
            <WrappedImage
              src="https://source.unsplash.com/random"
              alt="Portfolio 1"
              className="w-full rounded-md object-cover"
              parentStyle="w-full h-44 rounded-md"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/blur.svg"
              fill
            />
            <div className="">
              <UnstyledLink
                href="/portfolio"
                className={cxm(
                  "text-xl font-medium",
                  "hover:border-theme-500 border-b-2 border-dashed border-transparent dark:hover:border-comet"
                )}
              >
                Portfolio {e}
              </UnstyledLink>
              <div className="mb-2.5 mt-1.5 flex gap-x-3">
                <IconStack type="react" />
                <IconStack type="nodejs" />
                <IconStack type="nextjs" />
                <IconStack type="tailwindcss" />
              </div>
              <Paragraph className={cxm("lg:text-base")}>
                Educational Platform for them who want to learn about Engineering. The platform is
                built with Next.js, Tailwind CSS, MySQL and Python.
              </Paragraph>
              <div className="mt-2 flex gap-x-8">
                <div className="flex items-center gap-x-2">
                  <IoRocketOutline />
                  <UnstyledLink href="#">Live Demo</UnstyledLink>
                </div>
                <div className="flex items-center gap-x-2">
                  <GoArrowUpRight />
                  <UnstyledLink href="#">Read</UnstyledLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Main>
  );
}
