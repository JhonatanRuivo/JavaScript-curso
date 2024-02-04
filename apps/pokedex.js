// ----------------------------------- APP DE LISTAR POKEMONS ATRAVÉS DE UM API ------------------------------------

let amount = document.getElementById('amount') // Este input para definir a quantidade de pokemons a ser buscada na API
amount.addEventListener('keyup', () => {
  getPokemons(amount.value)
})

function getPokemons(amount) {
  const myRequest = new Request(`https://pokeapi.co/api/v2/pokemon?limit=${amount}`) // Instanciando uma requisição para a API dos pokemons

  fetch(myRequest)
    .then((Response) => Response.json())
    .then((allPokemons) => {
      let pokemons = [] // Definindo um array onde iremos listar os pokemons

      allPokemons.results.map((val) => {
        // Percorrendo todos os pokemons e pegando so dados da resposta
        fetch(val.url) // Fazendo uma requisição dentro da url que temos na resposta da primeira requisição
          .then((Response) => Response.json())
          .then((pokemonSingle) => {
            const imgPokemon = pokemonSingle.sprites.front_default // Capturando a imagem do pokemon onde na API
            pokemons.push({ name: val.name, image: imgPokemon }) // Listando no array os pokemons em forma de objeto com name e image

            if (pokemons.length == amount) {
              // Verificando a quantidade de pokemons buscado na API
              console.log(pokemons) // Listando no console log apenas para vizualizar os pokemons
              var cards = document.querySelector('.cards') // Pegando o componente HTML que irá receber os cards dos pokemons
              cards.innerHTML = '' // Zerando os cards antes de preenche-lo
              pokemons.map((val) => {
                // Percorrendo pelos pokemons e adicionando aos cards cada name e image dos pokemons
                cards.innerHTML += `
            <div class="card">
              <img class="image-pokemon" src="${val.image}" alt="imagem do pokemon" />
              <strong class="name-pokemon">${val.name}</strong>
             </div>`
              })
            }
          })
      })
    })
    .catch(console.error)
}

getPokemons(6)

// Código HTML para que o APP pokedex funcione
{
  /* <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      HTML {
        background-color: black;
      }
      body {
        background-image: url('/apps/pokedex/bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.7;
        width: 100%;
        min-height: 100vh;
        height: auto;
        display: flex;
        justify-content: center;
        padding-top: 10px;
        background-attachment: fixed;
      }
      main {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        background: rgba(255, 255, 255, 0.1);
        text-align: center;
        border-radius: 16px;
        border: solid 1px white;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
      }
      h1 {
        width: 100%;
        border-radius: 16px 16px 0 0;
        color: white;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
      }
      .cards {
        padding-top: 16px;
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 28px;
        flex-wrap: wrap;
      }
      .card {
        background-color: white;
        width: 220px;
        height: 250px;
        border-radius: 16px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
      }
      #amount {
        background: rgba(255, 255, 255, 0.8);
        width: 80%;
        border-radius: 8px;
        padding: 8px;
        outline: none;
        border: solid 1px black;
      }
      img {
        width: 65%;
      }
    </style>
    <main>
      <h1>POKEDEX</h1>
      <input
        id="amount"
        type="number"
        min="1"
        max="100"
        placeholder="Insira a quantidade de pokemons de 1 a 100 que você deseja conhecê-los"
      />
      <div class="cards"></div>
    </main> */
}
