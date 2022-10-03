var menuList = document.getElementById("menuList");

menuList.style.display = "none";

function openmenu() {
    var menuIcon = document.getElementById("menu-button");

    if (menuList.style.display == "none") {
        menuList.style.display = "block"; 
    }
    else {
        menuList.style.display = "none";
    }
}
