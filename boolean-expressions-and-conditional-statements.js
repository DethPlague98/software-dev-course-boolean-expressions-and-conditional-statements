/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
const hasSupplies = false;
const hasGuide = true;

console.log("You see two dark paths: one leads into the forest and you see a sword in the distance, the other disappears under a lake and you can see it come back on the other side.");
const choice2 = readline.question("Do you choose to go through the 'forest' or throught the 'lake'?")

if (choice2 === 'lake' && hasGuide){
  console.log("The guide waves you forward through the lake. The waves part around you, revealing the path that continues and you navigate forward.")
} else if (choice2 === 'lake' && !hasGuide) {
  console.log("The lake's water parts around you as you step towards the path... it seems you won't need to get wet after all as you continue.")
} else if (choice2 === 'forest' && hasGuide) {
  console.log("The guide's hand finds your shoulder and steers you towards the lake's path...as the water parts around you and the path you look back and see a set of red eyes staring back at you from the forest's path.")
} else if (choice2 === 'forest' && hasSupplies && !hasGuide){
  console.log("You start on the forest's path, and after some time a wild pack of dogs attack you on the path. You quickly throw the meat in your supplies aside and the dogs converge on it as you run quickly down the path towards the sword, hoping to be able to defend yourself.")
} else {
  console.log("You start down the forest path, and after an hour of walking you realize that you are not any closer to the sword than when you started. Without supplies you eventually succumb to the forest, and as you begin to lose consciousness you see a monkey with red eyes and a knife standing over you as all fades to black.")
}