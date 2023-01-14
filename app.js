// 1-задание

const phoneInput = document.querySelector('#phoneInput');
const phoneCheck = document.querySelector('#phoneCheck');
const phoneResult = document.querySelector('.phoneResult');

const phoneRegExp = /^\+7\(\d{3}\) \d{3}-\d{2}-\d{2}$/

phoneCheck.addEventListener('click', () => {
    if (phoneRegExp.test(phoneInput.value)){
        phoneResult.innerText = 'OK'
        phoneResult.style.color = 'green'
    }else{
        phoneResult.innerText = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})

//2-задание
let move = 0
function moveBlock() {
    move = move + 4
    if (move > 300) return
        document.querySelector('.little_block').style.left = move + 'px';
        animation()

}
function animation() {
    setTimeout(moveBlock, 100)
}
animation()