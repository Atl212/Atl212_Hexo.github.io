---
title: page
date: 2025-05-21 22:12:38
tags:
---

<!-- more --> 

在page.js中有这样的实现：

```javascript
// 注册一个名为 'getPageType' 的 Hexo 辅助函数
hexo.extend.helper.register('getPageType', (page, isHome) => {
  // 从传入的 page 对象中解构赋值，获取常用的页面属性
  // layout: 页面 front-matter 中指定的布局名称
  // tag: 标签归档页的相关信息 (通常是标签对象或 true)
  // category: 分类归档页的相关信息 (通常是分类对象或 true)
  // type: 页面 front-matter 中指定的页面类型，或 Hexo 自动生成的特殊页面类型 (如 'tags', 'categories')
  // archive: 归档页的标志 (通常是 true)
  const { layout, tag, category, type, archive } = page;

  // 1. 最高优先级：如果页面 front-matter 中明确定义了 layout，则使用该 layout 作为页面类型
  if (layout) {
    return layout;
  }

  // 2. 如果是标签归档页 (例如 example.com/tags/some-tag/)
  if (tag) {
    return 'tag';
  }

  // 3. 如果是分类归档页 (例如 example.com/categories/some-category/)
  if (category) {
    return 'category';
  }

  // 4. 如果是日期归档页 (例如 example.com/archives/2023/10/)
  if (archive) {
    return 'archive';
  }

  // 5. 如果页面 front-matter 中定义了 type 属性
  if (type) {
    // 5a. 如果 type 是 Hexo 内置的 'tags' (标签列表页) 或 'categories' (分类列表页)
    if (type === 'tags' || type === 'categories') {
      return type;
    } else {
      // 5b. 其他自定义的 type 值，统一视为 'page' (独立页面)
      // 例如，用户可能在 about.md 的 front-matter 中设置 type: 'about-page'
      // 这种情况下，也会被归类为 'page'，除非上面 layout 规则已匹配
      return 'page';
    }
  }

  // 6. 如果以上条件都不满足，并且 isHome 参数为 true，则判断为首页
  if (isHome) {
    return 'home';
  }

  // 7. 默认情况：如果以上所有条件都不满足，则认为是一个普通的文章页面
  return 'post';
});
```

经测试，注释掉 layout: categories 后根本没有任何变化。

仔细一想，之前好像确实是某个 tags 页面，还是这个 categories 页面不见了，然后参考了这个

https://blog.csdn.net/Winter_chen001/article/details/79719154

文章后改成了这样。

现在发现这似乎并没有啥鸟用。

也不能说没有用，而是根据上面的 page.js 的判断代码可以看到，该判断的优先级是根据你读取的顺序，以及能否读取到相应变量来决定。

比如说如果你先写了 page 再写 layout 的话，那么先读到的就是 page，则会先执行 page/*.pug 路径下的模板文件。

```jude
type: about
layout: about
```

所以要么只选一个，要么就是自己写在自定义 layout 模仿别人的写法。

```
extends includes/layout.pug

block content
    - var commentsJsLoad = false

    mixin commentLoad
        if page.comments !== false && theme.comments.use
        - commentsJsLoad = true
        !=partial('includes/third-party/comments/index', {}, {cache: true})

    if theme.category_ui == 'index'
        include ./includes/mixins/indexPostUI.pug
        +indexPostUI
    else
        #about
                +commentLoad
```

反正最后试出来，无论是用 page 还是 layout 都能实现。