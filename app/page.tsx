import Main from "~ui/common/Main";
import { cxm } from "./libs/helpers";
import { Heading } from "~ui/typography/Heading";
import { Paragraph } from "~ui/typography/Paragraph";
import ParagraphLink from "~ui/links/ParagraphLink";
import Contacts from "components/contacts";
import { Loko, SinergiMitraGroserindo } from "components/works";

const LandingPage = () => {
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
          animated, maintainable, and accessible Websites with follow best practices as much as I
          can. Familiar with <span className="font-semibold">Javascript/Typescript</span> and{" "}
          <span className="font-semibold">PHP</span>. As a Front-End Developer, I build some website
          mostly using
          <ParagraphLink link="https://react.dev/" icon="react" text="React.js" />, I can do build
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
        <SinergiMitraGroserindo />
        <hr className="my-10" />
        <Loko />
      </div>
    </Main>
  );
};

export default LandingPage;
