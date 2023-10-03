import { cxm } from "libs/helpers";

import { createElement } from "react";

export type UnstyledButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const UnstyledButton: React.FunctionComponent<UnstyledButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return createElement(
    "button",
    { ...props, className: cxm("inline-flex items-center justify-center", className) },
    children
  );
};
