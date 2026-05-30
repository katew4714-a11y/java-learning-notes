
# CLAUDE.md — Java 学习笔记 AI 写作规范

## 写作任务

写文章时，先安装依赖并确认日期，再按写作规范进行创作。

## 写作规范

- 文件名：小写字母 + 连字符，如 `my-note.md`
- 文章中英文混排时，中英文之间加空格
- 代码块标注语言类型
- 文章输出到对应模块的目录下

## 文章 Frontmatter 模板

```yaml
---
title: 文章标题
isOriginal: true
category: 模块名
tag:
  - Java
  - 相关标签
description: 文章简介
---
```

## 内容目录

- `docs/src/java-core/` — Java 基础
- `docs/src/java-advanced/` — Java 进阶
- `docs/src/database/` — 数据库
- `docs/src/framework/` — 企业级开发
- `docs/src/cs-basics/` — 计算机基础
- `docs/src/interview/` — 求职面试
- `docs/src/learning-path/` — 学习路线
- `docs/src/projects/` — 项目实战
- `docs/src/career/` — 程序人生
