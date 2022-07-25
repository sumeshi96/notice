let music = new Audio('cat.mp3');

//ボリュームの設定
let slider_volume = document.getElementById("volume");
let slider_range = document.getElementById("vol_range")

music.volume = slider_volume.value;//ボリュームの初期値

//ボリューム変更時
slider_volume.addEventListener("change", function () {
    music.volume = slider_volume.value;
    slider_range.textContent = slider_volume.value;
}, false);

function sound() {
    music.play();//音鳴らす
}

function OnButton1Click() {
    sound();
    setInterval('sound()', '240000');
    min4 = document.getElementById('output1');
    min4.innerHTML = "Start 4mititue";
    min3 = document.getElementById('output2');
    min3.innerHTML = "";
}

function OnButton2Click() {
    sound();
    setInterval('sound()', '180000');
    min3 = document.getElementById('output2');
    min3.innerHTML = "Start 3mititue";
    min4 = document.getElementById('output1');
    min4.innerHTML = "";
}