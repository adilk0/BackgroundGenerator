let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let text = document.querySelector("h3");
let body = document.querySelector(".gradient");

function color_picker(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    text.textContent = body.style.background + ";"
}

color1.addEventListener("input", color_picker);

color2.addEventListener("input", color_picker);
