import { YuButton as e } from "./button.js";
import { YuAvatar as i } from "./avatar.js";
import { YuRow as p } from "./row.js";
import { YuCol as n } from "./col.js";
import { YuHeader as u } from "./header.js";
import { YuMain as f } from "./main.js";
import { YuAside as a } from "./aside.js";
import { YuContainer as l } from "./container.js";
import { YuFooter as s } from "./footer.js";
import { YuCarousel as Y } from "./carousel.js";
import { YuCarouselItem as c } from "./carousel-item.js";
import "vue";
import "./_plugin-vue_export-helper-dad06003.mjs";
const o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  YuAside: a,
  YuAvatar: i,
  YuButton: e,
  YuCarousel: Y,
  YuCarouselItem: c,
  YuCol: n,
  YuContainer: l,
  YuFooter: s,
  YuHeader: u,
  YuMain: f,
  YuRow: p
}, Symbol.toStringTag, { value: "Module" })), w = {
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
  Y as YuCarousel,
  c as YuCarouselItem,
  n as YuCol,
  l as YuContainer,
  s as YuFooter,
  u as YuHeader,
  f as YuMain,
  p as YuRow,
  w as default
};
