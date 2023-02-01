//Первое задание

const btn = document.querySelector('.btn')
const btn_prev = document.querySelector('.btn_prev')
const block = document.querySelector('.block')
let num = 0
btn.onclick = () => {
    if (num >= 0) {
        num++
        fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
            .then(response => response.json())
            .then(todoItem => {
                console.log(todoItem)
                block.innerHTML = `
                <div class ="card">
                <h3>${todoItem.title}</h3>
                <h3>${todoItem.completed}</h3>
                <h3>${todoItem.id}</h3>
                </div>
                `
            })
    } else if (num <= 0) {
        btn_prev.onclick = () => {
            num--
        }
    }
}


//Bторое задание

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then((json) => {
        json.forEach(item => console.log(item))
    })





// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(postsItem => {
//         console.log(postsItem)
//     })


