---
title: Spring Boot
category: 企业级开发
tag:
  - Spring
  - Spring Boot
---

# Spring Boot

> Spring Boot 是目前 Java 企业级开发的首选框架。

## 核心概念

### IoC（控制反转）

将对象的创建和管理交给 Spring 容器。

```java
@Component
public class UserService {
    @Autowired
    private UserRepository userRepository;
}
```

### AOP（面向切面编程）

在不修改原有代码的情况下增加横切关注点。

```java
@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("调用方法: " + joinPoint.getSignature());
    }
}
```

## Spring Boot 自动配置

通过 `@EnableAutoConfiguration` 和 `spring.factories` 实现。

## 常用 Starter

| Starter | 用途 |
|---------|------|
| spring-boot-starter-web | Web 开发 |
| spring-boot-starter-data-jpa | JPA 数据库 |
| spring-boot-starter-data-redis | Redis |
| spring-boot-starter-security | 安全认证 |
