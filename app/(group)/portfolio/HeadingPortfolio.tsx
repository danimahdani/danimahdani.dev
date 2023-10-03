import { cxm } from "libs/helpers";
import { HiGlobeAlt } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { UnderlineLink } from "~ui/links";

type HeadingPortfolioProps = {
  title: string;
  summary: string;
  link: { github: string; live: string };
};

export const HeadingPortfolio: React.FunctionComponent<HeadingPortfolioProps> = (props) => {
  return (
    <section className={cxm("pb-8")}>
      <h1 className={cxm("max-w-prose text-3xl md:text-5xl")}>
        {props.title.split("").map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </h1>
      <p className={cxm("my-8 w-full")}>{props.summary}</p>

      <div className={cxm("flex items-center", "gap-4")}>
        <UnderlineLink
          href={props.link.github}
          className={cxm("max-w-max", "gap-2 py-1", "text-theme-700 dark:text-theme-200")}
        >
          <SiGithub className={cxm("text-lg md:text-xl", "text-theme-800 dark:text-theme-200")} />
          <span className={cxm("text-sm md:text-base")}>Repository</span>
        </UnderlineLink>

        {props.link.live && (
          <UnderlineLink
            href={props.link.live}
            className="text-theme-700 dark:text-theme-200 max-w-max gap-2 py-1"
          >
            <HiGlobeAlt
              className={cxm("text-lg md:text-xl", "text-theme-800 dark:text-theme-200")}
            />
            <span className={cxm("text-sm md:text-base")}>Live Demo</span>
          </UnderlineLink>
        )}
      </div>

      <hr className={cxm("border-theme-300 dark:border-theme-700 mt-8")} />
    </section>
  );
};
