const add = function(num1, num2) {
	return num1+num2
};

const subtract = function(num1, num2) {
	return num1-num2
};

const sum = function(array) {
	return array.reduce((total, num) => num + total, 0);
};

const multiply = function(array) {
  return array.reduce((total, num) => num * total, 1);
};

const power = function(base, exponent) {
  return base **= exponent
};

const factorial = function(num) {
  let result = 1;
	for (i = 1; i <= num; i++){
    result *= i;
  }

  return result
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
