/* ==========================================
   ACADEXA
   Dashboard JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    welcomeMessage();
    animateDashboardCards();
    dashboardStatistics();
    taskRowEffect();

});

/* ==========================================
   WELCOME MESSAGE
========================================== */

function welcomeMessage() {

    const heading = document.querySelector(".dashboard-banner h1");

    if (heading) {

        const hour = new Date().getHours();

        let greeting = "Welcome";

        if (hour < 12) {

            greeting = "Good Morning";

        } else if (hour < 17) {

            greeting = "Good Afternoon";

        } else {

            greeting = "Good Evening";

        }

        heading.textContent = greeting + ", Student";

    }

}

/* ==========================================
   DASHBOARD CARD ANIMATION
========================================== */

function animateDashboardCards() {

    const cards = document.querySelectorAll(".dashboard-card");

    cards.forEach(function (card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(function () {

            card.style.transition = "0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

}

/* ==========================================
   DASHBOARD STATISTICS
========================================== */

function dashboardStatistics() {

    const statistics = document.querySelectorAll(".dashboard-card h2");

    statistics.forEach(function (item) {

        item.style.color = "#10B981";
        item.style.fontWeight = "700";

    });

}

/* ==========================================
   TASK TABLE EFFECT
========================================== */

function taskRowEffect() {

    const rows = document.querySelectorAll(".task-table tbody tr");

    rows.forEach(function (row) {

        row.addEventListener("mouseenter", function () {

            this.style.backgroundColor = "#F1F5F9";
            this.style.cursor = "pointer";

        });

        row.addEventListener("mouseleave", function () {

            this.style.backgroundColor = "#FFFFFF";

        });

    });

}