import { Portfolio } from "danimahdani";
import { cxm } from "libs/helpers";
import { FC } from "react";
import Main from "~ui/common/Main";
import { IconStack } from "components/portfolio";
import { HiOutlineCalendar } from "react-icons/hi";
import { dateFormat, dateStringToISO } from "libs/intl";
import { WrappedImage } from "~ui/images";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { HeadingPortfolio } from "../../../components/portfolio/HeadingPortfolio";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

interface DetailPortfolioProps {
  params: {
    slug: string;
  };
}

interface PortfolioDetail {
  props: {
    header: {
      slug: string;
    } & Portfolio;
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("portfolio"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getDetailPortfolio({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(path.join("portfolio", slug + ".mdx"), "utf-8");

  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

const DetailPortfolio: FC<DetailPortfolioProps> = ({ params }) => {
  const props = getDetailPortfolio(params);

  return (
    <Main className={cxm()} useFooter={true}>
      <section className={cxm("prose", "dark:prose-invert", "md:prose-lg")}>
        <HeadingPortfolio
          title={props.fontMatter.title}
          summary={props.fontMatter.summary}
          link={props.fontMatter.link}
        />

        <section
          className={cxm("flex flex-col gap-4", "md:flex-row md:items-center md:justify-between")}
        >
          <div className={cxm("flex items-center gap-3", "w-full")}>
            {props.fontMatter.stack.map((s: any) => (
              <span className={cxm("text-2xl")} key={s}>
                <IconStack type={s} />
              </span>
            ))}
          </div>

          <div
            className={cxm(
              "flex items-center justify-start",
              "w-full gap-2",
              "md:justify-end md:text-right"
            )}
          >
            <HiOutlineCalendar className={cxm("text-lg")} />
            <time
              className={cxm("text-sm md:text-base")}
              dateTime={dateStringToISO(props.fontMatter.date)}
            >
              {dateFormat(props.fontMatter.date, undefined, { dateStyle: "medium" })}
            </time>
          </div>
        </section>

        <WrappedImage
          title={props.fontMatter.title}
          alt={props.fontMatter.title}
          src={props.fontMatter.image}
          parentStyle="w-full h-56 sm:h-72 md:h-96 my-4"
          className="rounded-md object-cover"
          priority
          fill
        />

        <MDXRemote source={props.content}></MDXRemote>
      </section>
    </Main>
  );
};

export default DetailPortfolio;
