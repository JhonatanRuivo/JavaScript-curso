// ------------------------------------------------- CLASSES -----------------------------------------------
class Car {                                             // Esta é uma classe onde podemos construir um objeto 
    constructor(wheelSize, color, model, power){        // através dos atributos passados com this onde este
        this.wheelSize = wheelSize                      // this declara como se fosse uma variável que será 
        this.color = color                              // usado somente dentro do escopo desta função.
        this.model = model                              
        this.power = power                              // Passamos os valores do atributo this nos parâmetros do constructor tendo mais
    }                                               // liberdade para a manipulação dos dados ao instanciar a classe construtora.
    
    speedUp() {                // Podemos utilizar funções dentro de classes que no entanto passa a serem chamadas de métodos
        return "acelerando"
    }
                                                       
}

const car1 = new Car("15", "black", "BMW", "300HP")    // Ao instanciar a classe carro atribuindo a constante car1 podemos passar os 
                                                       // parâmetros do objeto a ser construído.

console.log(`Meu carro é da cor ${car1.color} da marca ${car1.model} com rodas de aro ${car1.wheelSize} e uma potência de ${car1.power}!`)
// Utilizando interpolação de strings podemos ter esta frase como resultado 
// Meu carro é da cor black da marca BMW com rodas de aro 15 e uma potência de 300HP!

console.log(car1.speedUp()) // Chamamos o método speedUp dentro da class Car

class Pickup extends Car {          // Podemos extender os métodos e atributos de uma outra classe como da Car
    constructor(wheelSize, color, model, power){      // Para utilizar temos que passar os mesmos parâmetros dos atributos que queremos utilizar
        super(wheelSize,color, model, power)         // O super invoca o que queremos da classe pai que neste caso é a Car
    }
}

const pickup1 = new Pickup("17", "azul", "ranger", "270HP") // Instanciando com novos atributos importando da classe Car

alert(`${pickup1.speedUp()} a ford ${pickup1.model} da cor ${pickup1.color}`) // executando a mesma função da classe pai
// O resultado será acelerando a ford ranger da cor azul.