import { defineComponent as l, computed as n, openBlock as i, createElementBlock as r, normalizeClass as p, createElementVNode as d, renderSlot as c } from "vue";
import { _ as f } from "./_plugin-vue_export-helper-dad06003.mjs";
const y = l({
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
    },
    round: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = n(() => "yu-button--" + t.type), u = n(() => "yu-button-" + t.size), s = n(() => t.plain ? "yu-button-is-plain" : ""), a = n(() => t.round ? "yu-button-is-round" : "");
    return {
      yuType: o,
      yuSize: u,
      isPlain: s,
      isRound: a
    };
  }
});
function m(t, o, u, s, a, B) {
  return i(), r("button", {
    class: p(["yu-button", [t.yuType, t.yuSize, t.isPlain, t.isRound]])
  }, [
    d("span", null, [
      c(t.$slots, "default")
    ])
  ], 2);
}
const e = /* @__PURE__ */ f(y, [["render", m]]);
e.install = function(t) {
  t.component("YuButton", e);
};
const S = e;
export {
  S as YuButton,
  e as default
};
