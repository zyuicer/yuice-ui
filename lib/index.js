import { YuButton as e } from "./button.js";
import { YuAvatar as i } from "./avatar.js";
import { YuRow as p } from "./row.js";
import { YuCol as n } from "./col.js";
import { YuHeader as u } from "./header.js";
import { YuMain as f } from "./main.js";
import { YuAside as a } from "./aside.js";
import { YuContainer as Y } from "./container.js";
import { YuFooter as s } from "./footer.js";
import { YuCarousel as c } from "./carousel.js";
import { YuCarouselItem as l } from "./carousel-item.js";
import { Y as d } from "./index-64831299.mjs";
import "vue";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "./line-style-flag-06cbfc38.mjs";
import "./componentWithProps-de03ddb3.mjs";
const o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  YuAside: a,
  YuAvatar: i,
  YuButton: e,
  YuCarousel: c,
  YuCarouselItem: l,
  YuCol: n,
  YuContainer: Y,
  YuFooter: s,
  YuHeader: u,
  YuIcon: d,
  YuMain: f,
  YuRow: p
}, Symbol.toStringTag, { value: "Module" })), B = {
  install(m) {
    Object.keys(o).forEach((r) => {
      const t = o[r];
      m.component(t.name || r, t);
    });
  },
  version: "1.0.0",
  ...o
};
export {
  a as YuAside,
  i as YuAvatar,
  e as YuButton,
  c as YuCarousel,
  l as YuCarouselItem,
  n as YuCol,
  Y as YuContainer,
  s as YuFooter,
  u as YuHeader,
  d as YuIcon,
  f as YuMain,
  p as YuRow,
  B as default
};
