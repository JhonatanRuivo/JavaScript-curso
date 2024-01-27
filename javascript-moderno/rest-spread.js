// --------------------------------------- REST E SPREAD -------------------------------------------
// SPREAD

const names = [
    {
        'name': 'Lucas',
    },
    {
        'name': 'João',
    },
    {
        'name': 'Maria',
    },
    {
        'name': 'Pedro',
    }
]

const users = [...names,{ // Com este spread que tem esses 3 pontinhos conseguimos atribuir a constante users todos os 
                          // objetos da constante nomes antes do objeto Marcos, assim conseguimos juntar os objetos sem
                          // ter que ficar reescrevendo códigos.   
    'name': 'Marcos'
}]

console.log(users);       // O resultado será os objetos de names antes do objete Marcos dentro do array da constante users.

// REST

const showNumbers = (...numbers)=> {  // Com o REST podemos passar qualquer dado como parâmetro de maneira infinita sem ter 
    console.log(numbers)              // que especificar cada um dentro dos parâmetros da function.
}

showNumbers(0,1,2,3,4,5,6)            // Aqui veremos o resultado da sequência destes números dentro de um array.
showNumbers(1,2,3,4,{"daysOneYear": 365}) // Aqui veremos como exemplo além dos números também um objeto dentro do array.