// ----------------------------- ANIMAÇÕES 2  ---------------------------------------
const buttonShow = document.querySelector('.showParagraphButton') // Atribui a variável buttonShow o ver mais do html

buttonShow.addEventListener('click', ()=> {              // Colocamos o evento de click para que assim execute uma function 
    let paragraph = document.querySelector('.paragraph') // Pegamos o paragrafo do HTML

    if(paragraph.classList.contains('showParagraph')) {  // Fazemos uma condicional para mostra o texto inteiro do parágrafo
        buttonShow.innerHTML = "ver mais..."             // ou para diminuir e mostrar apenas a primeira linha.
        paragraph.classList.remove('showParagraph')
    } else {
        buttonShow.innerHTML = "ver menos"               // Também alteramos através do innerHTML o conteúdo do span para que
        paragraph.classList.add('showParagraph')         // fique mais claro para o usuário o que vai acontecer ao clicar 
    }
})