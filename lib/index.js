import { YuButton as e } from "./button.js";
import { YuAvatar as i } from "./avatar.js";
import { YuRow as p } from "./row.js";
import { YuCol as u } from "./col.js";
import { YuHeader as n } from "./header.js";
import { YuMain as f } from "./main.js";
import { YuAside as a } from "./aside.js";
import { YuContainer as Y } from "./container.js";
import { YuFooter as l } from "./footer.js";
import { YuCarousel as c } from "./carousel.js";
import { YuCarouselItem as s } from "./carousel-item.js";
import { YuIcon as d } from "./icon.js";
import { YuAlert as b } from "./alert.js";
import { YuImage as A } from "./image.js";
import "vue";
import "./_plugin-vue_export-helper-dad06003.mjs";
import "./build-props-92ecdf46.mjs";
import "./line-style-flag-06cbfc38.mjs";
import "./componentWithProps-de03ddb3.mjs";
const o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  YuAlert: b,
  YuAside: a,
  YuAvatar: i,
  YuButton: e,
  YuCarousel: c,
  YuCarouselItem: s,
  YuCol: u,
  YuContainer: Y,
  YuFooter: l,
  YuHeader: n,
  YuIcon: d,
  YuImage: A,
  YuMain: f,
  YuRow: p
}, Symbol.toStringTag, { value: "Module" })), R = {
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
  b as YuAlert,
  a as YuAside,
  i as YuAvatar,
  e as YuButton,
  c as YuCarousel,
  s as YuCarouselItem,
  u as YuCol,
  Y as YuContainer,
  l as YuFooter,
  n as YuHeader,
  d as YuIcon,
  A as YuImage,
  f as YuMain,
  p as YuRow,
  R as default
};
