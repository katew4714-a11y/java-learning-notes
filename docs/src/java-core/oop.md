---
title: 面向对象
category: Java 基础
tag:
  - Java
  - OOP
---

# 面向对象

> 面向对象（OOP）是 Java 的核心编程思想。

## 三大特性

### 封装

将数据和操作数据的方法封装在类内部，对外提供公共的访问接口。

```java
public class Person {
    private String name;  // 私有字段

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

### 继承

子类继承父类的属性和方法，实现代码复用。

```java
public class Student extends Person {
    private String studentId;
}
```

### 多态

同一方法在不同对象上有不同的实现。

```java
// 父类引用指向子类对象
Person p = new Student();
```

## 接口与抽象类

| 对比 | 抽象类 | 接口 |
|------|--------|------|
| 关键字 | `abstract class` | `interface` |
| 多继承 | 不支持 | 支持 |
| 构造方法 | 有 | 无 |
| 字段 | 任意 | public static final |
