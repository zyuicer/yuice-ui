import fs from "fs";
import path from "path";
export const basePackagePath = path.resolve(__dirname, "../../packages");
export const baseDistPath = path.resolve(__dirname, "../../lib");
export const IconDistPath = path.resolve(__dirname, "../../yu-icon");
export function resolvePackagePath(name, isDist) {
  name = name.charAt(0) === "/" ? name.slice(1, name.length) : name;

  if (isDist) {
    return `${baseDistPath}/${name}`;
  } else {
    return `${basePackagePath}/${name}`;
  }
}
export function getPackageJson(name) {
  const code = fs.readFileSync(
    path.resolve(resolvePackagePath(name), "./package.json"),
    {
      encoding: "utf-8"
    }
  );
  return JSON.parse(code);
}
