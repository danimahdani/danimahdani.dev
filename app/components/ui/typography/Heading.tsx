import { ChildrenProps } from "danimahdani";
import { cxm } from "libs/helpers";

interface HeadingProps extends ChildrenProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export function Heading({ children, as, className }: HeadingProps) {
  switch (as) {
    case "h1":
      return <h1 className={cxm("text-4xl font-bold", className)}>{children}</h1>;
    case "h2":
      return <h1 className={cxm("text-3xl font-bold", className)}>{children}</h1>;
    case "h3":
      return <h1 className={cxm("text-2xl font-bold", className)}>{children}</h1>;
    case "h4":
      return <h1 className={cxm("text-xl font-bold", className)}>{children}</h1>;
    case "h5":
      return <h1 className={cxm("text-lg font-bold", className)}>{children}</h1>;
    case "h6":
      return <h1 className={cxm("text-base font-bold", className)}>{children}</h1>;
    default:
      return null;
  }
}
