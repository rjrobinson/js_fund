(function() {

  var buttons = document.getElementsByTagName("button");

  var buttonClick = function() {
    var className = this.innerHTML.toLowerCase();

    document.body.className = className;
  };

  for (var i = 0, len = buttons.length; i < len; i++) {
    // buttons[i].onclick = function() {
    //   var className = this.innerHTML.toLowerCase();
    //
    //   document.body.className = className;
    // };


    buttons[i].addEventListener('click', buttonClick, false)
    buttons[i].addEventListener('click', function() {
      alert('hi');
    }, false)

    buttons[i].removeEventListener('click', buttonClick, false)
    buttons[i].removeEventListener('click', function() {
      alert('hi');
    });
  };

}()); // main function
