import { cxm } from "libs/helpers";

export const SkipToContent: React.FunctionComponent = () => {
  return (
    <a
      className={cxm(
        "accessible",
        "absolute left-[20%] top-4",
        "inline-flex items-center justify-center",
        "rounded px-4 py-2 text-sm",
        "z-[99999] bg-gradient-to-r",
        "-translate-y-96 focus-visible:-translate-y-0",
        "from-primary-500 to-ternary-500 text-white"
      )}
      href="#skip-content"
    >
      Skip to content
    </a>
  );
};
