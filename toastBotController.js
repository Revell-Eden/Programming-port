"use strict";
toast = document.getElementById("toast");

function closeToast() {
    if(toast.style.opacity === "0%") {
        toast.style.opacity = "100%";
    } else {
        toast.style.opacity = "0%";
        console.log("Windows Closed");
    } 
}