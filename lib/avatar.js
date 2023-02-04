import { defineComponent as p, computed as a, openBlock as u, createElementBlock as d, normalizeClass as f, normalizeStyle as l, createElementVNode as c, renderSlot as m } from "vue";
import { _ as y } from "./_plugin-vue_export-helper-dad06003.mjs";
const g = p({
  name: "YuAvatar",
  props: {
    src: [String],
    shape: {
      type: String,
      default: "circle"
    },
    size: {
      type: Number,
      default: 50
    },
    fit: {
      type: String,
      default: "cover"
    }
  },
  setup(e) {
    const t = function(r) {
      console.log(r), r.target.src = "	https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png";
    }, o = a(() => "yu-avatar--" + e.shape), s = a(() => ({
      width: e.size + "px",
      height: e.size + "px"
    }));
    return {
      yuShape: o,
      lineStyle: s,
      onError: t
    };
  }
}), h = { class: "content" }, S = ["src"];
function v(e, t, o, s, r, E) {
  return u(), d("span", {
    class: f(["yu-avatar", [e.yuShape]]),
    style: l(e.lineStyle)
  }, [
    c("div", h, [
      m(e.$slots, "default", {}, () => [
        c("img", {
          src: e.src,
          onError: t[0] || (t[0] = (...i) => e.onError && e.onError(...i)),
          style: l({
            objectFit: e.fit
          })
        }, null, 44, S)
      ])
    ])
  ], 6);
}
const n = /* @__PURE__ */ y(g, [["render", v]]);
n.install = function(e) {
  e.component(n.name, n);
};
const _ = n;
export {
  _ as YuAvatar,
  n as default
};
