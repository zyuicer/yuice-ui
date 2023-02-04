import { defineComponent as o, openBlock as s, createElementBlock as a, normalizeStyle as l, renderSlot as d } from "vue";
const i = {
  name: "YuAside"
}, e = /* @__PURE__ */ o({
  ...i,
  props: {
    width: { default: "100px" }
  },
  setup(t) {
    return (n, c) => (s(), a("div", {
      class: "yu-aside",
      style: l("--yu-aside-width:" + t.width)
    }, [
      d(n.$slots, "default")
    ], 4));
  }
});
e.install = function(t) {
  t.component(e.name, e);
};
const u = e;
export {
  u as YuAside,
  e as default
};
