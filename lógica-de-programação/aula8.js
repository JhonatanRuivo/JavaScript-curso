// ----------------------------------- LAÇO DE REPETIÇÃO ForEach ---------------------------------
// ForEach é utilizado para interagir com arrays e objetos
var arr = ["banana", "maçã", "limão", "goiaba"] // declarando um array

for(var i = 0; i < arr.length; i++) { // uma maneira mais manual de utiliza-lo
    console.log(i);
}

arr.forEach((value, index) => { // declarando o forEach desta maneira conseguimos executar uma função com parâmetros valor
                                // e index podendo extrair o conteúdo do array ou a posição dos itens
    console.log(value);
})