import { defineComponent as p, computed as a, openBlock as u, createElementBlock as d, normalizeClass as f, normalizeStyle as i, createElementVNode as l, renderSlot as m } from "vue";
import { _ as y } from "./_plugin-vue_export-helper-dad06003.mjs";
const h = p({
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
    const t = function(s) {
      s.target.src = "	https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png";
    }, r = a(() => "yu-avatar--" + e.shape), o = a(() => ({
      width: e.size + "px",
      height: e.size + "px"
    }));
    return {
      yuShape: r,
      lineStyle: o,
      onError: t
    };
  }
}), S = { class: "content" }, g = ["src"];
function v(e, t, r, o, s, E) {
  return u(), d("span", {
    class: f(["yu-avatar", [e.yuShape]]),
    style: i(e.lineStyle)
  }, [
    l("div", S, [
      m(e.$slots, "default", {}, () => [
        l("img", {
          src: e.src,
          onError: t[0] || (t[0] = (...c) => e.onError && e.onError(...c)),
          style: i({
            objectFit: e.fit
          })
        }, null, 44, g)
      ])
    ])
  ], 6);
}
const n = /* @__PURE__ */ y(h, [["render", v]]);
n.install = function(e) {
  e.component(n.name, n);
};
const _ = n;
export {
  _ as YuAvatar,
  n as default
};
