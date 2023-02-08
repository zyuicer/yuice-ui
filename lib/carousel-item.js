import { ref as f, computed as l, inject as _, defineComponent as m, unref as t, openBlock as d, createBlock as p, Transition as S, withCtx as C, withDirectives as N, createElementVNode as v, normalizeStyle as y, renderSlot as I, vShow as h, createCommentVNode as E } from "vue";
import { C as k } from "./componentWithProps-de03ddb3.mjs";
import { c as w } from "./line-style-flag-06cbfc38.mjs";
const x = "YuCarouselItem", M = () => {
  const e = f({
    flag: !1
  }), r = l(() => e.value.flag), { addMarkItem: a, isNext: n, isStart: s, transitionInterval: i } = _(
    k
  ), c = l(() => n.value ? "carousel-item-next" : "carousel-item-pre"), u = l(() => w(
    "carousel-item",
    "transition",
    i.value
  ));
  return a(e), {
    isStart: s,
    isShow: r,
    transitionName: c,
    transitionStyle: u
  };
}, O = m({
  name: x
}), o = /* @__PURE__ */ m({
  ...O,
  setup(e) {
    const { isShow: r, isStart: a, transitionName: n, transitionStyle: s } = M();
    return (i, c) => t(a) ? (d(), p(S, {
      key: 0,
      name: t(n)
    }, {
      default: C(() => [
        N(v("div", {
          class: "yu-carousel-item",
          ref: "carouselItemRef",
          style: y([t(s)])
        }, [
          I(i.$slots, "default")
        ], 4), [
          [h, t(r)]
        ])
      ]),
      _: 3
    }, 8, ["name"])) : E("", !0);
  }
});
o.install = (e) => {
  e.component(o.name, o);
};
const g = o;
export {
  g as YuCarouselItem,
  o as default
};
