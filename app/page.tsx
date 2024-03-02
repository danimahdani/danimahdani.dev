import { FC } from "react";
import Main from "~ui/common/Main";
import { cxm } from "./libs/helpers";
import { Heading } from "~ui/typography/Heading";
import { Paragraph } from "~ui/typography/Paragraph";
import { IconStack } from "components/portfolio";
import { UnstyledLink } from "~ui/links";
import ParagraphLink from "~ui/links/ParagraphLink";
import Contacts from "components/contacts";
import { WrappedImage } from "~ui/images";

interface PageProps {}

const LandingPage: FC<PageProps> = async ({}) => {
  return (
    <Main useFooter={true}>
      <div className="">
        <div className="my-4">
          <Heading as="h3" className={cxm("mb-1")}>
            hi, I&apos;m Muhammad Mahdani 👋
          </Heading>
        </div>
        <Paragraph className="">
          I&apos;m a Front-End Developer based in Indonesia with a main focus on responsive,
          animated, maintainable, and accessible Websites with follow best practices as much as i
          can. Familiar with <span className="font-semibold">Javascript/Typescript</span> and{" "}
          <span className="font-semibold">PHP</span>. As a Front-End Developer, i build some website
          mostly using
          <ParagraphLink link="https://react.dev/" icon="react" text="React.js" />, i can do build
          fullstack with <ParagraphLink link="https://nextjs.org/" icon="nextjs" text="Next.js" />{" "}
          and <ParagraphLink link="https://laravel.com/" icon="laravel" text="Laravel" />.
        </Paragraph>
        <div className="flex justify-end">
          <Contacts />
        </div>
        <div className="mb-5 mt-10 flex w-full flex-row items-center gap-4">
          <div className="w-[20px] border-b border-dashed"></div>{" "}
          <h1 className="bg-gure/30 px-4 py-1 text-sm font-medium">my works</h1>{" "}
          <div className="grow border-b border-dashed"></div>
        </div>
        <div className="prose prose-zinc w-full max-w-full dark:prose-invert">
          <p data-svelte-h="svelte-d0h5ds">November 2020 - July 2023</p>
          <div className="flex gap-x-2">
            <Heading as="h3">Front End Developer at</Heading>
            <UnstyledLink className="underline-offset-4" href="https://loko.co.id/">
              <Heading as="h3" className="font-normal">
                Loko
              </Heading>
            </UnstyledLink>
          </div>
          <WrappedImage src="/loko-works.png" alt="Loko Works" width={1920} height={1080} />
          <p className="">
            Before I worked as a web developer, I joined{" "}
            <UnstyledLink className="underline-offset-4" href="https://loko.co.id/">
              Loko
            </UnstyledLink>{" "}
            as an intern UI/UX designer, then after the internship was over, I was offered as a
            Front-End developer, at that time I also participated in developing their projects, such
            as{" "}
            <UnstyledLink className="underline-offset-4" href="https://sisfocampus.loko.co.id/">
              LMS for Universities
            </UnstyledLink>
            ,{" "}
            <UnstyledLink className="underline-offset-4" href="https://sisfoschool.loko.co.id/">
              LMS for Universities
            </UnstyledLink>
            , and several other projects.
          </p>
          <Heading as="h3">Tech Stack</Heading>
          <div className="flex gap-x-10">
            <ul>
              <li>Laravel</li>
              <li>Vue.js</li>
              <li>jQuery</li>
              <li>React.js</li>
            </ul>
            <ul>
              <li>Next.js</li>
              <li>Nuxt.js</li>
              <li>Flutter</li>
            </ul>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default LandingPage;
