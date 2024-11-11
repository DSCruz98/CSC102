// Drake Cruz 11/10/24
// global variables
let change = 1;
let intervalID = 0;
// start button will change image and begin fall
function intervalStart() {
  document.getElementById("stopButton").disabled = false;
  document.getElementById("startButton").disabled = true;
  document.getElementById("imgMeme").src = "falling.gif";
  let image = document.getElementById("imgMeme");
  intervalID = setInterval(function () {
    image.style.left = change + "px";
    image.style.top = change + "px";

    change += 1; // change = change + 1;

    document.getElementById("yCoord").innerHTML = " y = " + image.style.top;
  }, 50); // 50 ms delay makes a smooth fall
  // changes title and question to add fun
  document.getElementById("Initiate1").innerHTML = "He is falling!";
  document.getElementById("Initiate2").innerHTML = "How far will he go?!";
}
// stop will change to still image and pause movement but not reset
function intervalStop() {
  document.getElementById("stopButton").disabled = true;
  document.getElementById("startButton").disabled = false;
  document.getElementById("imgMeme").src = "falling.jfif";
  clearInterval(intervalID);
}
