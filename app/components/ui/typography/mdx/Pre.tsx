"use client";
import { cxm } from "libs/helpers";
import { useEffect, useRef, useState } from "react";
import { HiCheck, HiClipboardCopy } from "react-icons/hi";
import { UnstyledButton } from "~ui/buttons";

interface PreProps {
  children: React.ReactNode;
  className?: string;
}

export const Pre = ({ children, className }: PreProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const preRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = async () => {
    if (preRef.current && !isCopied) {
      await navigator.clipboard.writeText(preRef.current.textContent as string);
      setIsCopied(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsCopied(false), 1500);

    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <div className={cxm("relative")}>
      <div
        className={cxm(
          "absolute left-0 right-12",
          "h-11 rounded-br rounded-tl",
          "text-sm font-semibold",
          "text-main-1.5 bg-slate-700"
        )}
      >
        <div
          className={cxm(
            "inline-flex items-center justify-start",
            "h-full rounded-tl px-4 md:px-8",
            "text-theme-100 bg-primary-600"
          )}
        >
          {className?.replace("language-", "").toUpperCase()}
        </div>
      </div>

      <div
        className={cxm(
          "absolute right-0 top-0",
          "flex items-center justify-center",
          "h-11 w-11 rounded-bl rounded-tr",
          "bg-slate-700"
        )}
      >
        <UnstyledButton
          onClick={copyToClipboard}
          className={cxm(
            "group relative",
            "h-8 w-8 rounded-lg transition-all duration-200",
            "ring-primary-400",
            "ring-offset-primary-400",
            "hover:ring"
          )}
        >
          {isCopied ? (
            <HiCheck className={cxm("h-4 w-4", "text-emerald-500")} />
          ) : (
            <HiClipboardCopy className={cxm("h-4 w-4", "text-theme-100")} />
          )}
          <span className="sr-only">Copy to clipboard</span>
        </UnstyledButton>
      </div>

      <pre ref={preRef} className={cxm("pt-[3.5rem!important] [&>code]:border-none", className)}>
        {children}
      </pre>
    </div>
  );
};
