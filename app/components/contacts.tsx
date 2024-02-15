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
import { UnstyledLink } from "~ui/links";
import { motion } from "framer-motion";

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
  { icon: AiOutlineInstagram, name: "Instagram", href: "https://www.instagram.com/danimahdani_/" },
  {
    icon: AiOutlineDownload,
    name: "Download",
    href: `/Mahdani-Front_End-EN.pdf`,
  },
];

const Contacts: FC<ContactsProps> = ({}) => {
  return (
    <div className="mt-4 flex gap-x-5">
      {contacts.map((item, index) => {
        const { icon: IconComponent, href } = item;
        return (
          <motion.div key={index} whileHover={{ scale: 1.1, y: -5 }}>
            <UnstyledLink href={href} className="flex items-center gap-x-3">
              <IconComponent size={25} />
            </UnstyledLink>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Contacts;
