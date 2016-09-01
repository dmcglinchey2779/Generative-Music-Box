//add Controller musicbox.js

window.onload = function () {

  var canvas = document.getElementById('canvas');
  var view = new View(canvas);

  view.updateDisplay();
 canvas.addEventListener("click", view.handleClick.bind(view), false);

}
