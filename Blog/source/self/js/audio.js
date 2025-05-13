const musicButton = document.getElementById("musicButton");
const audio = document.getElementById("audio");

var everPlayed = false;

// ボタンに表示するアイコンのHTML
const playIconHTML = "<span class='" + musicButton.dataset.playIcon + "'></span>";
const pauseIconHTML = "<span class='" + musicButton.dataset.pauseIcon + "'></span>";

// ボタンのアイコンを更新する関数
var updateMusicButtonIcon = function() {
    if (audio.paused) {
        musicButton.innerHTML = "Music " + playIconHTML;
    } else {
        musicButton.innerHTML = "Music " + pauseIconHTML;
    }
}

// ボタンがクリックされたときの処理
var onClick = function() {
    if (audio.paused) {
        everPlayed = true;
        audio.play();
        audio.volume = 0.3;
    } else {
        audio.pause();
    }

    updateMusicButtonIcon();
}

musicButton.addEventListener('click', onClick, false);

// 初期状態のボタンアイコンを設定
updateMusicButtonIcon();
