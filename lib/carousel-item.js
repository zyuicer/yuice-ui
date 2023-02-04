import { defineComponent as o, openBlock as s, createElementBlock as a, renderSlot as l } from "vue";
const r = { class: "yu-carousel-item" }, c = o({
  name: "YuCarouselItem"
}), e = /* @__PURE__ */ o({
  ...c,
  setup(t) {
    return (n, u) => (s(), a("div", r, [
      l(n.$slots, "default")
    ]));
  }
});
e.install = (t) => {
  t.component(e.name, e);
};
const _ = e;
export {
  _ as YuCarouselItem,
  e as default
};
