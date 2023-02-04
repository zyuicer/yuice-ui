import { defineConfig } from "rollup";
import { createRollupConfigList } from "../utils/createRollupConfig";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { getPackageJson, resolvePackagePath } from "../utils/getPackagePath";
const { name } = getPackageJson("styles");
const distPath = resolvePackagePath("styles/[name].css", true);
const pkgPath = resolvePackagePath(name);
function onCreateConfig(input, file, plugins) {
  const config = {
    input,
    output: {
      file: file
    },
    plugins: plugins(file)
  };
  return config;
}

export default defineConfig(
  createRollupConfigList({
    plugins: name => {
      return [
        postcss({
          plugins: [autoprefixer(), cssnano()],
          extract: `${name}`
        })
      ];
    },
    basePath: pkgPath,
    outputPath: distPath,
    incloudRegExp: /\.s[ac]ss/,
    onCreateConfig
  })
);
