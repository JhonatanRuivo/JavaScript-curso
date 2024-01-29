// ---------------------------------------  AJAX    ------------------------------------------------------------
// Ajax é um modelo de requisição que os apps web utilizam para realizar atualizações na interface do usuário sem
// ter que realizar o carregamento da página inteira novamente, tornando assim a navegação pela aplicação mais rápida
// e fluída para o usuário.

// Requisição com fetch
//O FETCH inicia um processo de busca retornando uma promessa que é cumprida assim que a resposta estiver disponível
fetch('https://jsonplaceholder.typicode.com/todos/1') // Colocamos a url da busca da requisição
  .then((Response) => Response.json()) // A promessa é resolvida para o objeto Response
  .then((json) => console.log(json))

// Podemos também enviar dados pela requisição fetch com o método post
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // Definimos o método post para enviar dados
  body: JSON.stringify({
    title: 'foo',
    body: 'bar', // Pelo BODY passamos o conteúdo
    userId: 1,
  }),
  headers: {
    // Qualquer cabeçalho que queira adicionar a requisição acompanhado de um objeto
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((Response) => Response.json()) // A promessa é resolvida para o objeto Response
  .then((json) => console.log(json))

// Método PUT para atualizar algum dado pela requisição
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))

// Método PATCH
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'changed',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))

// Método DELETE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
