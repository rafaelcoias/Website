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

function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var emailMessage = document.getElementById('message').value;
    var body = 'Name: ' + name + '<br><br>Email: ' + email + '<br><br>Subject: ' + subject + '<br><br>Message: ' + emailMessage; 
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var error = '';           

    document.getElementById("warning").style.animation = "none";
    document.getElementById("notification").style.animation = "none";

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
        document.getElementById("warning").style.animation = "modal-in 8000ms ease forwards";
        return false;
    }

    if (!email.match(emailPattern)) {
        document.getElementById('email').style.border = 'solid 2px rgb(255, 100, 100)';
        document.getElementById("emailWarning").style.animation = "modal-in 8000ms ease forwards";
        return false;
    }
    else
        document.getElementById('email').style.border = 'none';



    Email.send({
        SecureToken : "01dd3e9b-a4ed-4397-a45e-06124742f27b",
        To : 'rafaelmsppcoias@gmail.com',
        From : "rafaelmsppcoias@gmail.com",
        Subject : subject,
        Body : body
    })
    document.getElementById("form").reset();
    document.getElementById("notification").style.animation = "modal-in 3500ms ease forwards";
    setTimeout("location.reload(true)", 3000);
}

