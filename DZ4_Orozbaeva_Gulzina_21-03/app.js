// Домашнее задание:
//     повторить все что было на уроке
// сделать такой же запрос как на уроке но на массив из объектов с людьми
// и вывести это всё на страницу через ДОМ элементы либо же в консоль
// как было показано на уроке

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "people.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response)
        data.forEach(people => {
            const div = document.createElement('div')
            const span = document.createElement('span')
            div.innerHTML = people.name
            span.innerHTML = people.age
            document.body.append(div)
            document.body.append(span)
        })
    })
})





// get
//post
// delete
//patch



//////////////////////////
// let i = 0
// function move () {
//     i= i+5
//     console.log(i)
//     if( i < 100){
//         move ()
//     }
// }
// move ()
//
// const breakkk = () => {
//     console.log("222")
// }
// let go = function(){
//     console.log("333")
// }
//  go()

// let goooo = function () {
//     console.log("333846539562")
//
// }
// setTimeout(goooo,2000)

// setTimeout(()=>{
//     console.log("hhhhhhhhhh")
// },2000)

// function (go){
//
// }
// let j = 0
// const like = setInterval(()=>{
//     j++
//     console.log(j)
//     if( j === 5){
//         clearInterval(like)
//     }
// },1000)

// let a = 0
// let g=0
// a++
// a=a+5
// gg++
// console.log(a)
// console.log(gg)

// let llll = 0
// function read () {
//     llll++
//     console.log(llll)
//     function mmm(){
//         llll++
//         console.log(llll)
//     }
//     mmm()
// }
// read()
// console.log(llll)
