import { provide as a, defineComponent as i, computed as c, openBlock as m, createElementBlock as f, normalizeStyle as _, unref as l, renderSlot as d } from "vue";
import { I as z } from "./componentWithProps-de03ddb3.mjs";
import { b as P } from "./build-props-92ecdf46.mjs";
const I = "YuIcon", y = (o) => {
  a(z, o);
}, E = P({
  color: [String],
  size: [Number, String]
}), N = i({
  name: I
}), n = /* @__PURE__ */ i({
  ...N,
  props: E,
  setup(o) {
    const e = o, u = c(() => e.color ? e.color : ""), r = c(() => {
      const s = typeof e.size;
      let t = e.size;
      return t ? s === "number" ? `${t}px` : t : "";
    }), p = {
      size: r.value,
      color: u.value
    };
    return y(p), (s, t) => (m(), f("div", {
      class: "yu-icon",
      style: _({ width: l(r), height: l(r) })
    }, [
      d(s.$slots, "default")
    ], 4));
  }
});
n.install = function(o) {
  o.component(n.name, n);
};
const h = n;
export {
  h as YuIcon,
  n as default
};
