import { cxm } from "libs/helpers";

import {
  SiCodesandbox,
  SiCss3,
  SiFirebase,
  SiFramer,
  SiGo,
  SiJavascript,
  SiMarkdown,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

type IconStackProps = {
  type: string;
  className?: string;
};

export const IconStack: React.FunctionComponent<IconStackProps> = ({ type, className }) => {
  const check = type.toLowerCase();
  switch (check) {
    case "react":
    case "react.js":
    case "reactjs":
      return <SiReact className={cxm("text-sky-500", className)} />;

    case "next.js":
    case "nextjs":
      return <SiNextdotjs className={cxm("text-theme-800 dark:text-theme-200", className)} />;
    case "nodejs":
    case "node.js":
      return <SiNodedotjs className={cxm("text-emerald-500", className)} />;

    case "vite":
      return <SiVite className={cxm("text-yellow-500", className)} />;

    case "redux":
      return <SiRedux className={cxm("text-violet-500", className)} />;

    case "firebase":
      return <SiFirebase className={cxm("text-amber-500", className)} />;

    case "tailwindcss":
    case "tailwind css":
      return <SiTailwindcss className={cxm("text-teal-500", className)} />;

    case "sass":
    case "scss":
      return <SiSass className={cxm("text-pink-500 dark:text-pink-400", className)} />;

    case "css":
    case "CSS":
      return <SiCss3 className={cxm("text-blue-600 dark:text-blue-500", className)} />;

    case "framer motion":
      return <SiFramer className={cxm("text-theme-800 dark:text-theme-200", className)} />;

    case "javascript":
      return <SiJavascript className={cxm("text-yellow-500", className)} />;

    case "typescript":
      return <SiTypescript className={cxm("text-blue-600", className)} />;

    case "markdown":
      return <SiMarkdown className={cxm("text-theme-800 dark:text-theme-200", className)} />;

    case "supabase":
      return <SiSupabase className={cxm("text-emerald-600 dark:text-emerald-500", className)} />;

    case "go":
      return <SiGo className={cxm("text-emerald-600 dark:text-emerald-500", className)} />;

    default:
      return <SiCodesandbox className={cxm("text-slate-900 dark:text-slate-800", className)} />;
  }
};
