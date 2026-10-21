
function convertToFah() {
  let userInput = Number(document.getElementById("temp-input").value);
  let output = document.getElementById("output");
  let newValue = userInput * (9/5) + 32;
  if (isNaN(userInput)) {
    output.textContent = "Please enter a valid number." 
  } else {
    output.textContent = userInput + "°C = " + Math.round(newValue) + "°F";
  }
}

function convertToCel() {
  let userInput = Number(document.getElementById("temp-input").value);
  let output = document.getElementById("output");
  let newValue = (userInput - 32) * (5/9);
  if (isNaN(userInput)) {
    output.textContent = "Please enter a valid number." 
  } else {
    output.textContent = userInput + "°F = " + Math.round(newValue) + "°C";
  }
}

let toFahBtn = document.getElementById("c-to-f");
let toCelBtn = document.getElementById("f-to-c");

toFahBtn.onclick = convertToFah;
toCelBtn.onclick = convertToCel;
