function doSomething(paramOne, paramTwo, fn) {
  paramOne = paramOne + 3;
  paramOne = paramOne + 1;
  paramOne = paramOne * 8;

  return fn(paramOne, paramTwo);
};

function sum(paramOne, paramTwo) {
  return paramOne + paramTwo;
}

function product(paramOne, paramTwo) {
  return paramOne * paramTwo;
}

var foo = doSomething(2, 2, sum); // 96
var bar = doSomething(3, 2, product); // 112


alert(foo);
alert(bar);
