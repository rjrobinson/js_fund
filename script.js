(function() {

  var doc = document,
    el = doc.createElement("p"),
    content = doc.createTextNode(
      "<strong> This was dynamically created </strong>"
    ),
    pFoo = doc.getElementById("foo");

  el.innerHTML = "<strong> This has been STRONG </strong>";
  el.id = "bar";

  pFoo.parentNode.replaceChild(el, pFoo)


  // doc.body.appendChild(el);


}());
