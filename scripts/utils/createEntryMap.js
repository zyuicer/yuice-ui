import { resolvePackagePath } from "./getPackagePath";
import { readdirSync } from "fs";
export function createEntry(isProduction = false, pkgName, options = {}) {
  const { entryPath, RegExp } = options;

  const currentPath = isProduction ? resolvePackagePath(pkgName) : null;
  console.log(currentPath);

  const paths = isProduction ? readdirSync(currentPath) : [];
  const excludeReg =
    RegExp || /node_modules|\.json$|lib|tests|config|dist|index.js/i;
  const entry = entryPath
    ? entryPath
    : isProduction
    ? paths.reduce((entryObj, pathName) => {
        if (!excludeReg.test(pathName.trim())) {
          if (pathName === "index.js") {
            entryObj["index"] = currentPath;
          } else {
            entryObj[pathName] = `${currentPath}/${pathName}`;
          }
        }
        return entryObj;
      }, {})
    : {
        main: "./src/main.js"
      };
  return entry;
}
