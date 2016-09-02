//add Controller musicbox.js

window.onload = function () {

  var canvas = document.getElementById('canvas');
  var view = new View(canvas);

 canvas.addEventListener("click", view.handleClick.bind(view), false);

 setInterval(view.updateDisplay.bind(view), view.frameRate);

}
