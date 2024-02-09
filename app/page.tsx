import { FC } from "react";
import Main from "~ui/common/Main";
import { cxm } from "./libs/helpers";
import { Heading } from "~ui/typography/Heading";
import { Paragraph } from "~ui/typography/Paragraph";
import Contacts from "components/contacts";
import PortfolioItem from "components/portfolio/PortfolioItem";

import { portfolios } from "data/mdx_data";

interface PageProps {}

const portfoilioTwoItems = portfolios.slice(0, 2);

const LandingPage: FC<PageProps> = async ({}) => {
  return (
    <Main className={cxm("")} absolute={true}>
      <div className="">
        <div className="h-80 w-full bg-gradient-to-b from-shiro/20 to-stellar lg:hidden"></div>
        <div className="my-4">
          <Heading as="h3" className={cxm("mb-1")}>
            Muhammad Mahdani
          </Heading>
          <Heading as="h5" className={cxm("text-comet")}>
            Front-End Developer
          </Heading>
        </div>
        <Paragraph>
          Hello there, I&apos;m Dani from Indonesia Welcome to my personal website, where you can
          find my portfolio, tips and trick, and more.
        </Paragraph>
        <div className="my-14 hidden lg:flex">
          <div className="flex w-1/5 items-center justify-center ">
            <div className=" mb-5 h-24 w-24 rounded-full bg-shiro"></div>
          </div>
          <div className="">
            <Heading as="h2" className="w-max border-b-4 border-comet">
              Contact Me
            </Heading>
            <Contacts />
          </div>
        </div>
        <Paragraph>
          As a Front-End Developer, I built some websites mostly using React.js or with the
          framework of Next.js framework and Mobile using Flutter then I&apos;m still learning some
          Back-End with some libraries or frameworks like Express.js, Laravel and Nest.js. I am open
          to freelance or full-time work with you, please contact me if you are interested.
        </Paragraph>
      </div>
      {/* <div className="mt-10">
        <Heading as="h2" className="mb-5">
          Featured Portfolio
        </Heading>
        {portfoilioTwoItems.map((portfolio, idx) => (
          <PortfolioItem
            key={idx}
            portfolio={portfolio.meta}
            slug={portfolio.slug}
            classes={["md:grid md:grid-cols-2", "lg:grid lg:grid-cols-2"]}
          />
        ))}
      </div> */}
    </Main>
  );
};

export default LandingPage;
