var menuList = document.getElementById("menuList");

menuList.style.display = "none";

function openmenu() {
    if (menuList.style.display == "none") {
        menuList.style.display = "block"; 
    }
    else {
        menuList.style.display = "none";
    }
}
