import { openBlock as t, createElementBlock as e, renderSlot as s } from "vue";
import { _ as a } from "./_plugin-vue_export-helper-dad06003.mjs";
const c = {
  name: "YuMain"
}, r = { class: "yu-main" };
function i(o, l, m, p, _, f) {
  return t(), e("div", r, [
    s(o.$slots, "default")
  ]);
}
const n = /* @__PURE__ */ a(c, [["render", i]]);
n.install = function(o) {
  o.component(n.name, n);
};
const $ = n;
export {
  $ as YuMain,
  n as default
};
