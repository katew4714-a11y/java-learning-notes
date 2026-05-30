---
title: 并发编程
category: Java 进阶
tag:
  - Java
  - 并发
  - 多线程
---

# 并发编程

> 并发编程是 Java 进阶的核心，掌握它才能写出高性能的程序。

## 线程基础

### 创建线程的三种方式

```java
// 1. 继承 Thread
class MyThread extends Thread {
    public void run() { /* ... */ }
}

// 2. 实现 Runnable
class MyTask implements Runnable {
    public void run() { /* ... */ }
}

// 3. 实现 Callable（有返回值）
class MyCallable implements Callable<String> {
    public String call() { return "result"; }
}
```

## 线程池

推荐使用 `ThreadPoolExecutor` 创建线程池。

```java
ThreadPoolExecutor executor = new ThreadPoolExecutor(
    2,                // corePoolSize
    5,                // maximumPoolSize
    60,               // keepAliveTime
    TimeUnit.SECONDS,
    new LinkedBlockingQueue<>(100),
    Executors.defaultThreadFactory(),
    new ThreadPoolExecutor.AbortPolicy()
);
```

## 锁机制

### synchronized

```java
public synchronized void method() {
    // 同步方法
}

public void block() {
    synchronized (this) {
        // 同步代码块
    }
}
```

### Lock

```java
Lock lock = new ReentrantLock();
lock.lock();
try {
    // 临界区
} finally {
    lock.unlock();
}
```

## JUC 工具类

| 工具类 | 作用 |
|--------|------|
| `CountDownLatch` | 等待多个线程完成 |
| `CyclicBarrier` | 线程相互等待到某个屏障 |
| `Semaphore` | 控制并发访问数量 |
| `ConcurrentHashMap` | 线程安全的 HashMap |
