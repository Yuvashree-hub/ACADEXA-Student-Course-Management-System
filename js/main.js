/* ==========================================
   ACADEXA
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeWebsite();

});

/* ==========================================
   INITIALIZE WEBSITE
========================================== */

function initializeWebsite() {

    highlightCurrentPage();
    smoothScrolling();
    buttonEffects();
    pageAnimation();

}

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

function highlightCurrentPage() {

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        const page = link.getAttribute("href");

        if (page === currentPage) {

            link.classList.add("active");

        }

    });

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

function smoothScrolling() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                event.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

}

/* ==========================================
   BUTTON EFFECT
========================================== */

function buttonEffects() {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-3px)";

        });

        button.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0px)";

        });

    });

}

/* ==========================================
   PAGE FADE ANIMATION
========================================== */

function pageAnimation() {

    const sections = document.querySelectorAll("section");

    sections.forEach(function (section) {

        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease";

    });

    setTimeout(function () {

        sections.forEach(function (section) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        });

    }, 200);

}

/* ==========================================
   SCROLL TO TOP
========================================== */

window.addEventListener("beforeunload", function () {

    window.scrollTo(0, 0);

});

/* ==========================================
   FOOTER YEAR
========================================== */

const footerText = document.querySelector(".footer p");

if (footerText) {

    footerText.innerHTML =
        "&copy; " +
        new Date().getFullYear() +
        " ACADEXA. All Rights Reserved.";

}