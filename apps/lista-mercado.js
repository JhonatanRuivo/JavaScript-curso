// ------------------------------------------- APP LISTA DO SUPERMERCADO ---------------------------------------------
const items = []

const form  = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputName = document.querySelector('#input-name')
    let inputPrice = document.querySelector('#input-price')
    
    items.push({
        name: inputName.value,
        price: inputPrice.value
    })
    
    const listItems = document.querySelector('item')
    listItems.innerHTML = ""
    items.map((val)=> {
         listItems.innerHTML += `<p class="item-name" >${val.name}</p><strong class="item-price">R$ ${val.price}</strong>`
    })
    
    inputName.value = ""
    inputPrice.value = ""
})

