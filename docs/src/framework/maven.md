---
title: Maven
category: 企业级开发
tag:
  - Maven
  - 构建工具
---

# Maven

> Maven 是 Java 项目的主要构建工具和依赖管理工具。

## 核心概念

### POM 文件

```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>
</project>
```

### 依赖管理

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>3.2.0</version>
    </dependency>
</dependencies>
```

## 常用命令

| 命令 | 说明 |
|------|------|
| mvn clean | 清理 target |
| mvn compile | 编译 |
| mvn test | 运行测试 |
| mvn package | 打包 |
| mvn install | 安装到本地仓库 |
| mvn deploy | 部署到远程仓库 |

## 依赖范围

| Scope | 说明 |
|-------|------|
| compile | 默认，所有阶段 |
| provided | 编译需要，运行时由容器提供 |
| runtime | 编译不需要，运行时需要 |
| test | 仅测试 |
