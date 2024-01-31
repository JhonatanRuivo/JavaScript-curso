// ------------------------------------------- APP LISTA DO SUPERMERCADO ---------------------------------------------
const items = [] // Criamos um array vazio onde adicionaremos os produtos que serão preenchidos no formulário

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  // Pegamos o evento do submit default do form e
  e.preventDefault() // tiramos a sua funcionalidade padrão
  let inputName = document.querySelector('#input-name') // O campo de colocar o nome do produto no formulário
  let inputPrice = document.querySelector('#input-price') // O campo de colocar o preço do produto no formulário

  items.push({
    // Usamos o método push para adicionar no array items os valores recebidos dos inputs do formulário
    name: inputName.value, // Transformamos os dados em um objeto
    price: inputPrice.value,
  })

  let listItems = document.querySelector('.list-items') // Adicionamos a uma variável a tag <ul> do html
  let sumTotalItems = 0
  listItems.innerHTML = '' // A cada submit atribuímos vazio para colocar um novo item na lista
  items.map((val) => {
    // Fazemos um map para percorrer todos os items do array items
    sumTotalItems += parseInt(val.price) // Somamos os valores dos preços dos items
    listItems.innerHTML += `<li class="item">  
    <p class="item-name"> - ${val.name} </p>
    <strong class="item-price">R$ ${val.price}</strong>
  </li>` // Incrementamos no html o conteúdo para formar a lista com nome do item e preço
  })

  sumTotalItems = sumTotalItems.toFixed(2)
  inputName.value = '' // Zeramos os valores nos inputs para melhor experiência do usuário
  inputPrice.value = ''

  let totalValueItems = document.querySelector('.total-value-items') // Neste pegaremos a tag que receberá a soma dos preços
  totalValueItems.innerHTML = `R$: ${sumTotalItems}`
})

// CÓDIGO HTML DESTE TRECHO DE JAVASCRIPT
{
  /* <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        height: 100vh;
        width: 100vw;
        background: linear-gradient(
          90deg,
          rgba(174, 195, 176, 1) 25%,
          rgba(89, 131, 146, 1) 100%
        );
        color: #01161e;
      }
      header {
        background-color: #01161e;
        color: #eff6e0;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
      }
      main {
        padding: 40px;
      }
      .form-add-item {
        display: flex;
        gap: 40px;
      }
      .input-item {
        background: rgba(255, 255, 255, 0.55);
        height: 40px;
        width: 100%;
        padding: 8px;
        border: none;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        color: #01161e;
      }
      .add-button {
        padding: 8px 24px;
        border-radius: 8px;
        border: none;
        background-color: #124559;
        color: #eff6e0;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
      }
      .list-items {
        margin-top: 40px;
        width: 100%;
        height: auto;
        font-size: 22px;
      }
      .item {
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        border-bottom: solid 1px #01161e;
      }
      .item-price {
        background-color: #eff6e0;
        padding: 8px 24px;
        border-radius: 24px;
      }
      .total {
        margin-top: 40px;
        font-size: 22px;
        display: flex;
        gap: 40px;
        align-items: center;
      }
    </style>
    <header>
      <h1>APP LISTA DO SUPERMERCADO</h1>
    </header>
    <main>
      <form class="form-add-item" action="">
        <input
          class="input-item"
          id="input-name"
          type="text"
          placeholder="Nome do item"
        />
        <input
          class="input-item"
          id="input-price"
          type="number"
          step="0.01"
          min="0.99"
          placeholder="R$ - Valor"
        />
        <button class="add-button" type="submit">Adicionar</button>
      </form>

      <ul class="list-items">
        <!-- <li class="item">
          <p class="item-name"></p>
          <strong class="item-price"></strong>
        </li> -->
      </ul>
      <div class="total">
        <h3>Total:</h3>
        <strong class="total-value-items">R$ 00,00</strong>
      </div>
    </main> */
}
