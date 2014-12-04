(function() {

  var divFoo = document.getElementById("foo"),
    style = divFoo.style;


  divFoo.className = 'css-class css-class2';

  var color = window.getComputedStyle(divFoo, null).getPropertyValue("color");

  alert(color);

  // alert(style.color);

}());
