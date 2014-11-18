var obj = "This is a string object.";
length = obj.length; // 24

index = obj.indexOf('is'); // 2
index2 = obj.indexOf('is', index + 1); // 5
index3 = obj.indexOf('this'); // -1

console.log(obj.toUpperCase());
console.log(obj.toLowerCase());
