"use client";
import { FC } from "react";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXComponents } from "~ui/typography/mdx";

interface MdxResourceProps {
  mdxSource: MDXRemoteSerializeResult;
  mdxComponents: typeof MDXComponents;
}

const MdxResource: FC<MdxResourceProps> = ({ mdxSource, mdxComponents }) => {
  return <MDXRemote {...mdxSource} components={mdxComponents} />;
};

export default MdxResource;
