/*
Create the view object*/

function View(canvas) {
  this.canvas = canvas
//add array to hold a circle - x,y coordinate from click on canvas
this.clicks = [];
}

//add click handler
View.prototype.handleClick = function (event) {
  console.log(this);
  var view = this;
  var x = event.offsetX;
  var y = event.offsetY;
  var pos = view.clicks.push({x: x, y: y, radius: 100});
  console.log("Add a circle at", x, ", ", y);
};



View.prototype.updateDisplay  = function () {

  var view = this;
  var context = view.canvas.getContext("2d");
  context.clearRect(0, 0, view.canvas.width, view.canvas.height);
  context.fillStyle = 'black';
  context.fillRect(0, 0, view.canvas.width, view.canvas.height);

  view.drawCircle(context, 150, 150, 100, 1);
};

View.prototype.drawCircle = function (context, x, y, radius, alpha ) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2*Math.PI);
  context.fillStyle = "rgba(" + x%256 + ", " + y%256 + "," + (x * y % 256) + "," + alpha +")";
  context.fill();
};
