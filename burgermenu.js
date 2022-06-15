window.addEventListener("DOMContentLoaded", windowLoaded);


function windowLoaded() {
    document.querySelector(".navigation").classList.add("hide");
}

function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector(".navigation").classList.toggle("hide");
  }