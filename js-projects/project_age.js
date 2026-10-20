function showAge() {
  let output = document.getElementById("output");
  let inputYear = document.getElementById("year-input");
  let birthYear = Number(inputYear.value);
  let age = getAge(birthYear);
  if (birthYear <= 1800 || age < 0 || isNaN(birthYear)) {
    output.textContent = "Please enter a valid year.";
  } else {
    output.textContent = "You're " + age + " years old.";
  }
}

function getAge(year) {
  let currentYear = 2026;
  let age = currentYear - year;
  return age;
}

let button = document.getElementById("year-button");
button.onclick = showAge;
