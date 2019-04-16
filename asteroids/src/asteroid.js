const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Asteroid(args) {


  options = { "color": "#FF6347", 
              "radius": 10, 
              "vel": Util.randomVec(10),
              "pos": args.pos 
            };

  MovingObject.constructor.call(options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;