function charCount() {
  let counter = document.getElementById("counter");
  let textBox = document.getElementById("typingzone");
  let numChars = textBox.value.length;
  let maxChars = 100;
  counter.textContent = numChars + "/" + maxChars;
  if (numChars > maxChars) {
    counter.style.color = "red";
  } else {
    counter.style.removeProperty("color");
  }
}

let textBox = document.getElementById("typingzone");
textBox.oninput = charCount;
