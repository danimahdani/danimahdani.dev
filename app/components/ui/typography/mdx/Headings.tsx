"use client";
import { cxm } from "libs/helpers";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { UnstyledLink } from "~ui/links/UnstyledLink";

type HeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const getHashURL = (asPath: string) => asPath.split("#")[1];
const isBrowser = typeof window !== "undefined";

export const HeadingTwo: React.FunctionComponent<HeadingProps> = ({ id, ...props }) => {
  const [hashPath, setHasPath] = useState(false);
  const r = usePathname();

  useEffect(() => {
    if (isBrowser) {
      if (id === getHashURL(r)) {
        setHasPath(true);
      } else {
        setHasPath(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [r]);

  return (
    <h2 id={id} {...props}>
      <UnstyledLink
        title={id}
        href={`#${id}`}
        className={cxm(
          "no-underline transition",
          "border-b border-dashed",
          "border-transparent hover:border-gray-500",
          hashPath && "border-gray-500"
        )}
      >
        {props.children}
      </UnstyledLink>
    </h2>
  );
};

export const HeadingThree: React.FunctionComponent<HeadingProps> = ({ id, ...props }) => {
  const [hashPath, setHasPath] = useState(false);
  const r = usePathname();

  useEffect(() => {
    if (isBrowser) {
      if (id === getHashURL(r)) {
        setHasPath(true);
      } else {
        setHasPath(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [r]);

  return (
    <h3 id={id} {...props}>
      <UnstyledLink
        title={id}
        href={`#${id}`}
        className={cxm(
          "no-underline transition",
          "border-b border-dashed",
          "border-transparent hover:border-gray-500",
          hashPath && "border-gray-500"
        )}
      >
        {props.children}
      </UnstyledLink>
    </h3>
  );
};

export const HeadingFour: React.FunctionComponent<HeadingProps> = ({ id, ...props }) => {
  const [hashPath, setHasPath] = useState(false);
  const r = usePathname();

  useEffect(() => {
    if (isBrowser) {
      if (id === getHashURL(r)) {
        setHasPath(true);
      } else {
        setHasPath(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [r]);

  return (
    <h4 id={id} {...props}>
      <UnstyledLink
        title={id}
        href={`#${id}`}
        className={cxm(
          "no-underline transition",
          "border-b border-dashed",
          "border-transparent hover:border-gray-500",
          hashPath && "border-gray-500"
        )}
      >
        {props.children}
      </UnstyledLink>
    </h4>
  );
};
