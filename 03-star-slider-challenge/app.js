/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. 
Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!


//Grab the sliding input (id: "starSlider")
const sliding_input = document.getElementById("starSlider");
//Grab the star element
const star_group = document.getElementById("stars");
const star_element = document.querySelector("#stars > span")

//create function to add or remove star elements based on slider value
function updateStars(){
  star_group.innerHTML = "";
  for (let i = 0;i < sliding_input.value;i++) {
    const clone = star_element.cloneNode(true);
    star_group.appendChild(clone);
  }
}

//Write eventlistener to detect changes
sliding_input.addEventListener("change",updateStars)


// function clearAndAddNewStars() {
//   star_element.remove
//   for (let i = 0; i < sliding_input.value; i++) {
//     star_clone.add
//   }
// }
