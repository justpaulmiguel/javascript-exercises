const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num1) {
  return num1.reduce((total, curr)=> total+=curr, 0);
};

const multiply = function(num1) {
  return num1.reduce((total, curr)=> total*=curr, 1);
};

const power = function(num1, num2) {
  return Math.pow(num1, num2)
};

const factorial = function(num1) {
  let num2 = 1;
  for(i = 1; i <= num1; i++){
    num2*=i;
  }
  return num2;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
