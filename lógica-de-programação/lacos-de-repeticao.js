// ----------------------------------  LAÇOS DE REPETIÇÃO --------------------------------------------------
// WHILE
var n = 0 // Declarando uma variável de nome n recebendo 0
while (n < 10) {
  // Chamando while para repetir enquanto o valor de n for menor que 10
  // executa o que estiver aqui
  console.log(n)
  n++ // ao final sempre incrementar a variável para que o loop aconteça
}

// FOR
for (var i = 0; i < 10; i++) {
  //dentro ddo parenteses já colocamos 3 condições para executar o FOR
  console.log(i) // o resultado será o mesmo que do exemplo anterior mas escrito de maneira diferente
}

//DO
do {
  // DO funciona como um while mas a diferença é que ele executa o que está dentro dele pra depois fazer a verificação da condição
  console.log(n) // o resultado será o mesmo que do exemplo anterior mas escrito de maneira diferente
  n++
} while (n < 10) // verificação da condição
