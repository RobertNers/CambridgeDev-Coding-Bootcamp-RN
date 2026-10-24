const gameOver = "Start over?";

const start = {
  body: `You wake up with no memory of where you are, or how you got here. You see nothing but pitch darkness all around you, and your breath quickens as you begin to panic. You blink a few times, but your vision does not return to you. You hear the blood rushing in your ears, your heart beating nearly out of your chest, and... A soft skittering sound not-too-far ahead of you. You sit up and kick your feet, pushing yourself backward until your back collides with a cool, hard wall.

         The skittering grows nearer.

         You squeeze your eyes shut and try to will this nightmare away, and feel the dread intensify when there is no change in the deep darkness consuming your vision, no change in the steady approach of the rhythmic skittering.

         Through your fear, you realize that <span class="coward">cowardice</span> will be your downfall, that you must do something. You look deep within yourself, and spot a faint glimmer of something. You reach out and grasp it.

         What do you feel?`,
  choices: [
    { body: "An eerie sense of calm", next: "magic", classSelect: "Witch" },
    { body: "Boiling rage", next: "muscle", classSelect: "Barbarian" },
  ]
};

const magic = {
  body: `As quickly as it began, the roaring in your ears vanishes. Your heart slows to a comfortable and relaxed pace. You take a deep breath and push yourself to your feet. The musty air of this pitch black space smells different to you now. Your keen nose can easily separate the scents of mud, rat droppings, moss, and... Rye? Rather than disgust, you feel a desire to know more. To gather the sources of these scents and find ways to make them useful.

         Your train of thought is interrupted as the skittering brings you back to reality. You still can't see it, but you hear it very clearly now: thousands of little legs propelling a grotesque creature in your general direction. Instead of fear, you feel some mild disdain. You hold out your hand, palm forward and fingers spread, and begin to chant something in a language you surely did not speak a few minutes ago. Sparks begin to form and waft listlessly through the air around your hand. The faint light they produce is enough to finally see some of your surroundings.

         Your eyes drop to the slick, segmented body of the giant millipede barrelling towards you. It's body is over a foot in girth, and extended past the reach of the nascent light. It screeches, seemingly enraged by the light you've produced. The floating sparks gain a sudden sense of urgency and rapidly coalesce into a something resembling a toothpick. The thin floating stake shoots at the insect so fast that your eyes could hardly follow it. It tears through the creature's armored head and zips through the length of its body.

         Each segment of the millipede's body bursts at the seams as the energy from your <span class="witch">spell</span> tears through it and dissipates. What had but a second ago been a serious existential threat is now a collection of stains and gunk strewn across the dark room.

         You take a second to dust yourself off then take stock of your surroundings. You whisper a few words and feel a slight tingling warmth in your skull as a viscous mote of light wetly separates itself from your head. You blink a few times, waiting for your eyes to adjust to the sudden bright light. You find yourself in what appears to be an alchemy lab. One that has been abandoned for decades, judging by the state of things. As you scan the room, your eyes land on a bookshelf which is as tall as the lab itself. Each shelf is packed full of tomes, and you feel pulled toward the knowledge they must contain. Your thirst for knowledge almost clouds the quiet alarm bells going off somewhere in the deep recesses of your mind.`,
  choices: [
    { body: "Approach the bookshelf", next: "endAcademic" },
    { body: "Search for an exit", next: "encounter" },
  ]
};

const muscle = {
  body: `You feel adrenaline dump into every fiber of your being. Your eye twitches and your teeth grind. You jump up to your feet and blindly charge towards the skittering sound. You grunt as your body collides with something hard. The creature screeches and you reciprocated before grabbing it by its head with both of your hands and smashing your forehead into what looked like a soft spot on the underside of the creature.

         You miscalculate, and your brash move seems to have hurt you more than the creature. You still can't see the grotesque thing, but you do feel it when it wraps its million disgusting, sharp little legs around your body and digs their points into your back. It begins to constrict, and this only serves to <span class="barbarian">enrage</span> you further. You wriggle until you're able to get a hold on one of the legs, then yank and push it. The snap you hear tells you that it wasn't supposed to bend that way. You repeat the process until the creature finally falters.

         Seizing the opportunity, you break free from the thing's grasp and tackle it before it can recover. All of your senses are heightened and despite the room being entirely devoid of light, you are able to coordinate well enough by relying on sound, scent, and touch. You straddle the creature and begin savaging it. You bring your fists down like hammers, and though whatever you're hitting is painfully hard, you do not hesitate. You beat the wriggling thing beneath you until its shell begins to crack, at which point you redouble your efforts.

         Time passes. The adrenaline dissipates. Your whole body feels like it is on fire, but the deep satisfaction you feel keeps you from complaining.

         You get up off the thing and begin walking, holding your hands out in front of you to prevent from walking face-first into a wall. You reach the edge and begin pawing your way around the perimeter. You pass tables with useless glassware, bookshelves, cabinets... You feel papers strewn seemingly everywhere. Frustration begins to grow until your hands finally find something useful!

         You twist the knob and to your delight, a small flame flickers to life inside the ornamental lantern that you find yourself holding. Must mean there were alchemists here once. You find the idea that anybody still inhabits this place unlikely, though, given the dilapidated state of things. You crane your neck around and spot the only door to the room.

         Soon, you're standing outside of what turned out to be an ancient tower. The wind carries the scent of fresh flowers as it rustles the grass of the green plane you're now standing on. Now that you're out of immediate danger, you mull over your options. You don't remember who you are whatsoever, but investigation has never been your strong suit. You've always been able to accept things as they are, you know that much. As such, you see two simple paths before you.`,
  choices: [
    { body: "Glory", next: "gladiator" },
    { body: "Adventure", next: "encounter" },
  ]
};

const gladiator = {
  body: `Weeks have passed since you left that place. The arcane dungeon in which you were reborn anew. You still do not know who you were before that day, but you're damn certain of who you are now.

         <span class=spell>"Oof!"</span>

         The armored mass of muscle that calls itself "Gregor the Unkillable" barrelled into you and knocked you off your feet. You'd hoped to be able to withstand the impact and redirect your opponent into--

         <span class=spell>Whump.</span>

         Gregor is determined to make you personally feel what that awful millipede no doubt felt when you first awoke. Every time he brought his fist down onto your head, the flimsy third-hand helmet you'd taken as a trophy from one of your previous victories creaked a bit louder. If you didn't act now, you'd certainly never achieve the glory you so desperately craved.

         Your nascent career as a gladiator is about to end just as quickly as it began. What do you do?`,
  choices: [
    { body: "Use your dagger!", next: "endGladiator" },
    { body: "Pocket sand!", next: "winGladiator" },
  ]
};

const encounter = {
  body: `<span class="wip">[WIP].</span>\n\nSomething something adventurer's guild, something something mysterious disappearances in the mountains close to springs, something something go slay a shahapet (serpent-like spirit thing which leads people astray)`,
  choices: [
    { body: `<span class=spell>"Payt'ir"</span>`, next: "winMagic", class: "Witch" },
    { body: "Roar and charge it!", next: "winMuscle", class: "Barbarian" },
    { body: "Retreat safely", next: "flee" },
  ]
};

const flee = {
  body: `Despite your earlier resolve, you are <span class="coward">not prepared</span> to face such an odd being head on. It still hasn't noticed you, so you gingerly take a step back. Then another, and a few more before you turn and beat a hasty retreat. You crouch down behind a large boulder and try to regain your composure.`,
  choices: [
    { body: "Catch your breath", next: "secondChance" },
  ]
};

const secondChance = {
  body: "You've had an opportunity to catch your breath and steel yourself to the challenge. You eye your target from behind the giant stone. It is unaware - now is your chance!",
  choices: [
    { body: `<span class=spell>"Payt'ir"</span>`, next: "winMagic", class: "Witch" },
    { body: "Roar and charge it!", next: "winMuscle", class: "Barbarian" },
    { body: "Retreat safely", next: "endCoward" },
  ]
};

const endAcademic = {
  body: `<span class="wip">[WIP].</span>\n\nThese volumes look like they haven't been touched for centuries. You notice that the space directly around this bookshelf seems particularly undisturbed; cracks in the stone floor are devoid of moss, and thick layers of dust coat every surface. Even the rat droppings which are presently nearly everywhere else in this room are completely absent on and around this bookshelf.

         Something something ominous knowledge, something something never see the light of day again.

         <span class="the-end">The End.</span>`,
  choices: [
    { body: gameOver, next: "start", classSelect: gameOver },
  ],
};

const endGladiator = {
  body: `You try and deflect the incoming blows with your left arm as you blindly grope for the dagger at your hip. You only take another two punches to the head before you're shoving the tip of your blade into Gregor's armpit, hoping to strike a gap in his armor.

         You feel your dagger sink into soft flesh, and the warm blood trickle down your forearm, leaving maroon droplets in the sand under you. You press the blade further and manage to push the hulking man off of you. You climb to your feet, your head buzzing from the adrenaline. Or maybe from the numerous dizzying blows it withstood. You move to wipe your brow with your forearm and are surprised to see it come back <span class="barbarian">bloodied</span>. Weren't you wearing a helmet, anyway? What happened to it?

         You never get to learn the answers to these questions. The last thing you hear is a thunderous roar as you are tackled once more to the ground. Your head hits a rock, and Gregor the Unkillable puts an end to your story.

         <span class="the-end">The End.</span>`,
  choices: [
    { body: gameOver, next: "start", classSelect: gameOver },
  ],
};

const winGladiator = {
  body: `<img class="sand" src=https://i.giphy.com/i2GADdaJIscPS.webp>

         <span class="the-end">You win.\nThe End.</span>`,
  choices: [
    { body: gameOver, next: "start", classSelect: gameOver },
  ],
};

const endCoward = {
  body: `You let out a shaky breath. You peek around the boulder for one last look at the spirit, and you pick <span class="coward">personal safety</span>. You carefully rise to your feet and sneak back the way you came, making sure to break line-of-sight as much as possible.

         You consider returning to town, either owning your failure or humbly asking for help. Instead, you cut your losses. You don't have any real ties to that place anyway, so you may as well find a different little village and figure something else out.

         Maybe you'll open a teahouse or something.

         <span class="the-end">The End.</span>`,
  choices: [
    { body: gameOver, next: "start", classSelect: gameOver },
  ],
};

const winMagic = {
  body: `<span class="wip">[WIP].</span>\n\nwon harry potter style,

         <span class="the-end">The End.</span>`,
  choices: [
    { body: gameOver, next: "start", classSelect: gameOver },
  ],
};

const winMuscle = {
  body: `<span class="wip">[WIP].</span>\n\nwon conan style

         <span class="the-end">The End.</span>`,
  choices: [
    { body: gameOver, next: "start", classSelect: gameOver },
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
