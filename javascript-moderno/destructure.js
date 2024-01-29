// -------------------------------------- DESESTRUTURAÇÃO -----------------------------------------------

const users = [
  {
    name: 'John',
    age: 27,
  },
  {
    name: 'Leo',
    age: 33,
  },
  {
    name: 'Leh',
    age: 22,
  },
]

console.log(users) // Aqui desestruturamos pegando os três objetos users.
console.log(users[0]) // Aqui desestruturamos pegando o primeiro objeto users no index 0 do array.
console.log(users[0].name) // Aqui desestruturamos pegando o nome do primeiro objeto, o resultado é John.
console.log(users[1].age) // Aqui desestruturamos pegando a idade do segundo objeto, o resultado é 33.

// E assim podemos manipular e desestruturar os dados de array´s e objetos.
