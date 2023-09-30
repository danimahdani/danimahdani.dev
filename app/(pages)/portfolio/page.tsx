import { FC } from "react";
import { cxm } from "libs/helpers";
import { getContents } from "libs/services/content";
import type { Portfolio } from "danimahdani";
import { getNewestPortfolio } from "libs/sorters";
import { PortfolioItem } from "./PortfolioItem";
import Main from "~ui/common/Main";

interface pagegetContents {}

const getContentsData = async () => {
  const response = await getContents<Portfolio>("/portfolio");

  const portfolio = response.map((d) => d.header).sort(getNewestPortfolio);
  return portfolio;
};

const page: FC<pagegetContents> = async ({}) => {
  const portfolios = await getContentsData();

  return (
    <Main className={cxm()}>
      <section className="py-16">
        <h2 className="mb-1 md:mb-3">Portfolio</h2>
        {portfolios.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2">
            {portfolios.map((item) => {
              return <PortfolioItem key={item.slug} {...item} />;
            })}
          </div>
        )}
      </section>
    </Main>
  );
};

export default page;
