/* ==========================================
   ACADEXA
   Notifications JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    notificationInteraction();
    notificationCounter();

});


/* ==========================================
   NOTIFICATION CLICK EFFECT
========================================== */

function notificationInteraction() {

    const notifications =
        document.querySelectorAll(".notification-card");


    notifications.forEach(function(notification){


        notification.addEventListener("click", function(){


            this.style.borderLeft =
                "5px solid #0B1F3A";


            this.style.backgroundColor =
                "#F8FAFC";


        });


    });


}


/* ==========================================
   NOTIFICATION COUNTER
========================================== */

function notificationCounter(){

    const count =
        document.querySelectorAll(".notification-card").length;


    const notificationLink =
        document.querySelector(
            '.nav-links a[href="notifications.html"]'
        );


    if(notificationLink && count > 0){


        notificationLink.innerHTML =
            "Notifications (" + count + ")";


    }


}


/* ==========================================
   MARK ALL READ
========================================== */

function markAllRead(){


    const notifications =
        document.querySelectorAll(".notification-card");


    notifications.forEach(function(notification){


        notification.style.opacity = "0.7";


    });


    alert("All notifications marked as read.");


}