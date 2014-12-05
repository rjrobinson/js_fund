function toThePower(num, exp) {
  var value = num;
  for (var i = 0; i < exp; i++) {
    value = value * num;
  }
  return value;
}

var answer = toThePower(2, 3)

alert(answer)
