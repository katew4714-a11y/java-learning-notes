---
title: Git
category: 企业级开发
tag:
  - Git
  - 版本控制
---

# Git

> Git 是目前最流行的分布式版本控制系统。

## 常用命令

### 配置

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### 基本操作

```bash
git init                  # 初始化仓库
git clone <url>           # 克隆仓库
git add .                 # 暂存所有修改
git commit -m "message"   # 提交
git push                  # 推送到远程
git pull                  # 拉取最新代码
```

### 分支管理

```bash
git branch                # 查看分支
git branch <name>         # 创建分支
git checkout <name>       # 切换分支
git merge <name>          # 合并分支
git branch -d <name>      # 删除分支
```

## 工作流示例

```bash
# 开发新功能
git checkout -b feature/login
# ... 编写代码 ...
git add .
git commit -m "feat: 添加登录功能"
git checkout main
git merge feature/login
git push
```

## .gitignore

```gitignore
# Java
*.class
target/
*.jar
*.war

# IDE
.idea/
*.iml
.vscode/
```
