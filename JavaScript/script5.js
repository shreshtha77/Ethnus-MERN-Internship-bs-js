// script.js
document.getElementById("nameError").style.display = "none";
document.getElementById("emailError").style.display = "none";
document.getElementById("websiteError").style.display = "none";
document.getElementById("messageError").style.display = "none";

function validateForm() {
    var isValid = true;

    // Name validation
    var name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("nameError").style.display = "inline";
        document.getElementById("name").classList.add("error-input");
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
        document.getElementById("name").classList.remove("error-input");
    }

    // Email validation
    var email = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").style.display = "inline";
        document.getElementById("email").classList.add("error-input");
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
        document.getElementById("email").classList.remove("error-input");
    }

    // Website validation
    var website = document.getElementById("website").value;
    var urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (website === "" || !urlPattern.test(website)) {
        document.getElementById("websiteError").style.display = "inline";
        document.getElementById("website").classList.add("error-input");
        isValid = false;
    } else {
        document.getElementById("websiteError").style.display = "none";
        document.getElementById("website").classList.remove("error-input");
    }

    // Message validation
    var message = document.getElementById("message").value;
    if (message === "") {
        document.getElementById("messageError").style.display = "inline";
        document.getElementById("message").classList.add("error-input");
        isValid = false;
    } else {
        document.getElementById("messageError").style.display = "none";
        document.getElementById("message").classList.remove("error-input");
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}