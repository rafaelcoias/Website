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

function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var emailMessage = document.getElementById('message').value;
    var body = 'Name: ' + name + '<br><br>Email: ' + email + '<br><br>Subject: ' + subject + '<br><br>Message: ' + emailMessage; 

    var error = '';           

    if (name === '' || name == null) {
        error = error + 'Name is required.\n';
        document.getElementById('name').style.border = 'solid 2px rgb(255, 100, 100)';
    }
    else
        document.getElementById('name').style.border = 'none';
    if (email === '' || email == null) {
        error = error + 'Email is required.\n';
        document.getElementById('email').style.border = 'solid 2px rgb(255, 100, 100)';
    }
    else
        document.getElementById('email').style.border = 'none';
    if (emailMessage === '' || emailMessage == null) {
        error = error + 'Message is required.\n';
        document.getElementById('message').style.border = 'solid 2px rgb(255, 100, 100)';
    }
    else
        document.getElementById('message').style.border = 'none';
    if (error != '') {
        return false;
    }

    Email.send({
        SecureToken : "e1e7ff84-d824-4466-a907-476316a33c23",
        To : 'rafaelmsppcoias@gmail.com',
        From : "rafaelmsppcoias@gmail.com",
        Subject : subject,
        Body : body
    })
    alert("Email Sent Succesfuly !");
    reset();
}