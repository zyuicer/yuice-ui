import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/vite";
import jsx from "@vitejs/plugin-vue-jsx";

export function getViteBasePlugin() {
  return [vue(), jsx(), DefineOptions()];
}
