const choiceOne = document.getElementById("choiceOne");
const choiceTwo = document.getElementById("choiceTwo");
const choiceThree = document.getElementById("choiceThree");
const lightBulb = document.getElementById("buttonTheme");
const helpButton = document.getElementById("buttonHelp");
const storyText = document.getElementById("storyText");
const playerClasses = [ "Witch", "Barbarian" ];

let currentScene = "start";
let playerClass = "Aimless Soul";
let isDark = false;

function displayButton(choiceButton, curScene, x) {
  const buttonContent = story[curScene].choices[x];
  if ( buttonContent && ( buttonContent.class === playerClass || !buttonContent.class ) ) {
    choiceButton.style.display = "block";
    choiceButton.textContent = buttonContent.body;
    choiceButton.onclick = () => {
      currentScene = buttonContent.next;
      checkClass(buttonContent.body);
      setup();
    };
  } else {
    choiceButton.style.display = "none";
  }
};

function checkClass(possibleClass) {
  const classDisplay = document.getElementById("classDisplay");
  if (playerClasses.includes(possibleClass)) {
    playerClass = possibleClass;
    classDisplay.textContent = playerClass;
  } else if (possibleClass === gameOver ) {
    playerClass = "Aimless Soul";
    classDisplay.textContent = playerClass;
  };
  if (classDisplay.textContent === "Witch") {
    classDisplay.style.color = "magenta";
  } else if (classDisplay.textContent === "Barbarian") {
    classDisplay.style.color = "red";
  } else {
    classDisplay.style.color = "";
  }
};

function setup() {
  storyText.textContent = story[currentScene].body;
  displayButton(choiceOne, currentScene, 0);
  displayButton(choiceTwo, currentScene, 1);
  displayButton(choiceThree, currentScene, 2);
};

function fakeHelp() {
  storyText.textContent = "What are you confused about? Go back and press some buttons :)";
  choiceOne.style.display = "block";
  choiceOne.textContent = "Fine."
  choiceOne.onclick = setup;
  choiceTwo.style.display = "none";
  choiceThree.style.display = "none";
};

function darkMode() {
  const darkModeText = "floralwhite";
  const darkModeBg = "#202124";

  const docBody = document.body.style;
  const barBorders = document.getElementById("leftBar");
  const btnBorders = document.getElementsByClassName("left-bar__button");
  const lastBorder = document.getElementsByClassName("left-bar__text");

  if (!isDark) {
    docBody.backgroundColor = darkModeBg
    docBody.color = darkModeText;
    barBorders.style.borderColor = darkModeText;
    btnBorders[0].style.borderColor = darkModeText;
    btnBorders[1].style.borderColor = darkModeText;
    btnBorders[2].style.borderColor = darkModeText;
    lastBorder[0].style.borderColor = darkModeText;
    isDark = true;
  } else {
    docBody.backgroundColor = "";
    docBody.color = "";
    barBorders.style.borderColor = "";
    btnBorders[0].style.borderColor = "";
    btnBorders[1].style.borderColor = "";
    btnBorders[2].style.borderColor = "";
    lastBorder[0].style.borderColor = "";
    isDark = false;
  };
};

helpButton.onclick = fakeHelp;
lightBulb.onclick = darkMode;

setup();
