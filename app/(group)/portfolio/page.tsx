import { cxm } from "libs/helpers";
import Main from "~ui/common/Main";
import { FC } from "react";
import PortfolioItem from "components/portfolio/PortfolioItem";
import { Portfolio } from "danimahdani";
import { getContents } from "libs/content";
import { getNewestPortfolio } from "libs/sorters";
import { Heading } from "~ui/typography/Heading";
import Footer from "~ui/common/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PageProps {}

// const getContentsData = async () => {
//   const response = await getContents<Portfolio>("/portfolio");

//   const portfolio = response.map((d) => d.header).sort(getNewestPortfolio);

//   return portfolio;
// };

const portfoliosPath = "portfolio";

const files = fs.readdirSync(path.join(portfoliosPath));

const portfolios = files
  .map((filename) => {
    const fileContent = fs.readFileSync(path.join(portfoliosPath, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter as Portfolio,
      slug: filename.replace(".mdx", ""),
    };
  })
  .sort((a, b) => {
    return new Date(a.meta.date) < new Date(b.meta.date)
      ? 1
      : new Date(a.meta.date) > new Date(b.meta.date)
      ? 0
      : -1;
  });

const Page: FC<PageProps> = async ({}) => {
  // const portfolios = await getContentsData();

  return (
    <Main className={cxm()}>
      <div className="">
        <Heading as="h1" className="mb-3">
          Portfolio
        </Heading>
        <p className="mb-10">
          I&apos;ve put together a portfolio of my personal work . You&apos;re welcome to take a
          look and explore. Some of the portfolios even have website demos that you can try out if
          you&apos;d like.{" "}
        </p>
      </div>
      {portfolios.map((portfolio, idx) => (
        <PortfolioItem
          key={idx}
          portfolio={portfolio.meta}
          slug={portfolio.slug}
          classes={["md:grid md:grid-cols-2", "lg:grid lg:grid-cols-2"]}
        />
      ))}
      <Footer />
    </Main>
  );
};

export default Page;
