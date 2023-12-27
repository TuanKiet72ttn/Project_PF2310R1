function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
   var red = getRandomHex();
   var green = getRandomHex();
   var blue = getRandomHex();
	 return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var radius = Math.floor(Math.random()* 80);
    var color = getRandomColor();
    var circle = new Circle(x, y, radius);
    var gradient = ctx.createLinearGradient(x - radius, y - radius, x + radius, y + radius);
    gradient.addColorStop(0, getRandomColor());
    gradient.addColorStop(1, getRandomColor());

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color
    ctx.fill();
}
