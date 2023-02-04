import { defineComponent as l, getCurrentInstance as p, computed as a, openBlock as u, createElementBlock as c, normalizeClass as m, normalizeStyle as f, renderSlot as i } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-dad06003.mjs";
const y = l({
  name: "YuCol",
  props: {
    span: {
      type: Number,
      default: 1
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(e) {
    var o;
    const t = p(), r = (o = t == null ? void 0 : t.parent) == null ? void 0 : o.props.gutter;
    return {
      lineStyle: a(() => ({
        margin: `0 ${r / 2}px`
      }))
    };
  }
});
function C(e, t, r, s, o, _) {
  return u(), c("div", {
    class: m(["yu-col", "yu-col-" + e.span]),
    style: f(e.lineStyle)
  }, [
    i(e.$slots, "default")
  ], 6);
}
const n = /* @__PURE__ */ d(y, [["render", C]]);
n.install = function(e) {
  e.component(n.name, n);
};
const g = n;
export {
  g as YuCol,
  n as default
};
