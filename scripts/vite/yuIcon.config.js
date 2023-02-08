import { defineConfig } from "vite";
import generateJson from "rollup-plugin-generate-package-json";
import { createEntry } from "../utils/createEntryMap";
import {
  resolvePackagePath,
  IconDistPath,
  getPackageJson
} from "../utils/getPackagePath";
import { getViteBasePlugin } from "./basePlugin";

const { name, module } = getPackageJson("yu-icon");
const pkgPath = resolvePackagePath(name);

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: `${pkgPath}/${module}`,
        ...createEntry(true, "yu-icon", {
          RegExp: /node_modules|index\.ts|\.json|utils$|\.d\.ts$|baseProps\.ts$/
        })
      },
      name: "yuice-icon",
      formats: ["es"],
      fileName: (formate, entryName) => {
        console.log(formate);
        // return entryName + ".js";
        return "[name].js";
      }
    },
    copyPublicDir: false,
    outDir: IconDistPath,
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
      "@yu-icon": pkgPath
    }
  },
  plugins: [
    getViteBasePlugin(),
    generateJson({
      inputFolder: pkgPath,
      outFolder: IconDistPath,
      baseContents: ({ name, description, version }) => ({
        name,
        version,
        description
      })
    })
  ]
});
