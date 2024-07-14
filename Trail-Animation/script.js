const cul1 = document.querySelector('.cul1');
const cul2 = document.querySelector('.cul2');
const cul3 = document.querySelector('.cul3');
const cul4 = document.querySelector('.cul4');
const body = document.querySelector('body');

function stars(e) {
    console.log(e.offsetX,e.offsetY);

    let xpos = e.offsetX;
    let ypos = e.offsetY;
    const stars = document.createElement('span')
    stars.style.left=xpos+'px';
    stars.style.top=ypos+'px';
    stars.className='stars';

    const size = Math.random()*100;
    stars.style.width= size +'px';
    stars.style.height= size +'px';

    cul1.appendChild(stars);
    setTimeout(() => {
        stars.remove();
    }, 3000);
}
function star(e) {
    console.log(e.offsetX,e.offsetY);

    let xpos = e.offsetX;
    let ypos = e.offsetY;
    const star = document.createElement('span')
    star.style.left=xpos+'px';
    star.style.top=ypos+'px';
    star.className='star';
    const size = Math.random()*100;
    star.style.width= size +'px';
    star.style.height= size +'px';
    cul2.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 3000);
    
}
function sparkles(e) {
    console.log(e.offsetX,e.offsetY);

    let xpos = e.offsetX;
    let ypos = e.offsetY;
    const sparkles = document.createElement('span')
    sparkles.style.left=xpos+'px';
    sparkles.style.top=ypos+'px';
    sparkles.className='sparkles';
    const size = Math.random()*100;
    sparkles.style.width= size +'px';
    sparkles.style.height= size +'px';

    cul3.appendChild(sparkles);
    setTimeout(() => {
        sparkles.remove();
    }, 3000); 
}
function heart(e) {
    console.log(e.offsetX,e.offsetY);

    let xpos = e.offsetX;
    let ypos = e.offsetY;
    const heart = document.createElement('span')
    // heart.style.left=50+'%';
    // heart.style.top=50+'%';
    heart.style.left+=xpos+'px';
    heart.style.top+=ypos+'px';
    heart.className='heart';   
    const size = Math.random()*50;
    heart.style.width= size +'px';
    heart.style.height= size +'px';

    cul4.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

cul1.addEventListener('mousemove',stars)
cul2.addEventListener('mousemove',star)
cul3.addEventListener('mousemove',sparkles)
cul4.addEventListener('mousemove',heart)
// body.addEventListener('mousemove',heart)

