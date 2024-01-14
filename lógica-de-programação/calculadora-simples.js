// --------------------------- EXERCÍCIO: CALCULADORA SIMPLES COM PROMPT -----------------------------------
var numberA = prompt("Digite um número...") // Primeiro número

var sinal = prompt("Digite um destes sinais +, -, /, * para realizar uma operação...") // Sinal para decidir qual operação será realizada

while(sinal != "+" && sinal != "-" && sinal != "*" && sinal != "/") { // Validação para realizar uma operação válida por nosso código
    alert("Favor insira uma das operações válidas.")
    var sinal = prompt("Digite um destes sinais +  -  /  * para realizar uma operação...")
}

var numberB = prompt("Digite um número...") // Segundo número
numberA = parseInt(numberA) // Verificar se o input do usuário é mesmo um número.
numberB = parseInt(numberB)

function soma(a, b) { // Função de realizar a operação a partir do caractere escolhido pelo usuário passando os números como parâmetro
   if(sinal == "+"){  // para dentro da função
      const result = a + b
       return alert(`O resultado é: ${result}`)
    } else if(sinal == "-"){
        const result = a - b
        return alert(`O resultado é: ${result}`)
    } else if(sinal == "*"){
        const result = a * b
        return alert(`O resultado é: ${result}`)
    } else if(sinal == "/"){
        const result = a / b
        return alert(`O resultado é: ${result}`)
    }
}
soma(numberA, numberB)   // Chamando a função com os números selecionados pelo usuário como parâmetro na função