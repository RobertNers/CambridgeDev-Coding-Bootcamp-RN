const gameOver = "Start over?";

const start = {
  body: "This is the start of the story. Here you will pick your class.",
  choices: [
    { body: "Witch", next: "magic" },
    { body: "Barbarian", next: "muscle" },
  ]
};

const magic = {
  body: "You have chosen the path of magic.",
  choices: [
    { body: "Go study forever", next: "endAcademic" },
    { body: "Go adventuring", next: "encounter" },
  ]
};

const muscle = {
  body: "You have chosen the path of frenzied strength.",
  choices: [
    { body: "Glory", next: "gladiator" },
    { body: "Adventure", next: "encounter" },
  ]
};

const gladiator = {
  body: "Arena stuff.",
  choices: [
    { body: "Lose", next: "endGladiator" },
    { body: "Win", next: "winGladiator" },
  ]
};

const encounter = {
  body: "Dragon or something",
  choices: [
    { body: "win(magic)", next: "winMagic", class: "Witch" },
    { body: "win(muscle)", next: "winMuscle", class: "Barbarian" },
    { body: "run away", next: "flee" },
  ]
};

const flee = {
  body: "hide behind rock",
  choices: [
    { body: "catch breath", next: "secondChance" },
  ]
};

const secondChance = {
  body: "youre ready. you see an opening!",
  choices: [
    { body: "win(magic)", next: "winMagic", class: "Witch" },
    { body: "win(muscle)", next: "winMuscle", class: "Barbarian" },
    { body: "run away again", next: "endCoward" },
  ]
};

const endAcademic = {
  body: "study forever the end.",
  choices: [
    { body: gameOver, next: "start" },
  ],
};

const endGladiator = {
  body: "die gloriously the end",
  choices: [
    { body: gameOver, next: "start" },
  ],
};

const winGladiator = {
  body: "win gloriously the end",
  choices: [
    { body: gameOver, next: "start" },
  ],
};

const endCoward = {
  body: "laughing stock",
  choices: [
    { body: gameOver, next: "start" },
  ],
};

const winMagic = {
  body: "won harry potter style",
  choices: [
    { body: gameOver, next: "start" },
  ],
};

const winMuscle = {
  body: "won conan style",
  choices: [
    { body: gameOver, next: "start" },
  ],
};

const story = {
  start,
  magic,
  muscle,
  endAcademic,
  gladiator,
  winGladiator,
  endGladiator,
  encounter,
  flee,
  winMagic,
  winMuscle,
  secondChance,
  endCoward,
};
