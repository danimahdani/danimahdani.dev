import { cxm } from "libs/helpers";
import { FC } from "react";
import { UnstyledLink } from "~ui/links/UnstyledLink";
import { Heading } from "~ui/typography/Heading";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

const socialMediaIcons = [
  { icon: AiFillGithub },
  { icon: AiOutlineMail },
  { icon: AiFillLinkedin },
  { icon: AiOutlineInstagram },
];

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer
      className={cxm(
        "mx-auto mt-5 max-w-2xl border-t-2 border-shiro text-shiro lg:max-w-3xl",
        "flex justify-between pt-2",
        "mb-12 lg:md:pb-7"
      )}
    >
      <Heading as="h5" className={cxm("text-sm font-medium")}>
        Crafted by Mahdani
      </Heading>
      <div className="flex gap-x-5">
        {socialMediaIcons.map((item, index) => {
          const { icon: IconComponent } = item;
          return (
            <UnstyledLink key={index} href="#">
              <IconComponent size={24} />
            </UnstyledLink>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
