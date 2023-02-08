import { defineComponent as n, ref as d, computed as o, inject as p, unref as e, openBlock as C, createBlock as S, Transition as v, withCtx as N, withDirectives as y, createElementVNode as E, normalizeStyle as I, renderSlot as h, vShow as k, createCommentVNode as w } from "vue";
import { C as x } from "./componentWithProps-de03ddb3.mjs";
import { c as O } from "./line-style-flag-06cbfc38.mjs";
const M = "YuCarouselItem", R = n({
  name: M
}), t = /* @__PURE__ */ n({
  ...R,
  setup(r) {
    const a = d({
      flag: !1
    }), s = o(() => a.value.flag), { addItem: l, isNext: i, isStart: c, transitionInterval: m } = p(
      x
    ), u = o(() => i.value ? "carousel-item-next" : "carousel-item-pre"), f = o(() => O(
      "carousel-item",
      "transition",
      m.value
    ));
    return l(a), (_, V) => e(c) ? (C(), S(v, {
      key: 0,
      name: e(u)
    }, {
      default: N(() => [
        y(E("div", {
          class: "yu-carousel-item",
          ref: "carouselItemRef",
          style: I([e(f)])
        }, [
          h(_.$slots, "default")
        ], 4), [
          [k, e(s)]
        ])
      ]),
      _: 3
    }, 8, ["name"])) : w("", !0);
  }
});
t.install = (r) => {
  r.component(t.name, t);
};
const A = t;
export {
  A as YuCarouselItem,
  t as default
};
