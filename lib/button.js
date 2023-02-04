import { defineComponent as s, computed as e, openBlock as l, createElementBlock as i, normalizeClass as p, createElementVNode as r, renderSlot as c } from "vue";
import { _ as f } from "./_plugin-vue_export-helper-dad06003.mjs";
const y = s({
  name: "YuButton",
  props: {
    type: {
      type: String,
      default: "normal"
    },
    size: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = e(() => "yu-button--" + t.type), u = e(() => "yu-button-" + t.size), a = e(() => t.plain ? "yu-button-is-plain" : "");
    return {
      yuType: o,
      yuSize: u,
      isPlain: a
    };
  }
});
function d(t, o, u, a, m, B) {
  return l(), i("button", {
    class: p(["yu-button", [t.yuType, t.yuSize, t.isPlain]])
  }, [
    r("span", null, [
      c(t.$slots, "default")
    ])
  ], 2);
}
const n = /* @__PURE__ */ f(y, [["render", d]]);
n.install = function(t) {
  t.component("YuButton", n);
};
const S = n;
export {
  S as YuButton,
  n as default
};
