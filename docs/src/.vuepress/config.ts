import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/java-learning-notes/",

  dest: "./dist",

  lang: "zh-CN",
  title: "Java 学习笔记",
  description: "一份由浅入深的个人 Java 学习指南，涵盖 Java 基础、进阶、数据库、企业级开发、求职面试等核心知识点",

  theme,

  shouldPrefetch: false,

  head: [
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "你的名字" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Java, Java基础, 并发编程, JVM, 虚拟机, 数据库, MySQL, Spring, MyBatis, Redis, SpringBoot, 求职面试, 学习路线",
      },
    ],
  ],
});
