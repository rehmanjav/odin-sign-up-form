"use strict";

function checkPass (e) {
    let pass1 = document.querySelector(".p1").value;
    let pass2 = document.querySelector(".p2").value;

    if (pass1 != pass2) {
        console.log("not the same");
        let pwd1 = document.querySelector(".p1");
        let pwd2 = document.querySelector(".p2");
        let errorMsg = document.querySelector(".dont-match");

        pwd1.classList.add("error");
        pwd2.classList.add("error");
        errorMsg.style.visibility = "visible";

    } else {
        console.log("same");
        let pwd1 = document.querySelector(".p1");
        let pwd2 = document.querySelector(".p2");
        let errorMsg = document.querySelector(".dont-match");

        pwd1.classList.remove("error");
        pwd2.classList.remove("error");
        errorMsg.style.visibility = "hidden";
    }
}

let p1 = document.querySelector(".p1");

let p2 = document.querySelector(".p2");

p1.addEventListener('input', checkPass);
p2.addEventListener('input', checkPass);
