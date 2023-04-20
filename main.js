canvas = 
document.getElementById("mycan");
ctx = canvas.getContext("2d");

ctx.beginPath(); //we are going to draw something
ctx.strokeStyle = "violet";
ctx.lineWidth = 5;
ctx.rect(150, 150, 500, 300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 7;
ctx.arc(250, 260, 60, 0, 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 7;
ctx.arc(400, 260, 60, 0, 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 7;
ctx.arc(550, 260, 60, 0, 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 7;
ctx.arc(325, 330, 60, 0, 2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 7;
ctx.arc(475, 330, 60, 0, 2 * Math.PI );
ctx.stroke();