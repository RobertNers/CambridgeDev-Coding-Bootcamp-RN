const choiceOne = document.getElementById("choiceOne");
const choiceTwo = document.getElementById("choiceTwo");
const choiceThree = document.getElementById("choiceThree");

const playerClasses = [ "Witch", "Barbarian" ];

let currentScene = "start";
let playerClass = "Aimless Soul";

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
}

function setup() {
  const storyText = document.getElementById("storyText");
  storyText.textContent = story[currentScene].body;
  displayButton(choiceOne, currentScene, 0);
  displayButton(choiceTwo, currentScene, 1);
  displayButton(choiceThree, currentScene, 2);
}

setup()
