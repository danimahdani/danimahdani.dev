"use client";
import { FC } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { type IconType } from "react-icons";
import Footer from "~ui/common/Footer";
import { UnstyledLink } from "~ui/links";

interface ContactsProps {}

type Contact = {
  icon: IconType;
  name: string;
  href: string;
}[];

export const contacts: Contact = [
  { icon: AiFillGithub, name: "Github", href: "https://github.com/danimahdani" },
  { icon: AiOutlineMail, name: "Email", href: "mailto: hellodanimahdani@gmail.com?subject=" },
  { icon: AiFillLinkedin, name: "Linkedin", href: "https://www.linkedin.com/in/danimahdani/" },
  { icon: AiOutlineDownload, name: "Download", href: "#" },
  { icon: AiOutlineInstagram, name: "Instagram", href: "https://www.instagram.com/danimahdani_/" },
];

const Contacts: FC<ContactsProps> = ({}) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-4">
      {contacts.map((item, index) => {
        const { icon: IconComponent, href } = item;
        return (
          <UnstyledLink key={index} href={href} className="flex items-center gap-x-3">
            <IconComponent size={30} />
            {item.name}
          </UnstyledLink>
        );
      })}
    </div>
  );
};

export default Contacts;
