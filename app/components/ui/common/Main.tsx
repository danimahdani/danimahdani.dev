import { ChildrenProps } from "danimahdani";
import { cxm } from "libs/helpers";
import { FC } from "react";

interface MainProps extends ChildrenProps {
  className: string;
}

const Main: FC<MainProps> = ({ children, className }) => {
  return (
    <main className={cxm("container mx-auto max-w-4xl py-7 tracking-wide md:py-0", className)}>
      {children}
    </main>
  );
};

export default Main;
