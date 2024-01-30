// ---------------------------------- CONSUMINDO UMA LISTA DE FILMES FETCH DE UMA API -------------------------------

const myList = document.querySelector('.list-repos') // Pegamos nosso element ul no html e adicionamos
// nesta const myList.
const myRequest = new Request(
  `https://api.github.com/users/jhonatanruivo/repos`
) // Fazemos esta requisição na api do github

fetch(myRequest)
  .then((Response) => Response.json())
  .then((data) => {
    // Com a resposta em json manipulamos os dados para criar uma lista
    for (var i = 0; i < data.length; i++) {
      // através de um for para pegar todos os repositórios da api
      const repos = data[i]

      const lisItem = document.createElement('li') // Incrementamos a variável de tag li dentro de myList
      lisItem.appendChild(document.createElement('strong')).textContent = repos.name // Incrementamos o nome do repositório dentro de uma
      // tag strong na variável listItem
      myList.appendChild(lisItem) // Por fim incrementamos a listItem na nossa ul myList
    }
  })
  .catch(console.error) // Caso ocorra algum erro veremos no console.

// HTML DESTE CÓDIGO
// <!DOCTYPE html>
// <html lang="pt-br">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Curso javascript</title>

//         <script src="/ajax/lista-meu-github.js" defer ></script>
//     </head>

//     <body>
//         <h1>Meus Repositórios do Github</h1>
//         <ul class="list-repos"></ul>
//     </body>
// </html>
