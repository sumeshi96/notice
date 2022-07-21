function sound(type, sec) {
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    osc.type = type
    osc.connect(ctx.destination)
    osc.start()
    osc.stop(sec)
}

function OnButtonClick() {
    sound("square", 0.1);
    setInterval('sound("square", 0.1)', '240000');
    target = document.getElementById("output");
    target.innerHTML = "Starting!";
}
