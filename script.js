var foo = doSomething(2); // 48
var bar = doSomething(3); // 56

function doSomething(paramOne) {
  paramOne = paramOne + 3;
  paramOne = paramOne + 1;
  paramOne = paramOne * 8;

  return paramOne;
};

alert(foo);
alert(bar);
