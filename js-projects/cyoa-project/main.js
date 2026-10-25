const choiceOne = document.getElementById("choiceOne");
const choiceTwo = document.getElementById("choiceTwo");
const choiceThree = document.getElementById("choiceThree");
const lightBulb = document.getElementById("buttonTheme");
const helpButton = document.getElementById("buttonHelp");
const undoButton = document.getElementById("buttonUndo");
const storyText = document.getElementById("storyText");
const endTracker = document.getElementById("timesFinished");

const playerClasses = [ "Aimless Soul", "Witch", "Barbarian", "Easter Egg" ];

let currentScene = "start";
let previousScene = "";
let previousClass = "";
let playerClass = playerClasses[0];

let isDark = localStorage.getItem("darkMode") === "true";

function setEnds(direction) {
  let gameOverNumber = Number(localStorage.getItem("gameOvers"));
  if (direction === "+") {
    gameOverNumber += 1;
  } else if (direction === "-") {
    gameOverNumber -= 1;
  };
  localStorage.setItem("gameOvers",gameOverNumber);
};

function displayButton(choiceButton, curScene, x) {
  const buttonContent = story[curScene].choices[x];
  const isValidButton = 
    buttonContent && (
      buttonContent.class === playerClass ||
      !buttonContent.class ||
      buttonContent.class === playerClasses[0]
    );

  if (isValidButton) {
    choiceButton.style.display = "block";
    choiceButton.innerHTML = buttonContent.body;
    choiceButton.onclick = () => {

      previousScene = currentScene;
      previousClass = playerClass;
      currentScene = buttonContent.next;
      checkClass(buttonContent.classSelect);
      setup();

    };

  } 
  else {
    choiceButton.style.display = "none";
  };
};

function checkClass(possibleClass) {
  // TODO: split this up; rename as needed
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

function setTheme(mode) {
  document.querySelectorAll("body, .content, .left-bar, .left-bar__button, .left-bar__text").forEach(el => el.classList.toggle("dark-mode", mode));
};

function toggleTheme() {
  isDark = !isDark;
  localStorage.setItem("darkMode", isDark);
  setTheme(isDark);
}

function main() {
  setTheme(isDark);
  
  lightBulb.onclick = toggleTheme;
  helpButton.onclick = fakeHelp;
  undoButton.onclick = undoScene;
  
  setup();
};

main();
