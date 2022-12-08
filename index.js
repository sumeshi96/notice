// 音源の定義
let catSe = new Audio('cat.mp3');
let finSe = new Audio('fin.mp3');

// ボリュームの設定
let sliderVolume = document.getElementById("volume");
let sliderRange = document.getElementById("vol_range")
catSe.volume = sliderVolume.value; // ボリュームの初期値

// ボリューム変更時
sliderVolume.addEventListener("change", () => {
    catSe.volume = sliderVolume.value;
    sliderRange.textContent = sliderVolume.value;
}, false);

//音鳴らす
sound = (buttonType) => {
    if (buttonType == 0) {
        catSe.play();
    } else if (buttonType == 1) {
        finSe.play();
    }
}

// 音を鳴らすタイマー
let soundTimer = (soundType, intervalTime) => {
    return new Promise(resolve => {
        setTimeout(() => {
            sound(soundType);
        }, intervalTime);
    });
}

//4分ごとに音を鳴らす
const button4min = document.getElementById("button4min");
const startDisplay4min = document.getElementById("start4min");
const countDisplay4min = document.getElementById("count4min");
const elapsedTimeDisplay4min = document.getElementById("elapsedTime4min");

button4min.addEventListener("click", async () => {
    sound(0);
    let elapsedTime4min = 0; // 経過時間を保持
    startDisplay4min.innerHTML = "Start 4min!" // 開始を知らせる
    for (i = 1; i <= 60; i++) {
        countDisplay4min.innerHTML = i + "回目"; // n回目表示
        elapsedTimeDisplay4min.innerHTML = "経過時間は 約" + elapsedTime4min / 60 + " 分です。";//経過時間表示
        await soundTimer(0, 240000);
        elapsedTime4min += 240;
        await soundTimer(0, 5000);
        ela
        soundpsedTime4min += 5;
    }
    startDisplay4min.innerHTML = "Finish 4min!";
    sound(1);
});

//3分15秒ごとに音を鳴らす
function OnButton2Click() {
    sound(0);//猫
    //setTimeout('sound(1)', '9000000');
    setInterval('sound(0)', '195000 ');
    min3 = document.getElementById('output2');
    min3.innerHTML = "Start 3mititue";
    min4 = document.getElementById('output1');
    min4.innerHTML = "";
}
