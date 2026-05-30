---
title: MyBatis
category: 企业级开发
tag:
  - MyBatis
  - ORM
---

# MyBatis

> MyBatis 是一款优秀的持久层框架，支持自定义 SQL、存储过程和高级映射。

## 核心配置

```xml
<!-- mybatis-config.xml -->
<configuration>
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/db"/>
            </dataSource>
        </environment>
    </environments>
</configuration>
```

## Mapper 示例

```java
// 接口定义
@Mapper
public interface UserMapper {
    @Select("SELECT * FROM user WHERE id = #{id}")
    User findById(Long id);

    @Insert("INSERT INTO user(name, age) VALUES(#{name}, #{age})")
    int insert(User user);
}
```

## 与 Spring Boot 集成

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/db
    username: root
    password: 123456

mybatis:
  mapper-locations: classpath:mapper/*.xml
  type-aliases-package: com.example.entity
```
