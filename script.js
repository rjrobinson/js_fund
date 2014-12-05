(function() {
  var buttons = document.getElementsByTagName('a');

  var buttonClick = function(evt) {
    var target = eventUtility.getTarget(evt),
      className = target.innerHTML.toLowerCase();

    eventUtility.preventDefault(evt);

    document.body.className = className;
  };

  for (var i = 0, len = buttons.length; i < len; i++) {
    eventUtility.addEvent(buttons[i], "click", buttonClick);
    //removeEvent(buttons[i], "click", buttonClick);

  }

}());
