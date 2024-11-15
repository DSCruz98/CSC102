// Drake Cruz 11/8/24
function sound(src) {
  // add play function
  this.sound = document.createElement("audio"); //create audio
  this.sound.src = src; //define src
  this.play = function () {
    //music function
    this.sound.play(); //play sound
  };
}
// starts owl audio
function play() {
  mySound = new sound("owl.mp3");
  mySound.play();
}
// Just refreshes the page ending all sounds
function stop() {
  window.location.reload();
}
