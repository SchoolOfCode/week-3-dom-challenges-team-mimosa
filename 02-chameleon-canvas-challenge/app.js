/*
Learning Objectives:
  1. Understand and utilize DOM input events.
  2. Manipulate the style properties of DOM elements.
  3. React to changes in input fields dynamically.

Brief:
You're presented with a canvas and a color picker. Your task is to implement the functionality to change the background color of the canvas based on the color selected in the color picker.

Expected Outcomes:
  1. When a color is selected using the color picker, the canvas should instantly reflect that color.
  2. The canvas should always display the current color selected in the color picker.
*/

// Place your plan and solution below!


//Plan
//select id "colorPicker"✅
//grab canvas id✅
//event listener for click
//create function that will reflect choosen color

const colorPicker = document.getElementById("colorPicker");

const canvas = document.getElementById("canvas");

function changeCanvas(){
canvas.style.backgroundColor = colorPicker.value

}
colorPicker.addEventListener("click", changeCanvas)


/*
let button  = getElementById("my button")
button.addEventListener("click", function()){
          alert ("Button clicked")
});

*/