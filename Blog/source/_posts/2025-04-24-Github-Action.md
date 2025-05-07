---
title: Github Action
categories:
  - Github
tags:
  - Github
  - Action
  - 部署
  - 路径
abbrlink: 62980
date: 2025-04-24 12:54:23
---

<!-- more --> 

# 前言

前几天试着搭了hexo博客，本来部署直接用 hexo d 命令进行的部署。

但是自己更习惯用 github desktop。可以自定义 commit 的名称，也可以更直观看到文件的修改情况，所以试着用 github action 部署博客。

由于本人没怎么用过 action 部署，同时对于 git 拉取下来的一些文件设置也有认识不足，在此记录下部署过程遇到的几个问题。

hexo generate --debug

## yaml文件路径配置问题
## 尝试构建但出现 Permission denied
## 部署成功但index.html文件大小为0