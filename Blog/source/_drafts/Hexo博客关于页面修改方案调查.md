---
title: Hexo博客关于页面修改方案调查
date: 2025-05-10 15:32:04
tags:
---

<!-- more --> 

之前没有部署博客，但是稍微写了一个html的个人介绍页面。

所以想把之前的个人介绍的一些内容搬到现在部署的博客的关于页面上，在网上做了一些调查。

大概是有这几种方式，一种是直接在 sourse 排除 md 文件的渲染。然后自己写一个 html 或 css 文件来自行生成。

一种是通过注入 inject 的方式，在主题文件夹下对目标文件的代码进行插入或覆盖。

还有一种就是如果说所用主题下没有所需页面的 html 或 css 的渲染文件的话，得自己新建目标文件，自己编写。

https://www.cnblogs.com/lmzq/p/17140535.html

https://www.bioinfo-scrounger.com/about/

https://www.bioinfo-scrounger.com/archives/hexo-about-customized/

https://weakyon.com/2024/09/07/implementation-of-custom-categories-in-hexo.html

所以为了能够修改关于页面，且能够推送到自己的仓库上进行多设备同步，参考了以下文章，fork 了原 butterfly 主题，然后用 git submodule 来感知子模块。

https://cloud.tencent.com/developer/article/2023057