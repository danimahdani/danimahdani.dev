import { FC } from "react";
import { IconStack } from "components/portfolio";
import { WrappedImage } from "~ui/images";
import { UnstyledLink } from "~ui/links/UnstyledLink";
import { IoRocketOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { cxm } from "libs/helpers";
import { Paragraph } from "~ui/typography/Paragraph";
import { Portfolio } from "danimahdani";

interface PortfolioItemProps {
  portfolio: Portfolio;
  slug: string;
  classes: string[];
}

const PortfolioItem: FC<PortfolioItemProps> = ({ portfolio, slug, classes }) => {
  return (
    <div className={cxm("mb-5 flex flex-col gap-5 last:mb-0", ...classes)}>
      <WrappedImage
        src={portfolio.image}
        alt="Portfolio 1"
        className="w-full rounded-md object-cover"
        parentStyle="w-full h-44 rounded-md "
        loading="lazy"
        placeholder="blur"
        blurDataURL="/blur.svg"
        fill
      />
      <div className="flex-1">
        <UnstyledLink
          href={`/portfolio/${slug}`}
          className={cxm(
            "text-xl font-medium",
            "hover:border-theme-500 border-b-2 border-dashed border-transparent dark:hover:border-comet"
          )}
        >
          {portfolio.title}
        </UnstyledLink>
        <div className="mb-2.5 mt-1.5 flex gap-x-3">
          {portfolio.stack.length &&
            portfolio.stack.map((stack) => <IconStack type={stack} key={stack} />)}
        </div>
        <Paragraph className={cxm("lg:text-base")}>{portfolio.summary}</Paragraph>
        <div className="mt-2 flex gap-x-8">
          {portfolio.link.live !== "-" && (
            <div className="flex items-center gap-x-2">
              <IoRocketOutline />
              <UnstyledLink href={portfolio.link.live}>Live Demo</UnstyledLink>
            </div>
          )}
          <div className="flex items-center gap-x-2">
            <GoArrowUpRight />
            <UnstyledLink href={portfolio.link.github}>Read</UnstyledLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
