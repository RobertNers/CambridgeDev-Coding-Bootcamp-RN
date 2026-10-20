let title = document.getElementById("title");
title.textContent = "Your Page";
title.style.color = "palegreen";
title.style.fontSize = "35px";

let clicks = 0;

function addClick() {
  clicks += 1;
  title.textContent = "Clicks: "+clicks;
}

let counter = document.getElementById("counter");
counter.addEventListener("click", addClick);


function greet() {
  let name = document.getElementById("name").value;
  let message = document.getElementById("message");
  message.textContent = "Hello, " + name + "!";
}

let greetButton = document.getElementById("greet");
greetButton.addEventListener("click", greet);

function darkMode() {
  let colors = document.body.style;
  if (!isDark) {
    colors.backgroundColor = "#202124";
    colors.color = "floralwhite";
    isDark = true;
  } else {
    colors.backgroundColor = "white";
    colors.color = "black";
    isDark = false;
  }
}

let isDark = false;
let lightBulb = document.getElementById("theme");
lightBulb.addEventListener("click", darkMode)
