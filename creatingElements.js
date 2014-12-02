(function() {

  var doc = document,
    el = doc.createElement("p"),
    content = doc.createTextNode(
      "<strong> This was dynamically created </strong>"
    ),
    pFoo = doc.getElementById("foo");

  el.appendChild(content);
  el.id = "bar";

  pFoo.parentNode.replaceChild(el, pFoo)


  // doc.body.appendChild(el);


}());
