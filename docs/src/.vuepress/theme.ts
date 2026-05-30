import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://toBeKodeBoy.github.io",

  author: {
    name: "你的名字",
    url: "/about/",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "https://github.com/toBeKodeBoy/java-learning-notes",
  repoLabel: "GitHub",
  docsDir: "docs/src/",
  docsBranch: "main",
  breadcrumb: false,

  fullscreen: true,
  darkmode: "switch",

  navbar,
  sidebar,

  footer: "个人 Java 学习笔记",
  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word", "ReadingTime"],

  blog: {
    intro: "/about/",
    sidebarDisplay: "mobile",
    avatar: "/logo.svg",
    description: "学无止境，厚积薄�?,
    medias: {
      GitHub: "https://github.com/toBeKodeBoy",
    },
  },

  plugins: {
    blog: true,

    components: {
      components: ["Badge", "VPCard"],
    },

    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      spoiler: true,
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      mathjax: true,
    },
  },
});
