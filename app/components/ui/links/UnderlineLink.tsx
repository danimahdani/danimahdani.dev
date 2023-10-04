import { cxm } from "libs/helpers";
import { UnstyledLink } from "./UnstyledLink";
import type { UnstyledLinkProps } from "./UnstyledLink";

export const UnderlineLink: React.FunctionComponent<UnstyledLinkProps> = ({
  href,
  children,
  className,
  ...props
}) => {
  return (
    <UnstyledLink
      className={cxm(
        "relative inline-flex items-center",
        "border-b border-dashed no-underline",
        "border-shiro",
        "font-semibold",
        "after:absolute after:-bottom-0.5 after:left-0",
        "after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full",
        "after:from-primary-500 after:to-ternary-500 after:bg-gradient-to-r",
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </UnstyledLink>
  );
};
