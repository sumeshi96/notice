let cat_se = new Audio('cat.mp3');
let fin_se = new Audio('fin.mp3');

//ボリュームの設定
let slider_volume = document.getElementById("volume");
let slider_range = document.getElementById("vol_range")

cat_se.volume = slider_volume.value;//ボリュームの初期値

//ボリューム変更時
slider_volume.addEventListener("change", function () {
    cat_se.volume = slider_volume.value;
    slider_range.textContent = slider_volume.value;
}, false);

//音鳴らす
function sound(button_type) {
    if (button_type == 0) {
        cat_se.play();
    } else if (button_type == 1) {
        fin_se.play();
    }
}

//4分ごとに音を鳴らす
function OnButton1Click() {
    sound(0);//猫
    //setTimeout('sound(1)', '10800000');
    setInterval('sound(0)', '240000');
    min4 = document.getElementById('output1');
    min4.innerHTML = "Start 4mititue";
    min3 = document.getElementById('output2');
    min3.innerHTML = "";
}

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
