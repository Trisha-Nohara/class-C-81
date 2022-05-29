canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(200, 200, 65, 0, 2*Math.PI);
ctx.stroke();

function my_mousedown(e) {
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("x: "+ mouse_x);
    console.log("y: "+ mouse_y);

    circle(mouse_x,mouse_y);
} 
canvas.addEventListener("mousedown",my_mousedown);
function circle(mouse_x,mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(mouse_x, mouse_y, 40, 0 , 2*Math.PI);
    ctx.stroke();
}