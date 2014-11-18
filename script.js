var globalVar = 'This is a global variable.';

var globalFunction = function(paramOne) {
  var localVar = 'This is a local variable.';

  var localFunction = function() {
    var superLocalVar = 'Hello World!';
    alert(superLocalVar);
    alert(localVar);
    alert(paramOne);
    alert(globalVar);
  };

  localFunction();
};

globalFunction(2);
