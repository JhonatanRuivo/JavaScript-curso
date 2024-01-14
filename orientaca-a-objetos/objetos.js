// -------------------------------------------   OBJECTS ----------------------------------------
const object = {       // Um exemplo de objeto
    "name": "John",    // Dentro do objeto temos uma chave => "name" e valor => "John"
    "age": 27,
    "lastName": "Doe"
}

console.log(object.name); // Exemplo de como percorrer um objeto e pegar o valor da chave selecionada

const users = [{       // Podemos ter objetos dentro de array
    "name": "John",
    "lastName": "Doe",
    "age": 27,
},
{
    "name": "Paulo",
    "lastName": "Oliver",
    "age": 27,
}]

console.log(users[0].age); // Ao pesquisar um valor de objetos dentro de array temos que selecionar a posição
                           // do array antes de indicar a chave.