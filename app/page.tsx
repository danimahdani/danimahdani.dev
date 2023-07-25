import Main from "~ui/common/Main";
import { cxm } from "./libs/helpers";
import { Heading } from "~ui/typography/Heading";
import { Paragraph } from "~ui/typography/Paragraph";

export default function Home() {
  return (
    <Main className={cxm()}>
      <div className="">
        <div className="mb-5 h-24 w-24 rounded-full bg-shiro"></div>
        <div className="my-4">
          <Heading as="h3" className={cxm("mb-1")}>
            Muhammad Mahdani
          </Heading>
          <Heading as="h5" className={cxm("text-comet")}>
            Front-End Developer and Mobile Developer
          </Heading>
        </div>
        <Paragraph>
          Hello there, I&apos;m Dani from Indonesia and i have been working as FrontEnd Developer
          for more than 2 years. Welcome to my personal website, where you can find my portfolio,
          blog and more.
        </Paragraph>
      </div>
    </Main>
  );
}
