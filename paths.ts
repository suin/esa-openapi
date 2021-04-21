import glob from "glob-promise";
import { PathsObject } from "openapi3-ts";

export async function importPaths(): Promise<PathsObject> {
  const baseDir = `${__dirname}/paths`;
  const paths: PathsObject = {};
  const filePaths = await glob.promise(`${baseDir}/**/*.ts`);
  for (const filePath of filePaths) {
    const name = filePath.substring(baseDir.length).replace(/\.ts$/, "");
    paths[name] = (await import(filePath)).default;
  }
  return paths;
}
