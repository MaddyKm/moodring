//DEPENDENCIES
const red = document.getElementById("redRange");
const green = document.getElementById("greenRange");
const blue = document.getElementById("blueRange");
const colorButton = document.getElementById("colorButton");
//DATA

//FUNCTIONS
function redChange() {
  console.log(red.value);
}
function greenChange() {
  console.log(green.value);
}
function blueChange() {
  console.log(blue.value);
}

function setBackgroundColor() {
  console.log(red.value + ", " + green.value + ", " + blue.value);
  const redVal = red.value;
  const greenVal = green.value;
  const blueVal = blue.value;
  document.body.style.transition = "background 5s";
  document.body.style.background =
    "rgb(" + redVal + ", " + greenVal + ", " + blueVal + ")";
}
//USER INTERACTIONS

//INITIALIZATIONS
