import { FC } from "react";
import Main from "~ui/common/Main";
import { cxm } from "./libs/helpers";
import { Heading } from "~ui/typography/Heading";
import { Paragraph } from "~ui/typography/Paragraph";
import { IconStack } from "components/portfolio";
import { UnstyledLink } from "~ui/links";
import ParagraphLink from "~ui/links/ParagraphLink";
import Contacts from "components/contacts";

interface PageProps {}

const LandingPage: FC<PageProps> = async ({}) => {
  return (
    <Main useFooter={false}>
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
      </div>
    </Main>
  );
};

export default LandingPage;
