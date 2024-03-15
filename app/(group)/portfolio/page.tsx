import React from "react";
import Main from "~ui/common/Main";
import { FC } from "react";
import PortfolioItem from "components/portfolio/PortfolioItem";
import { Heading } from "~ui/typography/Heading";
import { portfolios } from "data/mdx_data";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <Main useFooter={true}>
      <React.Fragment>
        <Heading as="h1" className="mb-3">
          Portfolio
        </Heading>
        <p className="mb-10">
          On the main page you can see some of my previous work and here there are also most of my
          portfolios are in my previous work which I can&apos;t share here, here are just some of
          the personal portfolios I&apos;ve created. You&apos;re welcome to take a look and explore.
          Some of the portfolios even have website demos that you can try out if you&apos;d like.{" "}
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
