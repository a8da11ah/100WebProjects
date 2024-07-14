const cul1 = document.querySelector('.cul1');
const cul2 = document.querySelector('.cul2');
const cul3 = document.querySelector('.cul3');
const cul4 = document.querySelector('.cul4');
const body = document.querySelector('body');
let isStars = false;
let isStar = false;
let isSparkles = false;
let isHeart = false;

function trail(e) {
    console.log(e.offsetX,e.offsetY);

    let xpos = e.offsetX;
    let ypos = e.offsetY;
    const trail = document.createElement('span')
    trail.style.left=xpos+'px';
    trail.style.top=ypos+'px';
    const size = Math.random()*100;
    trail.style.width= size +'px';
    trail.style.height= size +'px';

    switch (true) {
        case isStars:
            trail.className='stars';   
            cul1.appendChild(trail);


            break;

        case isStar:
            trail.className='star';   
            cul2.appendChild(trail);
         

            break;

        case isSparkles:
            trail.className='sparkles'; 
            cul3.appendChild(trail);
           

            break;
        default:
            trail.className='heart';            
            break;
    }

    setTimeout(() => {
        trail.remove();
    }, 3000);
}


cul1.addEventListener('mousemove',()=>{isStars=true; isStar=false;isSparkles=false;isHeart=false})
cul2.addEventListener('mousemove',()=>{isStars=false; isStar=true;isSparkles=false;isHeart=false})
cul3.addEventListener('mousemove',()=>{isStars=false; isStar=false;isSparkles=true;isHeart=false})
cul4.addEventListener('mousemove',()=>{isStars=false; isStar=false;isSparkles=false;isHeart=true})
body.addEventListener('mousemove',trail)


