import { ChildrenProps } from "danimahdani";
import { cxm } from "libs/helpers";
import { FC } from "react";
import { UnstyledLink } from "~ui/links/UnstyledLink";
import { Heading } from "~ui/typography/Heading";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

interface MainProps extends ChildrenProps {
  className: string;
}

const socialMediaIcons = [
  { icon: AiFillGithub },
  { icon: AiOutlineMail },
  { icon: AiFillLinkedin },
  { icon: AiOutlineInstagram },
];

const Main: FC<MainProps> = ({ children, className }) => {
  return (
    <main className={cxm("container mx-auto max-w-4xl py-7 tracking-wide md:py-0", className)}>
      {children}
      <footer
        className={cxm(
          " mt-5 border-t-2 border-shiro",
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
    </main>
  );
};

export default Main;
