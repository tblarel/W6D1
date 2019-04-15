
Function.prototype.inherits = function(SuperClass) {
  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;
}


function MovingObject() {}

MovingObject.prototype.test = function() {
  console.log(`this is a test`);
}


function Ship() { 
  MovingObject.call(this);
};

Ship.inherits(MovingObject);

Ship.prototype.test2 = function(){
  console.log("this is a ship function");
}

let s = new Ship();
s.test();


function Asteroid() { }
let m = new MovingObject();
// m.test2();


Asteroid.inherits(MovingObject);
let a = new Asteroid();
a.test();
// a.test2();