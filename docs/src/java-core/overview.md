---
title: Java 概述
category: Java 基础
tag:
  - Java
  - 入门
---

# Java 概述

## Java 是什么

Java 是一种面向对象的编程语言，由 Sun Microsystems（后被 Oracle 收购）于 1995 年发布。Java 的口号是 **"Write Once, Run Anywhere"**（一次编写，到处运行）。

## 核心特性

1. **跨平台性** — 通过 JVM（Java 虚拟机）实现跨平台
2. **面向对象** — 继承、封装、多态
3. **内存管理** — 自动垃圾回收（GC）
4. **丰富的生态** — 海量的开源库和框架

## 环境搭建

### 安装 JDK

1. 从 [Oracle 官网](https://www.oracle.com/java/technologies/downloads/) 下载 JDK
2. 配置 `JAVA_HOME` 环境变量
3. 配置 `PATH` 添加 `%JAVA_HOME%\bin`

### 验证安装

```bash
java -version
javac -version
```

## 第一个程序

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

**编译运行：**

```bash
javac HelloWorld.java
java HelloWorld
```
