import { defineComponent as l, effectScope as f, onUnmounted as d, computed as m, createVNode as y } from "vue";
function i(e) {
  const t = C(e);
  return e.charAt(0).toUpperCase() + t.slice(1);
}
function C(e) {
  return e.replace(/-(\w)/g, (t, n) => n ? n.toUpperCase() : "");
}
const o = /* @__PURE__ */ l({
  name: "YuContainer",
  props: {
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup(e, {
    slots: t
  }) {
    const n = [], c = f(!0), a = c.run(() => {
      if (t.default) {
        const p = t.default();
        for (const r of p) {
          const u = r.type.name ? r.type.name : r.type;
          i(u) === "YuHeader" ? n.push("YuHeader") : i(u) === "YuFooter" && n.push("YuFooter");
        }
        return n.length !== 0 ? "vertical" : e.direction;
      } else
        return e.direction;
    });
    d(() => {
      c.stop();
    });
    const s = m(() => ({
      flexDirection: a === "vertical" ? "column" : "row"
    }));
    return () => y("div", {
      class: "yu-container",
      style: s.value
    }, [t.default && t.default()]);
  }
});
o.install = function(e) {
  e.component(o.name, o);
};
const h = o;
export {
  h as YuContainer,
  o as default
};
