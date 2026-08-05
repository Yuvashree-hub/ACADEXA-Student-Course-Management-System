/* ==========================================
   ACADEXA
   Authentication JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    loginValidation();
    registerValidation();

});

/* ==========================================
   LOGIN VALIDATION
========================================== */

function loginValidation() {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {

        return;

    }

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            loginForm.querySelector('input[type="email"]').value.trim();

        const password =
            loginForm.querySelector('input[type="password"]').value.trim();

        if (email === "" || password === "") {

            alert("Please enter your email and password.");

            return;

        }

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    });

}

/* ==========================================
   REGISTRATION VALIDATION
========================================== */

function registerValidation() {

    const registerForm = document.getElementById("registerForm");

    if (!registerForm) {

        return;

    }

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullName =
            registerForm.querySelector('input[type="text"]').value.trim();

        const email =
            registerForm.querySelector('input[type="email"]').value.trim();

        const password =
            registerForm.querySelectorAll('input[type="password"]')[0].value;

        const confirmPassword =
            registerForm.querySelectorAll('input[type="password"]')[1].value;

        if (
            fullName === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill in all the required fields.");

            return;

        }

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;

        }

        alert("Registration Successful!");

        window.location.href = "login.html";

    });

}