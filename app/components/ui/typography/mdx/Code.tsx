import { cxm } from "libs/helpers";

export const Code = (props: { children: React.ReactNode }) => {
  return (
    <code
      className={cxm(
        "rounded border px-1.5 py-1 font-normal",
        "bg-transparent",
        "border-theme-300 dark:border-theme-700"
      )}
    >
      {props.children}
    </code>
  );
};
