/* ==========================================
   ACADEXA
   Courses JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    courseSearch();
    enrollmentButtons();
    courseCardAnimation();

});


/* ==========================================
   COURSE SEARCH
========================================== */

function courseSearch() {

    const searchInput = document.getElementById("searchCourse");

    const courses = document.querySelectorAll(".course-card");


    if (!searchInput) {

        return;

    }


    searchInput.addEventListener("keyup", function () {

        const searchValue =
            searchInput.value.toLowerCase();


        courses.forEach(function (course) {


            const courseName =
                course.querySelector("h3").textContent.toLowerCase();


            if (courseName.includes(searchValue)) {

                course.style.display = "block";

            } else {

                course.style.display = "none";

            }


        });


    });


}


/* ==========================================
   ENROLLMENT BUTTONS
========================================== */

function enrollmentButtons() {

    const buttons =
        document.querySelectorAll(".btn-primary");


    buttons.forEach(function (button) {


        if (button.textContent.includes("Enroll")) {


            button.addEventListener("click", function () {


                alert("Course Enrollment Successful!");


            });


        }


    });


}


/* ==========================================
   COURSE CARD ANIMATION
========================================== */

function courseCardAnimation() {


    const cards =
        document.querySelectorAll(".course-card");


    cards.forEach(function (card, index) {


        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";


        setTimeout(function () {


            card.style.transition =
                "0.5s ease";


            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";


        }, index * 120);


    });


}


/* ==========================================
   VIEW COURSE DETAILS
========================================== */

function viewCourse(courseName) {


    localStorage.setItem(
        "selectedCourse",
        courseName
    );


    window.location.href =
        "course-details.html";


}


/* ==========================================
   LOAD SELECTED COURSE
========================================== */

function loadSelectedCourse() {


    const selectedCourse =
        localStorage.getItem("selectedCourse");


    const title =
        document.querySelector(".course-content h1");


    if (selectedCourse && title) {


        title.textContent =
            selectedCourse;


    }


}