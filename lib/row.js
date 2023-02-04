import { defineComponent as l, computed as s, openBlock as a, createElementBlock as i, normalizeStyle as u, renderSlot as c } from "vue";
import { _ as f } from "./_plugin-vue_export-helper-dad06003.mjs";
const p = l({
  name: "YuRow",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "top"
    }
  },
  setup(e, { slots: o }) {
    return {
      lineStyle: s(() => {
        let t;
        switch (e.align) {
          case "bottom":
            t = "flex-end";
            break;
          case "middle":
            t = "center";
            break;
          default:
            t = "flex-start";
            break;
        }
        return {
          justifyContent: e.justify,
          alignItems: t
        };
      })
    };
  }
});
function d(e, o, r, t, m, y) {
  return a(), i("div", {
    class: "yu-row",
    style: u(e.lineStyle)
  }, [
    c(e.$slots, "default")
  ], 4);
}
const n = /* @__PURE__ */ f(p, [["render", d]]);
n.install = function(e) {
  e.component(n.name, n);
};
const g = n;
export {
  g as YuRow,
  n as default
};
