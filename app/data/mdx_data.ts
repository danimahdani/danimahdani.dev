import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Portfolio } from "danimahdani";

const portfoliosPath = "portfolio";

const files = fs.readdirSync(path.join(portfoliosPath));

export const portfolios = files
  .map((filename) => {
    const fileContent = fs.readFileSync(path.join(portfoliosPath, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter as Portfolio,
      slug: filename.replace(".mdx", ""),
    };
  })
  .sort((a, b) => {
    return new Date(a.meta.date) < new Date(b.meta.date)
      ? 1
      : new Date(a.meta.date) > new Date(b.meta.date)
      ? 0
      : -1;
  });
