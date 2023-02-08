import { ref as w, computed as C, unref as e, provide as ae, inject as re, defineComponent as D, openBlock as f, createElementBlock as y, createElementVNode as I, normalizeStyle as R, useSlots as ie, Fragment as $, withModifiers as b, createBlock as H, Transition as F, withCtx as M, withDirectives as K, createVNode as O, vShow as j, createCommentVNode as L, renderSlot as ue, normalizeClass as T, renderList as U } from "vue";
import { b as se } from "./build-props-92ecdf46.mjs";
import { c as ce } from "./line-style-flag-06cbfc38.mjs";
import { C as ve, I as fe } from "./componentWithProps-de03ddb3.mjs";
import { YuIcon as W } from "./icon.js";
const de = (t, o, l) => {
  if (typeof t === "number")
    return l;
}, me = se({
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
}), pe = {
  change: (t, o) => [t, o].every(de)
}, ye = "YuCarousel";
function q(t, o, l = {
  leading: !1,
  trailing: !1
}) {
  const { leading: _, trailing: n } = l;
  let i = 0, a = null;
  function u(...c) {
    const p = new Date().getTime();
    i === 0 && !_ && (i = p);
    const h = o - (p - i);
    if (h <= 0) {
      i = p, a && (clearTimeout(a), a = null), t.apply(this, ...c);
      return;
    }
    !a && n && (a = setTimeout(() => {
      t.apply(this, c), a = null, i = _ ? new Date().getTime() : 0;
    }, h));
  }
  return u.cencel = function() {
    a && (clearTimeout(a), a = null, i = 0);
  }, u;
}
function _e(t, o, l, _) {
  const n = w(0), i = w(null), a = w(!1), u = w([]), c = w(), p = w(!0), h = w(!1), g = w("0.35s"), k = C(() => t.arrow !== "never" && !e(V)), x = C(() => {
    switch (t.indicatorPosition) {
      case "outside":
        return "yu-indicator-list-outside";
      case "none":
        return "yu-indicator-list-none";
      default:
        return "yu-indicator-list";
    }
  }), z = C(() => l && l.length ? l.length : 0), V = C(() => t.direction === "vertical");
  C(() => t.type === "card");
  const N = C(() => g.value === "0.35s" ? 350 : g.value === "0.2s" ? 200 : 350);
  function d(r) {
    const s = u.value.length;
    r < 0 ? n.value = t.loop ? s - 1 : 0 : r >= s ? n.value = t.loop ? 0 : s - 1 : n.value = r;
  }
  function v(r) {
    if (u.value.push(r), z.value && z.value === u.value.length) {
      n.value = t.initialIndex;
      const s = u.value[n.value];
      s.value.flag = !0, c.value = s, h.value = !0, m();
    }
  }
  function m() {
    i.value = setInterval(() => {
      Y();
    }, t.interval);
  }
  function S() {
    i.value && (clearInterval(i.value), i.value = null);
  }
  function J() {
    k.value && (a.value = !0), t.pauseOnHover && S();
  }
  function Q() {
    k.value && (a.value = !1), t.pauseOnHover && m();
  }
  function Y() {
    P(n.value + 1, !0), E(n.value);
  }
  function X() {
    P(n.value - 1, !1), E(n.value);
  }
  const Z = q(
    () => {
      g.value = "0.35s", Y();
    },
    N.value,
    { leading: !0 }
  ), ee = q(
    () => {
      g.value = "0.35s", X();
    },
    N.value,
    { leading: !0 }
  );
  function te() {
    Z();
  }
  function ne() {
    ee();
  }
  function le(r, s) {
    o("change", r, s);
  }
  let A = t.initialIndex;
  function E(r) {
    d(r), le(n.value, A);
    const s = u.value[n.value];
    c.value && (c.value.value.flag = !1), s.value.flag = !0, c.value = s, A = n.value;
  }
  function oe(r) {
    S(), r > n.value ? (P(r, !0), E(n.value)) : r < n.value && (P(r, !1), E(n.value));
  }
  function P(r, s) {
    p.value = s, n.value = r;
  }
  return ae(ve, {
    addItem: v,
    isNext: p,
    isStart: h,
    transitionInterval: g
  }), {
    activeIndex: n,
    timer: i,
    hover: a,
    markList: u,
    arrowDisplay: k,
    indicatorPositionClass: x,
    nextClick: te,
    preClick: ne,
    containerEnter: J,
    hoverOrClickIndicator: oe,
    containerLeave: Q
  };
}
const G = () => re(fe), he = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-029747aa": ""
}, ge = /* @__PURE__ */ D({
  __name: "index",
  setup(t) {
    const o = G();
    return (l, _) => (f(), y("svg", he, [
      I("path", {
        style: R({ color: e(o).color, width: e(o).size, height: e(o).size }),
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      }, null, 4)
    ]));
  }
}), we = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  "data-v-029747aa": ""
}, Ce = /* @__PURE__ */ D({
  __name: "index",
  setup(t) {
    const o = G();
    return (l, _) => (f(), y("svg", we, [
      I("path", {
        style: R({ color: e(o).color, width: e(o).size, height: e(o).size }),
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      }, null, 4)
    ]));
  }
}), Ie = ["onMouseenter"], ke = ["onMouseenter"], xe = D({
  name: ye
}), B = /* @__PURE__ */ D({
  ...xe,
  props: me,
  emits: pe,
  setup(t, { emit: o }) {
    const l = t, _ = ie().default, {
      activeIndex: n,
      arrowDisplay: i,
      hover: a,
      markList: u,
      indicatorPositionClass: c,
      preClick: p,
      nextClick: h,
      containerEnter: g,
      hoverOrClickIndicator: k,
      containerLeave: x
    } = _e(l, o, _()), z = ce(
      "carousel",
      "transition",
      l.interval
    ), V = C(
      () => ({
        height: l.height
      })
    );
    return (N, d) => (f(), y($, null, [
      I("div", {
        class: "yu-carousel",
        style: R([e(z), e(V)]),
        onMouseenter: d[2] || (d[2] = b(
          //@ts-ignore
          (...v) => e(g) && e(g)(...v),
          ["stop"]
        )),
        onMouseleave: d[3] || (d[3] = b(
          //@ts-ignore
          (...v) => e(x) && e(x)(...v),
          ["stop"]
        ))
      }, [
        e(i) ? (f(), H(F, {
          key: 0,
          name: "carousel-arrow-left"
        }, {
          default: M(() => [
            K(I("button", {
              onClick: d[0] || (d[0] = //@ts-ignore
              (...v) => e(p) && e(p)(...v)),
              class: "yu-carousel__arrow yu-carousel__arrow--left",
              type: "button"
            }, [
              O(e(W), {
                size: "24px",
                color: "#fff"
              }, {
                default: M(() => [
                  O(e(ge))
                ]),
                _: 1
              })
            ], 512), [
              [
                j,
                (l.arrow === "always" || e(a)) && (l.loop || e(n) > 0) && e(u).length > 1
              ]
            ])
          ]),
          _: 1
        })) : L("", !0),
        e(i) ? (f(), H(F, {
          key: 1,
          name: "carousel-arrow-right"
        }, {
          default: M(() => [
            K(I("button", {
              onClick: d[1] || (d[1] = //@ts-ignore
              (...v) => e(h) && e(h)(...v)),
              class: "yu-carousel__arrow yu-carousel__arrow--right",
              type: "button"
            }, [
              O(e(W), {
                size: "24px",
                color: "#fff"
              }, {
                default: M(() => [
                  O(e(Ce))
                ]),
                _: 1
              })
            ], 512), [
              [
                j,
                (l.arrow === "always" || e(a)) && (l.loop || e(n) < e(u).length - 1) && e(u).length > 1
              ]
            ])
          ]),
          _: 1
        })) : L("", !0),
        ue(N.$slots, "default"),
        e(c) === "yu-indicator-list" ? (f(), y("ul", {
          key: 2,
          class: T(e(c))
        }, [
          (f(!0), y($, null, U(e(u), (v, m) => (f(), y("li", {
            key: m,
            onMouseenter: b((S) => e(k)(m), ["stop"]),
            class: "yu-indicator-item"
          }, [
            I("i", {
              class: T([{ active: e(n) === m }, "yu-carousel__button"])
            }, null, 2)
          ], 40, Ie))), 128))
        ], 2)) : L("", !0)
      ], 36),
      e(c) === "yu-indicator-list-outside" ? (f(), y("ul", {
        key: 0,
        class: T(e(c))
      }, [
        (f(!0), y($, null, U(e(u), (v, m) => (f(), y("li", {
          key: m,
          onMouseenter: b((S) => e(k)(m), ["stop"]),
          class: "yu-indicator-item"
        }, [
          I("i", {
            class: T([{ active: e(n) === m }, "yu-carousel__button"])
          }, null, 2)
        ], 40, ke))), 128))
      ], 2)) : L("", !0)
    ], 64));
  }
});
B.install = (t) => {
  t.component(B.name, B);
};
const be = B;
export {
  be as YuCarousel,
  B as default
};
