const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  let canvas = document.getElementById("game-canvas");
  canvas.getContext("2d");
});


console.log("Webpack is working!");
window.MovingObject = MovingObject;



let a = new Asteroid({ pos: [30, 30] });
a.draw(this);
console.log(a);
console.log(a instanceof MovingObject);