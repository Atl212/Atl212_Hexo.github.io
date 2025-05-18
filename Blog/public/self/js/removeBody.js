// 检查是否是手机（基于屏幕宽度或 userAgent）
function isMobile() {
    return window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobile()) {
    document.addEventListener('DOMContentLoaded', function () {
        const bodies = document.querySelectorAll('.portfolio-item .caption .caption-content .body');
        bodies.forEach(function (el) {
            el.remove(); // 从 DOM 中删除
        });
    });
}