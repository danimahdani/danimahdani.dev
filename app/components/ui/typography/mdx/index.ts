"use client";
import { UnderlineLink } from "~ui/links";
import { Code } from "./Code";
import { ContentImage } from "./ContentImage";
import { HeadingFour, HeadingThree, HeadingTwo } from "./Headings";
import { Pre } from "./Pre";
import { MDXRemoteProps } from "next-mdx-remote";
import Blockquote from "./Blockquote";

const MDXComponents = {
  pre: Pre,
  img: ContentImage,
  code: Code,
  a: UnderlineLink,
  ContentImage,
  blockquote: Blockquote,
  h2: HeadingTwo,
  h3: HeadingThree,
  h4: HeadingFour,
} as MDXRemoteProps["components"];

export { MDXComponents, Pre, Code, ContentImage };
