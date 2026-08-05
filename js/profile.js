/* ==========================================
   ACADEXA
   Profile JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    profileUpdate();
    profileFormValidation();
    profileImageEffect();

});


/* ==========================================
   PROFILE UPDATE
========================================== */

function profileUpdate() {

    const saveButton =
        document.querySelector("#profileForm button");


    if(saveButton){


        saveButton.addEventListener("click", function(event){


            event.preventDefault();


            alert(
                "Profile updated successfully!"
            );


        });


    }


}


/* ==========================================
   PROFILE FORM VALIDATION
========================================== */

function profileFormValidation(){


    const form =
        document.getElementById("profileForm");


    if(!form){

        return;

    }


    form.addEventListener("submit", function(event){


        event.preventDefault();


        const inputs =
            form.querySelectorAll("input");


        let valid = true;


        inputs.forEach(function(input){


            if(input.value.trim() === ""){


                valid = false;


            }


        });


        if(valid){


            alert(
                "Profile information saved successfully!"
            );


        }

        else{


            alert(
                "Please fill all the required fields."
            );


        }


    });


}


/* ==========================================
   PROFILE IMAGE EFFECT
========================================== */

function profileImageEffect(){


    const image =
        document.querySelector(".profile-image img");


    if(image){


        image.addEventListener("mouseenter",function(){


            this.style.transform =
                "scale(1.05)";


            this.style.transition =
                "0.3s ease";


        });


        image.addEventListener("mouseleave",function(){


            this.style.transform =
                "scale(1)";


        });


    }


}