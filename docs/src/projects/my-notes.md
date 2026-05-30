---
title: 实战项目笔记
category: 项目实战
tag:
  - 项目
  - 实战
---

# 实战项目笔记

> 记录项目开发过程中的心得和技术要点。

## 项目框架搭建

### 使用 Spring Initializr

推荐使用 [Spring Initializr](https://start.spring.io/) 快速生成项目骨架。

### 分层架构

```
controller/    — 接收请求，返回响应
service/       — 业务逻辑
repository/    — 数据访问
entity/        — 实体类
dto/           — 数据传输对象
config/        — 配置类
```

### API 规范

```yaml
# 统一返回格式
{
  "code": 200,
  "message": "success",
  "data": {}
}
```

## 常用工具集成

### 日志

```xml
<!-- logback-spring.xml -->
<configuration>
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/app.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/app-%d{yyyy-MM-dd}.log</fileNamePattern>
        </rollingPolicy>
    </appender>
</configuration>
```

### 接口文档

推荐使用 SpringDoc OpenAPI（替代 Swagger）。

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.3.0</version>
</dependency>
```
