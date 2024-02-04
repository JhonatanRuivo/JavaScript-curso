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
