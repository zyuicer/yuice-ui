import { defineComponent as p, effectScope as f, onUnmounted as d, computed as m, createVNode as y } from "vue";
function a(e) {
  const t = v(e);
  return e.charAt(0).toUpperCase() + t.slice(1);
}
function v(e) {
  return e.replace(/-(\w)/g, (t, n) => n ? n.toUpperCase() : "");
}
const o = /* @__PURE__ */ p({
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
    const n = [], c = f(!0), s = c.run(() => {
      if (t.default) {
        const l = t.default();
        for (const r of l) {
          const i = r.type.name ? r.type.name : r.type;
          a(i) === "YuHeader" ? n.push("YuHeader") : a(i) === "YuFooter" && n.push("YuFooter");
        }
        return n.length !== 0 ? "vertical" : e.direction;
      } else
        return e.direction;
    });
    d(() => {
      c.stop();
    });
    const u = m(() => ({
      flexDirection: s === "vertical" ? "column" : "row"
    }));
    return console.log(u.value), () => y("div", {
      class: "yu-container",
      style: u.value
    }, [t.default && t.default()]);
  }
});
o.install = function(e) {
  e.component(o.name, o);
};
const Y = o;
export {
  Y as YuContainer,
  o as default
};
