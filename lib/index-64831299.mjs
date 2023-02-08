import { provide as a, defineComponent as i, computed as c, onMounted as m, openBlock as f, createElementBlock as _, normalizeStyle as d, unref as l, renderSlot as z } from "vue";
import { I as P } from "./componentWithProps-de03ddb3.mjs";
function b(o) {
  return o;
}
const I = "YuIcon", y = (o) => {
  a(P, o);
}, E = {
  color: [String],
  size: [Number, String]
}, N = i({
  name: I
}), t = /* @__PURE__ */ i({
  ...N,
  props: E,
  setup(o) {
    const e = o, u = c(() => e.color ? e.color : ""), s = c(() => {
      const r = typeof e.size;
      let n = e.size;
      return n ? r === "number" ? `${n}px` : n : "";
    }), p = {
      size: s.value,
      color: u.value
    };
    return m(() => {
      console.log("icon");
    }), y(p), (r, n) => (f(), _("div", {
      class: "yu-icon",
      style: d({ width: l(s), height: l(s) })
    }, [
      z(r.$slots, "default")
    ], 4));
  }
});
t.install = function(o) {
  o.component(t.name, t);
};
const g = t;
export {
  g as Y,
  t as _,
  b
};
