// -----------------------------------------ARROW FUNCTION -----------------------------------------------------------
// A arrow function veio para facilitar e deixar mais rápida a maneira de declarar uma função

//Declaração de maneira tradicional
const defaultFunction = function() {
    console.log('Esta é uma função declarada de maneira tradicional')
}

//Declaração ndo jeito arrow function
const arrowFunction = () => {
    console.log('Está e uma arrow function');
}

// Podemos passar parâmetros dentro das arrows de maneira simples como exemplo
const calc = (numA, numB) => {
    let result = numA + numB
    console.log(result)
}

// Passamos os parâmetros normalmente
calc(1,2)