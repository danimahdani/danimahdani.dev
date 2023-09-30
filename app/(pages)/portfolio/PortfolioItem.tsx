import { FC } from "react";

import { WrappedImage } from "~ui/images";

import { UnstyledLink } from "~ui/links/UnstyledLink";
import { IconStack } from "./IconStack";

import type { Portfolio } from "danimahdani";

export const PortfolioItem: FC<Portfolio> = (props) => {
  const urlPortfolio = `/portfolio/${props.slug}`;

  return (
    <div key={props.slug} className="flex flex-col">
      <WrappedImage
        src={props.image}
        alt={props.title}
        className="w-full rounded-md object-cover"
        parentStyle="w-full h-44 rounded-md"
        loading="lazy"
        placeholder="blur"
        blurDataURL="/blur.svg"
        fill
      />
      <div className="mt-3">
        <h3>
          <UnstyledLink
            href={urlPortfolio}
            className="hover:border-theme-500 dark:hover:border-theme-300 border-b-2 border-dashed border-transparent"
          >
            {props.title}
          </UnstyledLink>
        </h3>
        {props.stack.length > 0 && (
          <div className="mb-3 mt-1.5 flex items-center space-x-2.5">
            {props.stack.map((stack) => (
              <IconStack type={stack} key={stack} />
            ))}
          </div>
        )}
        <p className="max-w-prose">{props.summary}</p>
      </div>
    </div>
  );
};
