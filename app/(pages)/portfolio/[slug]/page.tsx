import { Portfolio } from "danimahdani";
import { cxm } from "libs/helpers";
import { FC } from "react";
import Main from "~ui/common/Main";
import { getContents, getContentBySlug } from "libs/services/content";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import type { ParsedUrlQuery } from "querystring";
import rehypeSlug from "rehype-slug";
import { MDXComponents } from "~ui/typography/mdx";
import { IconStack } from "../IconStack";
import { HiOutlineCalendar } from "react-icons/hi";
import { dateFormat, dateStringToISO } from "libs/intl";
import { WrappedImage } from "~ui/images";

type ProjectDetailPageProps = {
  header: Portfolio;
  mdxSource: MDXRemoteSerializeResult;
};

interface pageProps {
  params: {
    slug: string;
  };
}

const components = {
  h2: (props: any) => (
    <h1 {...props} className="large-text">
      {props.children}
    </h1>
  ),
  li: (props: any) => (
    <li {...props} className="large-text text-xl">
      {props.children}
    </li>
  ),
};

// as fallback
export const dynamicParams = false;

export const generateStaticParams = async () => {
  const portfolio = await getContents<Portfolio>("/portfolio");

  const paths = portfolio.map((p) => ({ params: { slug: p.header.slug } }));

  return paths;
};

const getDetailPortfolio = async (context: pageProps) => {
  const mdxPrism = await require("mdx-prism");
  const { slug } = context.params as ParsedUrlQuery & { slug: string };
  console.log("qwe", context.params.slug);

  const res = await getContentBySlug<Portfolio>("/portfolio", slug);

  const mdxSource = await serialize(res.content, {
    mdxOptions: { rehypePlugins: [mdxPrism, rehypeSlug] },
  });

  return {
    props: {
      header: res.header,
      content: res.content,
    },
  };
};

const Page: FC<pageProps> = async (context) => {
  const {
    props: { header, content },
  } = await getDetailPortfolio(context);

  return (
    <Main className={cxm()}>
      <section className={cxm("prose", "dark:prose-invert", "md:prose-lg")}>
        <section
          className={cxm("flex flex-col gap-4", "md:flex-row md:items-center md:justify-between")}
        >
          <div className={cxm("flex items-center gap-3", "w-full")}>
            {header.stack.map((s) => (
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
            <time className={cxm("text-sm md:text-base")} dateTime={dateStringToISO(header.date)}>
              {dateFormat(header.date, undefined, { dateStyle: "medium" })}
            </time>
          </div>
        </section>

        <WrappedImage
          title={header.title}
          alt={header.title}
          src={header.image}
          parentStyle="w-full h-56 sm:h-72 md:h-96 my-4"
          className="rounded-md object-cover"
          priority
          fill
        />

        <MDXRemote source={content} components={components} />
      </section>
    </Main>
  );
};

export default Page;
