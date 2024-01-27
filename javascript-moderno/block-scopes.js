// ------------------------------------BLOCK SCOPES ------------------------------------------------
// O block scopes é uma feature do Javascript que ajuda principalmente na organização do código onde podemos
// criar escopos para trabalhar com códigos onde não seja necessário a declaração global deste código, mas
// podemos ainda utilizar fora do escopo um código criado dentro do mesmo, desde que seja declarado de maneira global

{                                           // Para se criar um escopo é simples basta envolver o código dentro de chaves.

    var variable = "global"                 // Nesta linha declaramos uma variável de maneira global dentro do escopo.

    let variable2 = "only in scope"         // Aqui usamos let que definirá uma variável dentro do escopo podendo ser reatribuído
                                            // seu valor, mas apenas dentro deste escopo.

    const variable3 = "only in scope too"   // Com o const declaramos mas não podemos reatribuir nenhum valor tornando-o constante

    console.log(variable2) // Estes dois console log funcionará pois estão dentro do escopo de suas respectivas variáveis
    console.log(variable3)

}

console.log(variable)     // Conseguimos usar esta variável fora do escopo pois é uma variável global.
// console.log(variable2)    // Aqui termos um erro pois não existe uma variável global.
// console.log(variable3)    // Também teremos um erro pelo mesmo motivo da anterior.

{ 
    function globalFunction() {         // Esta função está declarada de maneira global.
        console.log('global function')
    }

    const scopeFunction = function() {      // Esta função irá funcionar apenas dentro do escopo pois foi declarada de maneira local.
        console.log('In scope function');
    }

    scopeFunction() // Esta chamada da função funciona visto que está dentro do escopo da mesma declarada.
}

globalFunction()  // Ao chamar esta função funcionará normalmente mesmo estando dentro do escopo pois ela foi declarada de maneira global.

//scopeFunction()  // Esta função irá dar um erro pois fora do escopo não existe a mesma.