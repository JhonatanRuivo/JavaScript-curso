//--------------------------------- MANIPULANDO-DOM ------------------------------------------------------------
const paragraph = document.getElementsByTagName('p')  // Podemos acessar uma tag HTML através do document, esta variável paragraph agora
                                                      // se torna um objeto.

const valueParagraph = paragraph[0]            // Acessando através da posição do elemento como se estivesse dentro de arrays
const secondParagraph = paragraph[1].innerHTML // Sendo um objeto podemos acessar várias propriedades deste objeto como o seu valor    
paragraph[2].innerHTML = 'Manipulado via JS!'  // Podemos manipular seu conteúdo através do JS

var p = 0   
while(p < paragraph.length) {                   // Podemos manipular os dados e fazer com que recebam todos os elementos algum valor través
    paragraph[p].innerHTML = "Manipulado via JS com while! - " + p // de loops por exemplo.
    p++
}