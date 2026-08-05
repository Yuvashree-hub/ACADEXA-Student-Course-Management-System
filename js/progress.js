/* ==========================================
   ACADEXA
   Progress JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    animateProgressBars();
    calculateProgress();
    progressTableEffect();

});


/* ==========================================
   ANIMATE PROGRESS
========================================== */

function animateProgressBars() {

    const progressBars =
        document.querySelectorAll("progress");


    progressBars.forEach(function (bar) {


        const value = bar.value;


        bar.value = 0;


        let current = 0;


        const animation = setInterval(function () {


            if (current >= value) {


                clearInterval(animation);


            }
            else {


                current++;


                bar.value = current;


            }


        }, 15);


    });


}


/* ==========================================
   CALCULATE OVERALL PROGRESS
========================================== */

function calculateProgress() {


    const progressValues = [75,60,42,100,100];


    let total = 0;


    progressValues.forEach(function(value){


        total += value;


    });


    const average =
        Math.round(total / progressValues.length);


    const progressHeading =
        document.querySelector(".progress-section .dashboard-card:last-child h2");


    if(progressHeading){


        progressHeading.textContent =
            average + "%";


    }


}


/* ==========================================
   TABLE HIGHLIGHT EFFECT
========================================== */

function progressTableEffect(){


    const rows =
        document.querySelectorAll(".course-progress tr");


    rows.forEach(function(row){


        row.addEventListener("mouseenter",function(){


            this.style.backgroundColor =
                "#F1F5F9";


        });


        row.addEventListener("mouseleave",function(){


            this.style.backgroundColor =
                "";


        });


    });


}