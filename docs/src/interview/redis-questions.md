---
title: Redis 面试题
category: 求职面试
tag:
  - 面试
  - Redis
---

# Redis 面试题

> Redis 高频面试题整理。

## 1. Redis 的数据结构

String、Hash、List、Set、ZSet、Bitmap、HyperLogLog、GEO

## 2. 缓存穿透、缓存击穿、缓存雪崩

### 缓存穿透

查询不存在的数据，缓存和数据库都查不到。  
**解决**：布隆过滤器、缓存空值

### 缓存击穿

热点 key 过期，大量并发请求打到底层数据库。  
**解决**：互斥锁、热点数据不过期

### 缓存雪崩

大量 key 在同一时间过期。  
**解决**：过期时间添加随机值、多级缓存、限流降级

## 3. Redis 持久化方式

**RDB**：定时快照，数据恢复快，可能丢数据。  
**AOF**：追加日志，数据完整度高，文件较大。  
**混合持久化**：RDB + AOF 结合（Redis 4.0+）。

## 4. Redis 集群方案

- **主从复制**：一主多从，读写分离
- **哨兵模式**：自动故障转移
- **Cluster 模式**：数据分片，去中心化

## 5. 分布式锁

```java
// Redis 分布式锁
Boolean locked = redisTemplate.opsForValue()
    .setIfAbsent("lock_key", "value", 30, TimeUnit.SECONDS);
if (locked) {
    try {
        // 执行业务
    } finally {
        redisTemplate.delete("lock_key");
    }
}
```
