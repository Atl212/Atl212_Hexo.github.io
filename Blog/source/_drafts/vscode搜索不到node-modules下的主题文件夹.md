---
title: vscode搜索不到node_modules下的主题文件夹
categories:
  - tmp
tags:
  - tmp
date: 2025-05-10 16:20:55
---

<!-- more --> 

一种是由于根目录下的 .gitignore 文件下配置了相应路径，并且在 vscode 中也启用了对应的配置，所以搜索不到。

具体有以下文章可以解决。

另一种是，由于在 vscode 中还配置了 exclude 排除在外的路径，所以搜索不到。

具体有以下修改步骤的参考文章。

而为了自己能够搜索到 butterfly 主题的变量或属性，本人在根目录下的 .vscode 文件夹中的 settings.json 还做了如下配置。

```json
{
    "search.exclude": {
    "**/node_modules/hexo-theme-butterfly": false
    }
}
```

https://blog.csdn.net/NoSuchObjectError/article/details/106714379

https://blog.csdn.net/jianleking/article/details/118336741

https://zenn.dev/ianchen0419/articles/187f6686146b59

https://juejin.cn/post/7120833219645145125