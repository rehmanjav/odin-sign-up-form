"use strict";

function checkPass (e) {
    let pass1 = document.querySelector(".p1").value;
    let pass2 = document.querySelector(".p2").value;

    if (pass1 != pass2) {
        console.log("not the same");
    } else {
        console.log("same");
    }
}

let p1 = document.querySelector(".p1");

let p2 = document.querySelector(".p2");

p1.addEventListener('input', checkPass);
p2.addEventListener('input', checkPass);
