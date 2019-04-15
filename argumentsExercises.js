function sum() {
  let sum = 0;
  let args = Array.from(arguments);
  args.forEach((el) => sum += el);
  return sum;
}

function sum1(...args) {
  let sum = 0;
  args.forEach((el) => sum += el);
  return sum;
}

Function.prototype.myBind = function(context, ...bindTimeArgs) {
  return (...callTimeArgs) => 
    this.apply(context, bindTimeArgs.concat(callTimeArgs));
};


function curriedSum(numArgs) {
  let numbers = [];
  let _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {

      let sum = 0;
      for (let i = 0 ; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  let that = this;
  let args = [];
  let _inner = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _inner;
    }
  }
  return _inner;
}


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
// f1 = f1(6); // = 30
console.log(f1(6));