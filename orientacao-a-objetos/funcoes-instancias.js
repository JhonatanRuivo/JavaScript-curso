// -------------------------------- FUNÇÕES E ESTÂNCIA ---------------------------------

function Shirt() {
  // Esta função funciona como uma classe construtora de objetos
  this.color = 'white' // O atributo this significa isso, ou seja o valor "white" atribui-se
  this.size = 'M' // a chave color do objeto
  this.sleeve = 'short'
}

const shirt = new Shirt() // Instanciamos a Shirt com o new e atribuímos esta função para shirt
console.log(shirt.color) // Neste momento poderemos ver valor padrão da chave color da função Shirt

const shirt1 = new Shirt() // Podemos atribuir a mesma função para múltiplas variáveis mas o objeto será o mesmo
console.log(shirt.color) // Veremos o mesmo valor da anterior porém é uma outra variável

shirt1.color = 'black' // Podemos alterar o valor da chave do objeto dentro da função instanciada pela variável shirt1
console.log(shirt1.color) // Veremos assim então o novo valor que será black.

function AlertUser() {
  this.name = 'John' // com o resto da função como exemplo pegando o próprio atributo name.
  this.printName = function () {
    // Podemos fazer com funções também dentro deste escopo podendo interagir
    alert(this.name)
  }

  this.printAge = function (age) {
    // Podemos passar parâmetros dentro da função como exemplo age
    alert(age)
  }
}

const alertUser = new AlertUser()
alertUser.printName() // Chamando a função e mostrando o valor de name da function instanciada
alertUser.printAge(22) // O resultado aparecerá o 22 como sendo o valor do parâmetro da function printAge

// Neste exemplo podemos interagir com outras funções já instanciadas como exemplo a shirt1 de exemplo anterior
alertUser.printAge(
  `john de 22 anos está vestindo uma camisa ${shirt.color} de tamanho ${shirt1.size}`
)

// OBS: Este era um jeito mais antigo de se utilizar functions para criar objetos, o javascript já possui classes com constructor para
// suprir esta demanda e então assim não sendo necessário mais criar objetos desta maneira, mas para case de estudo é sempre bom saber
// como as coisas eram e como evolui no passar do tempo.
