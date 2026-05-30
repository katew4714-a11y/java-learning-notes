---
title: Java 面试题
category: 求职面试
tag:
  - 面试
  - Java
---

# Java 面试题

> Java 面试高频题整理。

## Java 基础

### 1. 面向对象的三大特性

**封装**：隐藏内部实现，提供公共访问接口。  
**继承**：子类复用父类属性和方法。  
**多态**：同一接口不同实现，通过父类引用调用子类方法。

### 2. == 和 equals 的区别

- `==`：比较内存地址（引用类型）或值（基本类型）
- `equals`：Object 中默认比较地址，String、Integer 等重写后比较值

### 3. String、StringBuilder、StringBuffer 的区别

| 类型 | 可变 | 线程安全 | 性能 |
|------|:----:|:--------:|:----:|
| String | 不可变 | 安全 | 低 |
| StringBuilder | 可变 | 不安全 | 高 |
| StringBuffer | 可变 | 安全 | 中 |

## 集合

### 4. HashMap 的原理

- 底层：数组 + 链表 + 红黑树
- 默认容量 16，负载因子 0.75
- 当链表长度 ≥ 8 且数组长度 ≥ 64 时树化
- 线程不安全

### 5. ConcurrentHashMap 如何保证线程安全

- JDK 1.7：分段锁
- JDK 1.8+：CAS + synchronized

## 并发

### 6. volatile 关键字的作用

- 保证可见性：修改立即刷新到主内存
- 禁止指令重排序

### 7. synchronized 和 ReentrantLock 的区别

- synchronized 是关键字，Lock 是 API
- Lock 支持公平锁、可中断、超时
- synchronized 自动释放，Lock 需手动释放
