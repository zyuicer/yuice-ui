import { defineComponent as o, openBlock as t, createElementBlock as a } from "vue";
const c = o({
  name: "YuCarousel"
}), e = /* @__PURE__ */ o({
  ...c,
  setup(n) {
    return (r, s) => (t(), a("div"));
  }
});
e.install = (n) => {
  n.component(e.name, e);
};
const l = e;
export {
  l as YuCarousel,
  e as default
};
