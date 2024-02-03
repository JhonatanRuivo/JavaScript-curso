// ----------------------------------- APP DE LISTAR POKEMONS ATRAVÉS DE UM API ------------------------------------

// const myRequest = new Request('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
const myRequest = new Request('https://pokeapi.co/api/v2/pokemon/1/')

fetch(myRequest)
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data)
    document.querySelector('.card > img').src = data.sprites.front_default
    document.querySelector('.card > strong').innerHTML = `${data.name}`
    //     document.querySelector('body').innerHTML = `<h1>FILME FAVORITO: ${nameMovie} </h1>`
  })
  .catch(console.error)
