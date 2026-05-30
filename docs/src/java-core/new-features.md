---
title: Java 新特性
category: Java 基础
tag:
  - Java
  - Lambda
  - Stream
---

# Java 新特性

> Java 8 是 Java 历史上最重要的版本之一，引入了 Lambda 表达式和 Stream API。

## Lambda 表达式

Lambda 是 Java 8 引入的函数式编程特性。

```java
// 传统写法
new Thread(new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello");
    }
}).start();

// Lambda 写法
new Thread(() -> System.out.println("Hello")).start();
```

## Stream API

Stream 提供了一种声明式处理集合的方式。

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

List<String> result = names.stream()
    .filter(name -> name.startsWith("A"))
    .map(String::toUpperCase)
    .collect(Collectors.toList());
```

## Optional

Optional 用于避免空指针异常。

```java
Optional<String> optional = Optional.ofNullable(getName());
String name = optional.orElse("默认名称");
```

## 其他特性

- **方法引用**: `System.out::println`
- **接口默认方法**: `default` 关键字
- **新的日期 API**: `LocalDate`, `LocalDateTime`
- **模块化系统**: Java 9 的 JPMS
