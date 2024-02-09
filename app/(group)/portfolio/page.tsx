import React from "react";
import { cxm } from "libs/helpers";
import Main from "~ui/common/Main";
import { FC } from "react";
import PortfolioItem from "components/portfolio/PortfolioItem";
import { Heading } from "~ui/typography/Heading";
import { portfolios } from "data/mdx_data";
import { motion } from "framer-motion";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <Main className={cxm()}>
      <React.Fragment>
        <Heading as="h1" className="mb-3">
          Portfolio
        </Heading>
        <p className="mb-10">
          I&apos;ve put together a portfolio of my personal work . You&apos;re welcome to take a
          look and explore. Some of the portfolios even have website demos that you can try out if
          you&apos;d like.{" "}
        </p>
      </React.Fragment>
      {portfolios.map((portfolio, idx) => (
        <PortfolioItem
          key={idx}
          portfolio={portfolio.meta}
          slug={portfolio.slug}
          classes={["md:grid md:grid-cols-2", "lg:grid lg:grid-cols-2"]}
        />
      ))}
    </Main>
  );
};

export default Page;
