import { readdirSync } from "fs";
import ts from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const normalPlugins = [ts(), commonjs(), terser()];
const LEFT_MARK = "[";
const RIGHT_MARK = "]";
const NAME_CASE = "name";

const createConfig = (input, file, plugins = []) => {
  return {
    input,
    output: {
      file,
      name: file,
      format: "umd"
    },
    plugins: plugins.length ? plugins : normalPlugins
  };
};
// 获取目录下的所有文件名
export const getReaddirSyncCwd = basePath =>
  readdirSync(basePath || process.cwd());
function conversionMark(target, options) {
  const { name } = options;
  const leftMarkIndex = target.indexOf(LEFT_MARK) + 1;
  const rightMarkIndex = target.indexOf(RIGHT_MARK);
  let _target = target;
  let markRaw;
  if (leftMarkIndex !== 0 && rightMarkIndex !== -1) {
    markRaw = target.slice(leftMarkIndex, rightMarkIndex);
  }
  switch (markRaw) {
    case NAME_CASE:
      return _target.replace(`${LEFT_MARK}${markRaw}${RIGHT_MARK}`, name);
    default:
      break;
  }
}
// 将outputpath就行处理
function setupOutputPath(outputPath, name) {
  if (typeof outputPath === "string") {
    const conversionOutputPath = conversionMark(outputPath, {
      name
    });
    return conversionOutputPath;
  } else if (typeof outputPath === "function") {
    return outputPath(name);
  } else {
    return undefined;
  }
}
export const createRollupConfigList = (optioins = {}) => {
  // config
  const { outputPath, plugins, onCreateConfig, incloudRegExp, basePath } =
    optioins;
  // 获取文件夹下的所有文件
  const _filenameList = getReaddirSyncCwd(basePath);
  // 结果
  const configList = [];
  // 符合匹配规则的进行处理
  const regExp = incloudRegExp || /\.ts/;
  for (const item of _filenameList) {
    if (regExp.test(item)) {
      const name = item.replace(regExp, "");
      configList.push(
        // 是否使用自定义的 createConfig
        onCreateConfig
          ? onCreateConfig(
              `${basePath}/${item}`,
              setupOutputPath(outputPath, name) || `lib/${name}.js`,
              plugins
            )
          : createConfig(
              `${basePath}/${item}`,
              setupOutputPath(outputPath, name) || `lib/${name}.js`,
              plugins
            )
      );
    }
  }
  console.log(configList);
  return configList;
};
