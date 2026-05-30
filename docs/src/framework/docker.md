---
title: Docker
category: 企业级开发
tag:
  - Docker
  - 容器化
---

# Docker

> Docker 是应用容器化的事实标准。

## 核心概念

- **镜像（Image）**：打包的应用和依赖
- **容器（Container）**：镜像的运行实例
- **Dockerfile**：构建镜像的文件
- **Docker Compose**：多容器编排

## 常用命令

```bash
docker pull <image>       # 拉取镜像
docker images             # 查看镜像
docker run -d -p 8080:8080 <image>  # 运行容器
docker ps                 # 查看运行中的容器
docker stop <container>   # 停止容器
docker rm <container>     # 删除容器
```

## Dockerfile 示例

```dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/my-app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root123
```
