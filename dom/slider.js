// ---------------------------- SLIDER COM JAVASCRIPT -----------------------------------

let lastIndex = 0   // Instanciamos o index zerado

const images = document.querySelectorAll('.wrapperImages .image') // Pegamos todas as imagens da div

images.forEach((item, index) => {                       // Para percorrer todas as images fazemos um forEach
    document.querySelectorAll('.bullet-single')[index]  // Com o index conseguimos pegar a posição do elemento
    .addEventListener('click', () => {                  // com o evento do click no bullet disparamos uma função que
        let lastImage = images[lastIndex]               // neste momento está em zero pelo nosso index lá do começo
        let actualImage = images[index]                 // e atribuímos nesta variável o atual index

        document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-bullet')
        // Removemos a estilização do bullet para background vazio identificando que este bullet não é mais o selecionado

        document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet')
        // Adicionamos uma estilização para identificar que este bullet é o selecionado

        lastImage.classList.remove('activeImage') // Removemos a imagem não mais selecionada 
        actualImage.classList.add('activeImage')  // Adicionamos a imagem selecionada

        lastIndex = index // Definimos o atual index até ser clicado em outro diferente
    })
});

