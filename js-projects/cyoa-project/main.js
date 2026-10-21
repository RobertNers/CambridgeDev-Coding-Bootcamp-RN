let storyText = document.getElementById("storyText");
let choiceOne = document.getElementById("choiceOne");
let choiceTwo = document.getElementById("choiceTwo");
let choiceThree = document.getElementById("choiceThree");

storyText.textContent = story.start.body;
choiceOne.style.display = "block";
choiceTwo.style.display = "block";
choiceOne.textContent = story.start.choices[0].body;
choiceTwo.textContent = story.start.choices[1].body;
