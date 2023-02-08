import { defineComponent as t, openBlock as r, createElementBlock as n, createElementVNode as a, normalizeStyle as s, unref as o } from "vue";
import { u as l } from "./baseProps-8a4169bc.mjs";
const c = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-029747aa": ""
}, h = /* @__PURE__ */ t({
  __name: "arrowRight",
  setup(i) {
    const e = l();
    return console.log(e), (p, m) => (r(), n("svg", c, [
      a("path", {
        style: s({ color: o(e).color, width: o(e).size, height: o(e).size }),
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      }, null, 4)
    ]));
  }
});
export {
  h as default
};
