/* ==========================================
   ACADEXA
   Learning JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    moduleStatus();
    continueLearning();
    progressUpdate();

});


/* ==========================================
   MODULE STATUS
========================================== */

function moduleStatus() {

    const buttons =
        document.querySelectorAll(".module-table .btn");


    buttons.forEach(function (button) {


        button.addEventListener("click", function () {


            if (this.textContent.includes("Continue")) {


                alert("Opening learning module...");


            }


            else if (this.textContent.includes("Start")) {


                alert("Module Started Successfully!");


                this.textContent = "Continue";


                this.classList.remove("btn-outline");

                this.classList.add("btn-primary");


            }


            else {


                alert("Reviewing completed module.");


            }


        });


    });


}


/* ==========================================
   CONTINUE LEARNING
========================================== */

function continueLearning() {


    const progressBar =
        document.querySelector(".learning-card progress");


    if(progressBar){


        progressBar.addEventListener("click", function(){


            alert(
                "Your current course progress is "
                + progressBar.value
                + "%"
            );


        });


    }


}


/* ==========================================
   UPDATE COURSE PROGRESS
========================================== */

function progressUpdate() {


    const completeButtons =
        document.querySelectorAll(".module-table button");


    completeButtons.forEach(function(button){


        button.addEventListener("dblclick",function(){


            this.textContent = "Completed";


            this.disabled = true;


            this.classList.remove("btn-primary");


            this.classList.add("btn-secondary");


            alert(
                "Module marked as completed!"
            );


        });


    });


}