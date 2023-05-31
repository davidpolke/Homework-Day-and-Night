
const glowColorNight = "#B7CFFF";
const glowColorDay = "#FFF6D8";
const backgroundNight = "#06121B";
const backgroundDay = "#BCBAAD";
var state = 0;
var state2 = 0;



window.addEventListener('load', function () {
    var button = document.getElementById("button");
    var knob = document.getElementById("knob")
    var body = document.getElementById("body")
    var on = document.getElementById("on")
    var off = document.getElementById("off")
    var frame = document.getElementById("frame")
    var card = document.getElementById("card")
    var sun = document.getElementById("sun")
    var moon = document.getElementById("moon")
    button.addEventListener("click", function () { clicked() });
})


function clicked() {

    if (state == 0 && state2 == 0) {
        knob.style.top = "3px";
        body.style.backgroundColor = "#BCBAAD";
        card.style.border = "3px solid #FFF6D8";
        on.style.color = "#FFF6D8";
        off.style.color = "#FFF6D8";
        frame.style.border = "4px solid #FFF6D8";
        button.style.background = "#FFF6D8";
        sun.style.opacity = "1";
        moon.style.opacity = "0";
        state = 1;
        state2 = 1;
    }

    if (state == 1 && state2 == 0) {
        knob.style.top = "45px"
        body.style.backgroundColor = "#06121B";
        card.style.border = "3px solid #B7CFFF";
        on.style.color = "#B7CFFF";
        off.style.color = "#B7CFFF";
        frame.style.border = "4px solid #B7CFFF";
        button.style.background = "#B7CFFF";
        sun.style.opacity = "0";
        moon.style.opacity = "1";
        state = 0;
        state2 = 1;
    }

    state2 = 0;

}




