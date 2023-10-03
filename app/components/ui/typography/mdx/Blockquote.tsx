import { FC, ReactNode } from "react";

interface BlockquoteProps {
  children: ReactNode;
}

const Blockquote: FC<BlockquoteProps> = ({ children }) => {
  return (
    <blockquote className="[&>p]:opacity-60">
      {children}
      <style jsx>
        {`
          blockquote {
            border-image: linear-gradient(to bottom, #3b82f6, #14b8a6) 1;
          }
        `}
      </style>
    </blockquote>
  );
};

export default Blockquote;
