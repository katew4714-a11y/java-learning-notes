import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/learning-path/": [
    "README.md",
    "java-road",
    "backend-road",
  ],
  "/interview/": [
    "README.md",
    "java-questions",
    "mysql-questions",
    "redis-questions",
    "spring-questions",
    "experiences",
    "city-guide",
  ],
  "/career/": [
    "README.md",
    "learning-tips",
    "career-advice",
  ],
  "/": [
    {
      text: "一、前言",
      link: "home",
    },
    {
      text: "二、Java 基础",
      collapsible: true,
      prefix: "java-core/",
      children: [
        "README.md",
        "overview",
        "oop",
        "collection",
        "io",
        "exception",
        "new-features",
      ],
    },
    {
      text: "三、Java 进阶",
      collapsible: true,
      prefix: "java-advanced/",
      children: [
        "README.md",
        "concurrent",
        "jvm",
      ],
    },
    {
      text: "四、数据库",
      collapsible: true,
      prefix: "database/",
      children: [
        "README.md",
        "mysql",
        "redis",
      ],
    },
    {
      text: "五、企业级开发",
      collapsible: true,
      prefix: "framework/",
      children: [
        "README.md",
        "spring-boot",
        "mybatis",
        "maven",
        "git",
        "docker",
      ],
    },
    {
      text: "六、计算机基础",
      collapsible: true,
      prefix: "cs-basics/",
      children: [
        "README.md",
        "os",
        "network",
        "datastructure",
      ],
    },
    {
      text: "七、求职面试",
      collapsible: true,
      prefix: "interview/",
      children: [
        "README.md",
        "java-questions",
        "mysql-questions",
        "redis-questions",
        "spring-questions",
        "experiences",
        "city-guide",
      ],
    },
    {
      text: "八、学习路线",
      collapsible: true,
      prefix: "learning-path/",
      children: [
        "README.md",
        "java-road",
        "backend-road",
      ],
    },
    {
      text: "九、项目实战",
      collapsible: true,
      prefix: "projects/",
      children: [
        "README.md",
        "my-notes",
      ],
    },
    {
      text: "十、程序人生",
      collapsible: true,
      prefix: "career/",
      children: [
        "README.md",
        "learning-tips",
        "career-advice",
      ],
    },
  ],
});
