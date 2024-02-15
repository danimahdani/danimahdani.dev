import { FC } from "react";
import { UnstyledLink } from "./UnstyledLink";
import { IconStack } from "components/portfolio";

interface ParagraphLinkProps {
  link: string;
  text: string;
  icon: string;
}

const ParagraphLink: FC<ParagraphLinkProps> = ({ link, text, icon }) => {
  return (
    <UnstyledLink
      href={link}
      className="mx-1 inline-flex items-center justify-center gap-x-1 rounded bg-shiro/10 px-1 text-base"
    >
      <IconStack type={icon} />
      <span className="">{text}</span>
    </UnstyledLink>
  );
};

export default ParagraphLink;
