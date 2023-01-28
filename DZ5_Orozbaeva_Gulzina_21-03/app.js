const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

const convert = (elem, target, target2, isTrue) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isTrue===1) {
                target.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value / response.euro).toFixed(2)
            }else if (isTrue===2){
                target.value = (elem.value * response.usd).toFixed(2)
                target2.value = ((response.usd / response.euro) * elem.value).toFixed(2)
            }else if(isTrue===3){
                target2.value = (elem.value * response.euro).toFixed(2)
                target.value = ((response.euro / response.usd) * elem.value).toFixed(2)
            }
            elem.value === '' ? target.value = '' : null
            elem.value === '' ? target2.value = '' : null
        }
    })
}

convert(som, usd, euro,1)
convert(usd, som, euro, 2)
convert(euro, usd, som, 3)
