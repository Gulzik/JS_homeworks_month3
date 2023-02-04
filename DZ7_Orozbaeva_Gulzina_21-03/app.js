const main = document.querySelector('.main .container')
function getData () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((post) => {
                main.innerHTML += `                          
                    <div class="part_1">
                        <div class="card_first">
                            <img src="https://ae04.alicdn.com/kf/HTB1hYfxo6nD8KJjSspbq6zbEXXa7/NICOLESHENTING.jpg_640x640.jpg"/>                       
                             <div class="text">
                                 <h2>${post.title}</h2>
                                 <p>${post.body}</p>  
                             </div>                  
                        </div>                                                                                                                          
                    </div> 
                    <div class="part_2">
                        <div class="card_second">                                
                            <img src="https://lh3.googleusercontent.com/awpPQVdXEEb71nLjKWZvFMKejEFXTzkPG6puIll6pUMlU88YI2jf-L3txbD2HOesp7OUqgVa7m50bL5VI52tHz2riLc5dOGF6hn-uc2wyPl8NA"/>                      
                            <div class="text_1">
                                 <h2>${post.title}</h2>
                                 <p>${post.body}</p>  
                             </div>                      
                        </div>                   
                        <div class="card_third">
                            <img src="https://www.shutterstock.com/image-vector/just-do-it-beautiful-greeting-260nw-779736526.jpg"/>                  
                            <div class="text_1">
                                 <h2>${post.title}</h2>
                                 <p>${post.body}</p>  
                             </div>
                        </div>   
                    </div>                                                                                                                                                                                                       
                `
            })
        })
}
getData()