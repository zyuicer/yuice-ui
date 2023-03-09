import { defineConfig } from "vitepress";
import { resolve } from "node:path";
// https://vitepress.vuejs.org/reference/site-config

export default defineConfig({
  title: "yuice-ui",
  description: "个人开发的组件库",
  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" }
    ],

    sidebar: [
      {
        text: "前言",
        items: [{ text: "为什么而存在", link: "/why-exist" }]
      },
      {
        text: "基础组件",
        items: [
          {
            text: "loyout布局",
            link: "/components/layout"
          }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ]
  }
});
