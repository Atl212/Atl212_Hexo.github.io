document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        let fadeOutTimeout; // 每个 item 自己的 fadeOutTimeout

        item.addEventListener('mouseover', function() {
            // 清除之前的 timeout
            clearTimeout(fadeOutTimeout);

            const caption = item.querySelector('.caption');
            const title = item.querySelector('.title');
            const body = item.querySelector('.body');
            const footer = item.querySelector('.footer');

            // 移除 fade-out 类，恢复透明度
            caption.classList.remove('fade-out');

            // 重置透明度和位移
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
            body.style.opacity = '1';
            body.style.transform = 'translateY(0)';
            footer.style.opacity = '1';
            footer.style.transform = 'translateY(0)';

            // 恢复 transition-delay
            title.style.transitionDelay = '0.1s';
            body.style.transitionDelay = '0.2s';
            footer.style.transitionDelay = '0.3s';
        });

        item.addEventListener('mouseout', function() {
            const caption = item.querySelector('.caption');
            const title = item.querySelector('.title');
            const body = item.querySelector('.body');
            const footer = item.querySelector('.footer');

            // 依次渐出 title、body 和 footer
            title.style.transitionDelay = '0.1s';
            body.style.transitionDelay = '0.2s';
            footer.style.transitionDelay = '0.3s';

            title.style.opacity = '0';
            title.style.transform = 'translateY(20px)';
            body.style.opacity = '0';
            body.style.transform = 'translateY(20px)';
            footer.style.opacity = '0';
            footer.style.transform = 'translateY(20px)';

            // 延迟执行 .caption 的透明度变化
            fadeOutTimeout = setTimeout(() => {
                caption.classList.add('fade-out'); // 添加 fade-out 类
            }, 500); // 500ms 是渐出动画的总时间

            // 重置过渡延迟
            setTimeout(() => {
                title.style.transitionDelay = '';
                body.style.transitionDelay = '';
                footer.style.transitionDelay = '';
            }, 500); // 500ms 是过渡时间
        });
    });
});