import { defineConfig } from "vite";
import generateJson from "rollup-plugin-generate-package-json";
import { createEntry } from "../utils/createEntryMap";
import {
  resolvePackagePath,
  baseDistPath,
  getPackageJson
} from "../utils/getPackagePath";

import { getViteBasePlugin } from "./basePlugin";

const { name, module } = getPackageJson("ui");
const pkgPath = resolvePackagePath(name);
const yuIconPath = resolvePackagePath("yu-icon");
const hookPath = resolvePackagePath("hooks");
export default defineConfig({
  build: {
    lib: {
      entry: {
        index: `${pkgPath}/${module}`,
        ...createEntry(true, "ui/components", {
          RegExp: /node_modules|index\.ts|\.json|utils$|\.d\.ts$/
        })
      },
      name: "yuice-ui",
      formats: ["es"],
      fileName: (formate, entryName) => {
        console.log(formate);
        // return entryName + ".js";
        return "[name].js";
      }
    },
    outDir: baseDistPath,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@components": `${pkgPath}/component`,
      "@ui": pkgPath,
      "@yu-icon": yuIconPath,
      hooks: hookPath
    }
  },
  plugins: [
    getViteBasePlugin(),
    generateJson({
      inputFolder: pkgPath,
      outFolder: baseDistPath,
      baseContents: ({ description, version }) => ({
        name: "yuice-ui",
        version,
        main: "index.js",
        description
      })
    })
  ],
  clearScreen: false
});
