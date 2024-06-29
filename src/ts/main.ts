var isDay: boolean = true;
var root = document.querySelector(':root');

document.getElementById("nav-button").addEventListener("click", openCloseNav);
document.getElementById("night-mode-button").addEventListener("click", dayNight);

function openCloseNav() {
    let closedNav = document.getElementById("hidden-closed-nav").innerHTML;

    if (closedNav == document.getElementById("nav-button").innerHTML) {
        document.getElementById("nav-button").innerHTML = "&#9932";
        document.getElementById("header-nav").style.display="flex";
    } else {
        document.getElementById("nav-button").innerHTML = "&#9776";
        document.getElementById("header-nav").style.display="none";
    }
}

function dayNight(){
    buttonSwitch();
    colorSwitch();
}

function buttonSwitch() {
    if (isDay == true) {
        document.getElementById("switch-up").style.transform="translateY(-50%)";
        isDay = false;
    } else {
        document.getElementById("switch-up").style.transform="translateY(0%)";
        isDay = true;
    }
}

function colorSwitch() {
    if (isDay == false) {
        root.style.setProperty("--bodyBackgroundColor", "#6D5D6E");
        root.style.setProperty("--headerBackgroundColor", "#393646");
        root.style.setProperty("--headerNavBackgroundColor", "#4F4557");
        root.style.setProperty("--headerNavButtonColor", "#424242");
        root.style.setProperty("--textColor", "#F4EEE0");
    } else {
        root.style.setProperty("--bodyBackgroundColor", "#EEE9E3");
        root.style.setProperty("--headerBackgroundColor", "#C5A586");
        root.style.setProperty("--headerNavBackgroundColor", "#E7D6C6");
        root.style.setProperty("--headerNavButtonColor", "#D4D6D5");
        root.style.setProperty("--textColor", "#474747");
    }
}