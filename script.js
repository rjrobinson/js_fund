(function() {

  var divFoo = document.getElementById("foo"),
    style = divFoo.style

  divFoo.classList.add("css-class").add('css-class2')

  divFoo.classList.remove('css-class')


  // alert(style.color);

}());
