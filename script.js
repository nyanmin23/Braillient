// menu
document.getElementById('menu-btn').addEventListener('click', showHiddenMenu);
document.getElementById('close-btn').addEventListener('click', hideHiddenMenu);
document.getElementById('darken-filter').addEventListener('click', function() {
    document.getElementById("error-alert").style.display = "none";
    document.getElementById("alert").style.display = "none";
    hideHiddenMenu();
});

function showHiddenMenu() {
    document.getElementById('hidden-menu').style.right = 0;
    document.getElementById('darken-filter').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    document.getElementById('darken-filter').style.zIndex = "1";
}

function hideHiddenMenu() {
    document.getElementById('hidden-menu').style.right = "-999px";
    document.getElementById('darken-filter').style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById('darken-filter').style.zIndex = "-1";
}

var header = document.getElementsByTagName("header");
var header_style = header[0].style;
window.onscroll = function () {
if (this.oldScroll < this.scrollY) {
    header_style.top = "-12vh";
} else {
    header_style.top = "0";
}
this.oldScroll = this.scrollY;
};

var clickables = document.getElementsByClassName("clickable");
var click_sound = new Audio("sounds/click.wav");
for (let x = 0; x < clickables.length; x++) {
    const btn = clickables[x];
    btn.addEventListener("click", function() {
        click_sound.play();
    })
}