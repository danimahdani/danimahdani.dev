import { join } from "path";

/** Where the content is placed.
 * You can change where you want to save your content.
 * For example, using `src/content` instead of `app/data` */
export const LOCATION_DIR = join(process.cwd(), "app/data");
