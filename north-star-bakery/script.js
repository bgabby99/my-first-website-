const form = document.getElementById("contact-form");
function validateName() {
    const name = document.getElementById("name");
    if (name.value.trim().length <2) {
        name.setCustomValidity("Please enter at least 2 characters.");
        return false;
    }
    name.setCustomValidity("");
    return true;
}
function validateEmail() {
    const email = document.getElementById("email");

    if (!email.validity.valid || email.value.trim() === "") {
        email.setCustomValidity("Please enter a valid email address.");
        email.reportValidity();
        return false;
    }
    email.setCustomValidity("");
    return true;
}
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!validateName()) {
        document.getElementById("name").reportValidity();
        return;
    }
    if (!validateEmail()) {
        return;
}

localStorage.setItem("bakeryName", document.getElementById("name").value);
localStorage.setItem("bakeryEmail", document.getElementById("email").value);
alert("Your form looks good!");
});

const savedName = localStorage.getItem("bakeryName");

if (savedName) {
    document.getElementById("name").value = savedName;
}

const savedEmail = localStorage.getItem("bakeryEmail");

if (savedEmail) {
    document.getElementById("email").value = savedEmail;
}