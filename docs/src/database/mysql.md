---
title: MySQL
category: 数据库
tag:
  - MySQL
  - 数据库
---

# MySQL

> MySQL 是使用最广泛的关系型数据库之一。

## 核心概念

### 事务 ACID

- **原子性（Atomicity）**：事务不可分割
- **一致性（Consistency）**：事务前后数据一致
- **隔离性（Isolation）**：事务相互隔离
- **持久性（Durability）**：提交后数据持久保存

### 隔离级别

| 级别 | 脏读 | 不可重复读 | 幻读 |
|------|:----:|:----------:|:----:|
| 读未提交 | ✅ | ✅ | ✅ |
| 读已提交 | ❌ | ✅ | ✅ |
| 可重复读 | ❌ | ❌ | ✅ |
| 串行化 | ❌ | ❌ | ❌ |

### 索引

- **B+ 树索引**：最常用的索引结构
- **哈希索引**：Memory 引擎支持
- **全文索引**：全文搜索

### 索引优化

```sql
-- 联合索引最左前缀原则
CREATE INDEX idx_name_age ON user(name, age);
-- 以下能使用索引
SELECT * FROM user WHERE name = 'Alice';
SELECT * FROM user WHERE name = 'Alice' AND age = 18;
-- 以下不能使用索引
SELECT * FROM user WHERE age = 18;
```
