import { defineConfig } from "vite";
import { createEntry } from "../utils/createEntryMap";
import {
  resolvePackagePath,
  baseDistPath,
  getPackageJson
} from "../utils/getPackagePath";
import { getViteBasePlugin } from "./basePlugin";

const { name, module } = getPackageJson("ui");
const pkgPath = resolvePackagePath(name);

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
      "@": pkgPath
    }
  },
  plugins: getViteBasePlugin()
});
