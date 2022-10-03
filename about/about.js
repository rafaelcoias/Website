window.addEventListener('scroll', reveal);

var menuList = document.getElementById("menuList");
var itemskills = document.getElementById("itemskills");
var itemtools = document.getElementById("itemtools");
var itemlang = document.getElementById("itemlang");



menuList.style.display = "none";

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            if (reveals[i].classList.contains("odd")){
                reveals[i].classList.add('active_odd');
            }
            else if (reveals[i].classList.contains("even")){
                reveals[i].classList.add('active_even');
            }
            else {
                reveals[i].classList.add('active');
            }
        }
        else {
            if (reveals[i].classList.contains("odd")){
                reveals[i].classList.remove('active_odd');
            }
            else if (reveals[i].classList.contains("even")){
                reveals[i].classList.remove('active_even');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }  
}

function openmenu() {
    var menuIcon = document.getElementById("menu-button");

    if (menuList.style.display == "none") {
        menuList.style.display = "block"; 
    }
    else {
        menuList.style.display = "none";
    }
}

function displaySkills() {
    if (itemskills.classList.contains("opened")) {  
        itemtools.style.display = "block";
        itemlang.style.display = "block";
        itemskills.classList.remove('opened');
        itemskills.classList.add('closed');
    }
    else {
        itemskills.classList.remove('closed');  
        itemtools.style.display = "none";
        itemlang.style.display = "none";
        itemskills.classList.add('opened');   
    }
}

function displayTools() {
    if (itemtools.classList.contains("opened")) {
        itemskills.style.display = "block";
        itemlang.style.display = "block";
        itemtools.classList.remove('opened');
        itemtools.classList.add('closed');
    }
    else {
        itemtools.classList.remove('closed');
        itemskills.style.display = "none";
        itemlang.style.display = "none";
        itemtools.classList.add('opened');   
    }
}

function displayLang() {
    if (itemlang.classList.contains("opened")) {
        itemtools.style.display = "block";
        itemskills.style.display = "block";
        itemlang.classList.remove('opened');
        itemlang.classList.add('closed');
    }
    else {
        itemlang.classList.remove('closed');
        itemtools.style.display = "none";
        itemskills.style.display = "none";
        itemlang.classList.add('opened');   
    }
}