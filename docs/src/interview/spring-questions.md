---
title: Spring 面试题
category: 求职面试
tag:
  - 面试
  - Spring
---

# Spring 面试题

> Spring 框架高频面试题整理。

## 1. IoC 和 DI

**IoC（控制反转）**：对象的创建和管理交给容器。  
**DI（依赖注入）**：容器自动将依赖注入到对象中。

## 2. AOP 原理

AOP 基于动态代理实现：

- **JDK 动态代理**：目标类实现接口时使用
- **CGLIB 代理**：目标类未实现接口时使用

## 3. Bean 的生命周期

1. 实例化
2. 属性赋值
3. Aware 接口回调
4. BeanPostProcessor 前置处理
5. InitializingBean / init-method
6. BeanPostProcessor 后置处理
7. 使用
8. DisposableBean / destroy-method

## 4. Spring Boot 自动配置原理

`@SpringBootApplication` 包含 `@EnableAutoConfiguration`，通过 `spring.factories` 文件加载所有自动配置类，按条件注解生效。

## 5. 事务传播行为

| 传播行为 | 说明 |
|----------|------|
| REQUIRED | 有则加入，无则新建（默认） |
| REQUIRES_NEW | 挂起当前，新建一个 |
| NESTED | 嵌套事务 |
| SUPPORTS | 有则加入，无则以非事务运行 |

## 6. Spring 中的设计模式

| 模式 | 应用 |
|------|------|
| 单例 | Bean 默认作用域 |
| 工厂 | BeanFactory |
| 代理 | AOP |
| 模板 | JdbcTemplate、RestTemplate |
