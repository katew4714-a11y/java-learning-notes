---
title: MySQL 面试题
category: 求职面试
tag:
  - 面试
  - MySQL
---

# MySQL 面试题

> MySQL 高频面试题整理。

## 1. 事务的 ACID 特性

**原子性**：事务要么全部成功，要么全部回滚。  
**一致性**：事务前后数据保持完整约束。  
**隔离性**：并发事务互不干扰。  
**持久性**：提交后数据永久保存。

## 2. 事务隔离级别

| 级别 | 脏读 | 不可重复读 | 幻读 |
|------|:----:|:----------:|:----:|
| READ UNCOMMITTED | ✅ | ✅ | ✅ |
| READ COMMITTED | ❌ | ✅ | ✅ |
| REPEATABLE READ | ❌ | ❌ | ✅ |
| SERIALIZABLE | ❌ | ❌ | ❌ |

## 3. 索引失效场景

- 联合索引未遵循最左前缀原则
- 对索引列使用函数或计算
- 使用 LIKE '%xxx'（前置通配符）
- 类型隐式转换
- 使用 OR 且部分列无索引

## 4. 慢查询优化

```sql
-- 开启慢查询日志
SET GLOBAL slow_query_log = ON;
SET GLOBAL long_query_time = 1;

-- 使用 EXPLAIN 分析
EXPLAIN SELECT * FROM user WHERE name = 'Alice';
```

## 5. B+ 树索引优势

- 树高度低（3~4 层），IO 次数少
- 叶子节点有序链表，范围查询高效
- 非叶子节点只存 key，内存加载更多数据
