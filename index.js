function sound(type, sec) {
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    osc.type = type
    osc.connect(ctx.destination)
    osc.start()
    osc.stop(sec)
}

function OnButton1Click() {
    sound("square", 0.1);
    setInterval('sound("square", 0.1)', '240000');//240000ms=4min
    target = document.getElementById("output1");
    target.innerHTML = "Starting!";
}

function OnButton2Click() {
    sound("square", 0.1);
    setInterval('sound("square", 0.1)', '180000');//180000ms=3min
    target = document.getElementById("output2");
    target.innerHTML = "Starting!";
}