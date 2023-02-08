import { defineComponent as t, openBlock as r, createElementBlock as n, createElementVNode as a, normalizeStyle as l, unref as o } from "vue";
import { u as s } from "./baseProps-8a4169bc.mjs";
const c = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-029747aa": ""
}, f = /* @__PURE__ */ t({
  __name: "arrowLeft",
  setup(p) {
    const e = s();
    return (i, m) => (r(), n("svg", c, [
      a("path", {
        style: l({ color: o(e).color, width: o(e).size, height: o(e).size }),
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      }, null, 4)
    ]));
  }
});
export {
  f as default
};
