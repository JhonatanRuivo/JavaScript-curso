// -------------------------------- FUNÇÕES E ESTÂNCIA ---------------------------------

function Shirt() {          // Esta função funciona como uma classe construtora de objetos
    this.color = "white"   // O atributo this significa isso, ou seja o valor "white" atribui-se 
    this.size = "M"         // a chave color do objeto
    this.sleeve = "short"
}

const shirt = new Shirt()   // Instanciamos a Shirt com o new e atribuímos esta função para shirt
console.log(shirt.color)    // Neste momento poderemos ver valor padrão da chave color da função Shirt

const shirt1 = new Shirt() // Podemos atribuir a mesma função para múltiplas variáveis mas o objeto será o mesmo
console.log(shirt.color)   // Veremos o mesmo valor da anterior porém é uma outra variável

shirt1.color = "black"     // Podemos alterar o valor da chave do objeto dentro da função instanciada pela variável shirt1
console.log(shirt1.color)  // Veremos assim então o novo valor que será black.