(function() {
  var buttons = document.getElementsByTagName('a');

  var buttonClick = function(evt) {
    alert('this works');
  };

  for (var i = 0, len = buttons.length; i < len; i++) {
    addEvent(buttons[i], "click", buttonClick);
  }

}());
