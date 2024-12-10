/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on images.
  3. Manipulate image attributes dynamically based on user interactions and randomness.

Brief:
You're presented with two closed doors. Your task is to choose one to reveal what's behind both. Will you find Loz behind the door you chose or the other one? The outcome should be random.

Expected Outcomes:
  1. Initially, both doors are closed.
  2. When one door is clicked, both doors should open, revealing either an empty room or Loz behind them.
*/

// Place your plan and solution below!

//grab door 1 and door 2

const door_group = document.querySelector(".doors");
let door_1 = door_group.children[0];
let door_2 = door_group.children[1];

//build a random number function so outcome will be random
function randomNumber() {
  const generator = Math.floor(Math.random()*2 + 1);
  return generator  ;
}

// build a function to open the doors to a randomised outcome between two photos 
function openResults(door_1,door_2) {
  if (randomNumber() == 1){
    door_1.src= "door-open-empty.png";
    door_2.src= "door-open-loz.png";
  } else {
    door_1.src= "door-open-loz.png";
    door_2.src= "door-open-empty.png";
  }
};

// build two event listeners to respond to a click on either door.
door_1.addEventListener("click",() => openResults(door_1,door_2));
door_2.addEventListener("click",() => openResults(door_1,door_2));
