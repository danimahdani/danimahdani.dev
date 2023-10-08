import { LOCATION_DIR, readDirectory } from "libs/directory";
import { readFile } from "fs/promises";
import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

export type GetContents<T> = { content: string; header: { slug: string } & T };

export const getContents = async <T>(
  /** the path to the content folders, example: `/blog`,
   * NOTE: that the slash is required!
   */
  path: string
): Promise<Array<GetContents<T>>> => {
  // read files inside app/data/blog
  const fileContents = await readDirectory(path);

  // map files and returns as a Promise
  const files = fileContents.map(async (p) => {
    // write the path file like: `app/data/blog
    const dir = join(`${LOCATION_DIR}/${path}`, p);
    // then read the file with fs promise, format will be utf8
    // const file = await readFile(dir, "utf8");
    const file = fs.readFileSync(dir, "utf8");

    // parse the file with matter and convert it from markdown
    // extract the content, and the headers(data)
    const { content, data: fontMatter } = matter(file);

    return {
      header: {
        ...(fontMatter as T),
        slug: p.replace(".mdx", ""),
      },
      content,
    };
  });

  return await Promise.all(files);
};
