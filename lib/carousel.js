import { ref as C, computed as I, unref as e, provide as ne, inject as oe, defineComponent as T, openBlock as v, createElementBlock as y, createElementVNode as x, normalizeStyle as V, useSlots as le, Fragment as $, withModifiers as S, createBlock as A, Transition as F, withCtx as P, withDirectives as K, createVNode as b, vShow as j, createCommentVNode as L, renderSlot as re, normalizeClass as O, renderList as U } from "vue";
import { b as ae, Y as q } from "./index-64831299.mjs";
import { c as ie } from "./line-style-flag-06cbfc38.mjs";
import { C as ue, I as se } from "./componentWithProps-de03ddb3.mjs";
const ce = (t, l, o) => {
  if (typeof t === "number")
    return o;
}, ve = ae({
  interval: {
    type: Number,
    default: 3e3
  },
  height: {
    type: String,
    default: "200px"
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  arrow: {
    type: String,
    default: "hover"
  },
  indicatorPosition: {
    type: String
  },
  loop: {
    type: Boolean,
    default: !0
  },
  pauseOnHover: {
    type: Boolean,
    default: !0
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  type: {
    type: String
  }
}), fe = {
  change: (t, l) => [t, l].every(ce)
}, pe = "YuCarousel";
function G(t, l, o = {
  leading: !1,
  trailing: !1
}) {
  const { leading: _, trailing: n } = o;
  let i = 0, r = null;
  function a(...s) {
    const f = new Date().getTime();
    i === 0 && !_ && (i = f);
    const g = l - (f - i);
    if (g <= 0) {
      i = f, r && (clearTimeout(r), r = null), t.apply(this, ...s);
      return;
    }
    !r && n && (r = setTimeout(() => {
      t.apply(this, s), r = null, i = _ ? new Date().getTime() : 0;
    }, g));
  }
  return a.cencel = function() {
    r && (clearTimeout(r), r = null, i = 0);
  }, a;
}
function de(t, l, o, _) {
  const n = C(0), i = C(null), r = C(!1), a = C([]), s = C(), f = C(!0), g = C(!1), h = C("0.35s"), z = I(() => t.arrow !== "never" && !e(B)), w = I(() => {
    switch (t.indicatorPosition) {
      case "outside":
        return "yu-indicator-list-outside";
      case "none":
        return "yu-indicator-list-none";
      default:
        return "yu-indicator-list";
    }
  }), M = I(() => o && o.length ? o.length : 0), B = I(() => t.direction === "vertical");
  I(() => t.type === "card");
  const N = I(() => h.value === "0.35s" ? 350 : h.value === "0.2s" ? 200 : 350);
  function u(d) {
    const m = a.value.length;
    d < 0 ? n.value = t.loop ? m - 1 : 0 : d >= m ? n.value = t.loop ? 0 : m - 1 : n.value = d;
  }
  function c(d) {
    if (a.value.push(d), M.value && M.value === a.value.length) {
      console.log("initial"), n.value = t.initialIndex;
      const m = a.value[n.value];
      m.value.flag = !0, s.value = m, g.value = !0, p();
    }
  }
  function p() {
    i.value = setInterval(() => {
      console.log(n.value), D();
    }, t.interval);
  }
  function k() {
    i.value && clearInterval(i.value), i.value = null;
  }
  function Y() {
    z.value && (r.value = !0), t.pauseOnHover && k();
  }
  function Q() {
    z.value && (r.value = !1), t.pauseOnHover && p();
  }
  function D() {
    f.value = !0, R(n.value + 1);
  }
  function H() {
    f.value = !1, R(n.value - 1), console.log(a.value);
  }
  const W = G(
    () => {
      h.value = "0.35s", D();
    },
    N.value,
    { leading: !0 }
  ), X = G(
    () => {
      h.value = "0.35s", H();
    },
    N.value,
    { leading: !0 }
  );
  function Z() {
    W();
  }
  function ee() {
    X();
  }
  function R(d) {
    u(d);
    const m = a.value[n.value];
    s.value && (s.value.value.flag = !1), m.value.flag = !0, s.value = m;
  }
  function te(d) {
    Y(), d > n.value ? D() : d < n.value && H();
  }
  return ne(ue, {
    addItem: c,
    isNext: f,
    isStart: g,
    transitionInterval: h
  }), {
    activeIndex: n,
    timer: i,
    hover: r,
    markList: a,
    arrowDisplay: z,
    indicatorPositionClass: w,
    nextClick: Z,
    preClick: ee,
    containerHover: Y,
    hoverOrClickIndicator: te,
    containerLeave: Q
  };
}
const J = () => oe(se), me = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-029747aa": ""
}, ye = /* @__PURE__ */ T({
  __name: "arrowLeft",
  setup(t) {
    const l = J();
    return (o, _) => (v(), y("svg", me, [
      x("path", {
        style: V({ color: e(l).color, width: e(l).size, height: e(l).size }),
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      }, null, 4)
    ]));
  }
}), _e = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-029747aa": ""
}, ge = /* @__PURE__ */ T({
  __name: "arrowRight",
  setup(t) {
    const l = J();
    return console.log(l), (o, _) => (v(), y("svg", _e, [
      x("path", {
        style: V({ color: e(l).color, width: e(l).size, height: e(l).size }),
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      }, null, 4)
    ]));
  }
}), he = ["onMouseenter"], we = ["onMouseenter"], Ce = T({
  name: pe
}), E = /* @__PURE__ */ T({
  ...Ce,
  props: ve,
  emits: fe,
  setup(t, { emit: l }) {
    const o = t, _ = le().default, {
      activeIndex: n,
      arrowDisplay: i,
      hover: r,
      markList: a,
      indicatorPositionClass: s,
      preClick: f,
      nextClick: g,
      containerHover: h,
      hoverOrClickIndicator: z,
      containerLeave: w
    } = de(o, l, _()), M = ie(
      "carousel",
      "transition",
      o.interval
    ), B = I(
      () => ({
        height: o.height
      })
    );
    return (N, u) => (v(), y($, null, [
      x("div", {
        class: "yu-carousel",
        style: V([e(M), e(B)]),
        onMouseenter: u[3] || (u[3] = S(
          //@ts-ignore
          (...c) => e(h) && e(h)(...c),
          ["stop"]
        )),
        onMouseleave: u[4] || (u[4] = S(
          //@ts-ignore
          (...c) => e(w) && e(w)(...c),
          ["stop"]
        ))
      }, [
        e(i) ? (v(), A(F, {
          key: 0,
          name: "carousel-arrow-left"
        }, {
          default: P(() => [
            K(x("button", {
              onClick: u[0] || (u[0] = //@ts-ignore
              (...c) => e(f) && e(f)(...c)),
              class: "yu-carousel__arrow yu-carousel__arrow--left",
              type: "button"
            }, [
              b(e(q), {
                size: "24px",
                color: "#fff"
              }, {
                default: P(() => [
                  b(e(ye))
                ]),
                _: 1
              })
            ], 512), [
              [
                j,
                (o.arrow === "always" || e(r)) && (o.loop || e(n) > 0) && e(a).length > 1
              ]
            ])
          ]),
          _: 1
        })) : L("", !0),
        e(i) ? (v(), A(F, {
          key: 1,
          name: "carousel-arrow-right"
        }, {
          default: P(() => [
            K(x("button", {
              onClick: u[1] || (u[1] = //@ts-ignore
              (...c) => e(g) && e(g)(...c)),
              class: "yu-carousel__arrow yu-carousel__arrow--right",
              type: "button"
            }, [
              b(e(q), {
                size: "24px",
                color: "#fff"
              }, {
                default: P(() => [
                  b(e(ge))
                ]),
                _: 1
              })
            ], 512), [
              [
                j,
                (o.arrow === "always" || e(r)) && (o.loop || e(n) < e(a).length - 1) && e(a).length > 1
              ]
            ])
          ]),
          _: 1
        })) : L("", !0),
        re(N.$slots, "default"),
        e(s) === "yu-indicator-list" ? (v(), y("ul", {
          key: 2,
          class: O(e(s))
        }, [
          (v(!0), y($, null, U(e(a), (c, p) => (v(), y("li", {
            key: p,
            onMouseenter: S((k) => e(z)(p), ["stop"]),
            onMouseleave: u[2] || (u[2] = //@ts-ignore
            (...k) => e(w) && e(w)(...k)),
            class: "yu-indicator-item"
          }, [
            x("i", {
              class: O([{ active: e(n) === p }, "yu-carousel__button"])
            }, null, 2)
          ], 40, he))), 128))
        ], 2)) : L("", !0)
      ], 36),
      e(s) === "yu-indicator-list-outside" ? (v(), y("ul", {
        key: 0,
        class: O(e(s))
      }, [
        (v(!0), y($, null, U(e(a), (c, p) => (v(), y("li", {
          key: p,
          onMouseenter: S((k) => e(z)(p), ["stop"]),
          onMouseleave: u[5] || (u[5] = S(
            //@ts-ignore
            (...k) => e(w) && e(w)(...k),
            ["stop"]
          )),
          class: "yu-indicator-item"
        }, [
          x("i", {
            class: O([{ active: e(n) === p }, "yu-carousel__button"])
          }, null, 2)
        ], 40, we))), 128))
      ], 2)) : L("", !0)
    ], 64));
  }
});
E.install = (t) => {
  t.component(E.name, E);
};
const Se = E;
export {
  Se as YuCarousel,
  E as default
};
