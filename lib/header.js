import { defineComponent as o, openBlock as a, createElementBlock as l, normalizeStyle as r, renderSlot as s } from "vue";
const c = {
  name: "YuHeader"
}, e = /* @__PURE__ */ o({
  ...c,
  props: {
    height: { default: "60px" }
  },
  setup(t) {
    return (n, u) => (a(), l("div", {
      class: "yu-header",
      style: r({ height: t.height })
    }, [
      s(n.$slots, "default")
    ], 4));
  }
});
e.install = function(t) {
  t.component(e.name, e);
};
const i = e;
export {
  i as YuHeader,
  e as default
};
