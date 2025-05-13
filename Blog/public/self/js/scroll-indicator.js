const scrollIndicator = document.getElementById('scroll-indicator');
const iconContents = document.querySelectorAll('.icon-content'); // すべての .icon-content を取得
const delayBeforeShowingIndicator = 750;

let scrollIndicatorEnabled = false;

function updateIndicatorState() {
    if (!scrollIndicatorEnabled) {
        return;
    }

    if (window.scrollY === 0) {
        // スクロールされていないときに表示
        scrollIndicator.style.opacity = 1;
        iconContents.forEach(icon => icon.style.opacity = 1);
    } else {
        // スクロール後に非表示
        scrollIndicator.style.opacity = 0;
        iconContents.forEach(icon => icon.style.opacity = 0);
        scrollIndicatorEnabled = false; // 一度消えたら再表示しない
    }
}

setTimeout(function() {
    scrollIndicatorEnabled = true;
    updateIndicatorState();
}, delayBeforeShowingIndicator);

window.addEventListener('scroll', updateIndicatorState);
