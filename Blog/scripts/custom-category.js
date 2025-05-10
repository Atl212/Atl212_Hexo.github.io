// const { readFileSync } = require('fs');

// hexo.extend.filter.register('before_generate', () => {
//     const file = readFileSync('custom-category.njk').toString();
//     hexo.theme.setView('custom-category.njk', file);
// })

// hexo.extend.generator.register('custom-category', function (locals) {

//     // 建立父子关系的分类数据结构
//     var categoriesData = locals.categories.toArray();
//     var categoriesMap = {};

//     // 创建分类ID映射
//     categoriesData.forEach(category => {
//         categoriesMap[category._id] = {
//             id: category._id,
//             name: category.name,
//             slug: category.slug,
//             posts: category.posts.toArray(),
//             posts_length: category.posts.length,
//             children: []
//         };
//     });

//     // 构建树形结构
//     var categoriesTree = [];
//     categoriesData.forEach(category => {
//         if (category.parent) {
//             const parentId = category.parent;
//             if (categoriesMap[parentId]) {
//                 categoriesMap[parentId].children.push(categoriesMap[category._id]);
//             }
//         } else {
//             categoriesTree.push(categoriesMap[category._id]);
//         }
//     });

//     return {
//         path: 'custom-categories/index.html',
//         data: {
//             categoriesTree: categoriesTree,
//         },
//         layout: ['custom-category']
//     }
// });

// hexo.extend.injector.register('body_end', function () {
//     return `
//     <link rel="stylesheet" href="/css/custom-category.css">
//     <script>
//         //实现单个按钮的展开和折叠，通过修改categoryContent的属性来实现
//         function toggleCategory(categoryName, el) {
//             var categoryContent = document.getElementById(categoryName);
//             var triangle = el.querySelector('.triangle-right');
//             if (categoryContent.style.display === "none" || categoryContent.style.display === "") {
//                 categoryContent.style.display = "block";
//                 triangle.classList.remove('collapsed');
//             } else {
//                 categoryContent.style.display = "none";
//                 triangle.classList.add('collapsed');
//             }
//         }
        
//         //实现全部按钮的展开和折叠，通过修改categoryContent的属性来实现
//         function toggleAll(expand) {
//             var categories = document.querySelectorAll('.category-content');
//             categories.forEach(function(categoryContent) {
//                 var triangle = categoryContent.previousElementSibling.querySelector('.triangle-right');
//                 if (expand) {
//                     categoryContent.style.display = 'block';
//                     triangle.classList.remove('collapsed');
//                 } else {
//                     categoryContent.style.display = 'none';
//                     triangle.classList.add('collapsed');
//                 }
//             });
//         }
//     </script>
//     `
// })
