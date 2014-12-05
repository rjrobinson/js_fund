(function() {

  eventUtility.addEvent(document, "click", function(evt) {
    var target = eventUtility.getTarget(evt),
      classData = target.getAttribute("data-body-class")

    if (classData) {
      eventUtility.preventDefault(evt);
      document.body.className = classData;
    }
  });

  eventUtility.addEvent(document, "mouseover", function(evt) {
    var target = eventUtility.getTarget(evt),
      classData = target.getAttribute("data-body-class")

    if (classData) {
      eventUtility.preventDefault(evt);
      document.body.className = classData;
    }
  });



  // var buttons = document.getElementsByTagName('a');
  //
  // var buttonClick = function(evt) {
  //   var target = eventUtility.getTarget(evt),
  //     className = target.innerHTML.toLowerCase();
  //
  //   eventUtility.preventDefault(evt);
  //
  //   document.body.className = className;
  // };
  //
  // for (var i = 0, len = buttons.length; i < len; i++) {
  //   eventUtility.addEvent(buttons[i], "click", buttonClick);
  //   //removeEvent(buttons[i], "click", buttonClick);
  //
  // }

}());
