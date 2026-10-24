const choiceOne = document.getElementById("choiceOne");
const choiceTwo = document.getElementById("choiceTwo");
const choiceThree = document.getElementById("choiceThree");
const lightBulb = document.getElementById("buttonTheme");
const helpButton = document.getElementById("buttonHelp");
const undoButton = document.getElementById("buttonUndo");
const storyText = document.getElementById("storyText");
const endTracker = document.getElementById("timesFinished");

const darkModeText = "floralwhite";
const darkModeBg = "#202124";
const darkModeLb = "#212024";

const docBody = document.body.style;
const leftBarCtl = document.getElementById("leftBar");
const btnBorders = document.getElementsByClassName("left-bar__button");
const lastBorder = document.getElementsByClassName("left-bar__text");

const playerClasses = [ "Aimless Soul", "Witch", "Barbarian", "Easter Egg" ];

let currentScene = "start";
let previousScene = "";
let previousClass = "";
let playerClass = playerClasses[0];

function setEnds(direction) {
  let gameOverNumber = Number(localStorage.getItem("gameOvers"));
  if (direction === "+") {
    gameOverNumber += 1;
  } else if (direction === "-") {
    gameOverNumber -= 1;
  };
  localStorage.setItem("gameOvers",gameOverNumber);
};

function checkTheme() {
  const colorScheme = localStorage.getItem("theme");
  if (colorScheme === "dark") {
    return colorScheme;
  } else if (colorScheme === "light") {
    return colorScheme;
  } else {
    localStorage.setItem("theme", "light");
    return localStorage.getItem("theme");
  };
};

function displayButton(choiceButton, curScene, x) {
  const buttonContent = story[curScene].choices[x];
  if ( buttonContent && ( buttonContent.class === playerClass || !buttonContent.class || buttonContent.class === playerClasses[0] ) ) {
    choiceButton.style.display = "block";
    choiceButton.innerHTML = buttonContent.body;
    choiceButton.onclick = () => {
      previousScene = currentScene;
      previousClass = playerClass;
      currentScene = buttonContent.next;
      checkClass(buttonContent.classSelect);
      setup();
    };
  } else {
    choiceButton.style.display = "none";
  };
};

function checkClass(possibleClass) {
  const classDisplay = document.getElementById("classDisplay");

  if (playerClasses.includes(possibleClass)) {
    playerClass = possibleClass;
    classDisplay.textContent = playerClass;
  }
  else if (possibleClass === gameOver ) {
    playerClass = playerClasses[0];
    classDisplay.textContent = playerClass;
    setEnds("+");
  };

  if (classDisplay.textContent === "Witch") {
    classDisplay.style.color = "magenta";
  }
  else if (classDisplay.textContent === "Barbarian") {
    classDisplay.style.color = "red";
  }
  else {
    classDisplay.style.color = "";
  };
};

function setup() {
  if (!localStorage.getItem("gameOvers")) {
    localStorage.setItem("gameOvers", "0");
  };
  storyText.innerHTML = story[currentScene].body;
  endTracker.textContent = localStorage.getItem("gameOvers");
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

function undoScene() {
  if (previousScene === "") { return };
  let classHolder = playerClass;
  let sceneHolder = currentScene;

  currentScene = previousScene;
  previousScene = sceneHolder;

  playerClass = previousClass;
  previousClass = classHolder;
  checkClass(playerClass);

  if (previousScene === "start" && (currentScene != "magic" && currentScene != "muscle")) {
    setEnds("-");
  } else if (currentScene === "start" && (previousScene != "magic" && previousScene != "muscle")) {
    setEnds("+");
  };

  setup();
};

function changeTheme() {
  const whichTheme = checkTheme();
  if (whichTheme === "light") {
    localStorage.setItem("theme","dark");
    makeDark();
  } else if (whichTheme === "dark") {
    localStorage.setItem("theme","light");
    makeLight();
  };
};

function makeLight() {
  docBody.backgroundColor = "";
  docBody.color = "";
  leftBarCtl.style.borderColor = "";
  leftBarCtl.style.backgroundColor = "";
  for (let button = 0; button < btnBorders.length; button += 1) {
    btnBorders[button].style.borderColor = "";
  };
  lastBorder[0].style.borderColor = "";
  lastBorder[1].style.borderColor = darkModeText;
};

function makeDark() {
  docBody.backgroundColor = darkModeBg
  docBody.color = darkModeText;
  leftBarCtl.style.borderColor = darkModeText;
  leftBarCtl.style.backgroundColor = darkModeLb;
  for (let button = 0; button < btnBorders.length; button += 1) {
    btnBorders[button].style.borderColor = darkModeText;
  };
  lastBorder[0].style.borderColor = darkModeText;
  lastBorder[1].style.borderColor = darkModeText;
};

function themePersist() {
  const whichTheme = checkTheme();
  if (whichTheme === "light") {
    makeLight();
  } else if (whichTheme === "dark") {
    makeDark();
  };
};

lightBulb.onclick = changeTheme;
helpButton.onclick = fakeHelp;
undoButton.onclick = undoScene;

themePersist();
setup();
