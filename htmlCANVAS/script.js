const canvas = document.querySelector('#drawing');
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;
const ctx = canvas.getContext('2d');


ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth=20;

let isDrawing = false;
let startX = 0;
let startY = 0;
let color = 0;



function draw(e) {
    if (!isDrawing)  return;
    console.log(e);


    ctx.strokeStyle=`hsl(${color},100%,60% )`;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [startX,startY]=[e.offsetX,e.offsetY]
    color++;

}


canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',(e) => 
    { 
        isDrawing=true;
        [startX,startY]=[e.offsetX,e.offsetY]

});
canvas.addEventListener('mouseout',() => { isDrawing=false;});
canvas.addEventListener('mouseup',() => { isDrawing=false;});

