"use strict";
let projects = document.querySelector("#projects");
let extendBtn = document.querySelector("btn");

function extendCnt() {
    if (projects.style.height === "100%"){
      projects.style.height = "50em";

      console.log("close");
    } else {
      projects.style.height = "100%";
      console.log("open");
      extendBtn.classList.add('openSesame');
}   
}
