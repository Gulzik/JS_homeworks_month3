//первое задание
const block = document.querySelector('.little_block')
let positionX = 0;
let positionY = 0;
let positionX1 = 0;
let positionY1 = 0;

const move = () => {
    if( positionX1 === 0 && positionX <= 450){
        positionX++
        block.style.left = `${positionX}px`
        setTimeout(move, 1)
    }else if(positionX >= 450 && positionY <= 450) {
        positionY++
        block.style.top = `${positionY}px`
        setTimeout(move, 1)
    }else if (positionX > 0 && positionY >= 440) {
        positionX1 = 1;
        positionX -= 1;
        block.style.left = `${positionX}px`;
        setTimeout(move, 1);
    } else if (positionY1 === 0 && positionY > 0) {
        if (positionY === 1) positionX1 = 0;
        positionY -= 1;
        block.style.top = `${positionY}px`;
        setTimeout(move, 1);
    }
}
move()

//второе задание


const numbers = document.querySelector('span')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
let i = 0
one.addEventListener('click',function () {
    let number = setInterval(()=>{
        i++
        numbers.innerHTML = i;
    })
    two.addEventListener('click', function () {
        clearInterval(number)
    })
})