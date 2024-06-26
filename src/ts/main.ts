
document.getElementById("nav-button").addEventListener("click", openCloseNav);

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