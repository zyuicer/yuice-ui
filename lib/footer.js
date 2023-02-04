import { defineComponent as t, openBlock as n, createElementBlock as r, renderSlot as s } from "vue";
import { _ as c } from "./_plugin-vue_export-helper-dad06003.mjs";
const a = t({
  name: "YuFooter",
  setup() {
    return {};
  }
}), p = { class: "yu-footer" };
function f(e, u, i, l, m, _) {
  return n(), r("div", p, [
    s(e.$slots, "default")
  ]);
}
const o = /* @__PURE__ */ c(a, [["render", f]]);
o.install = function(e) {
  e.component(o.name, o);
};
const F = o;
export {
  F as YuFooter,
  o as default
};
