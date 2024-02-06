// --------------------------------- APP DE PERGUNTAS E RESPOSTAS ---------------------------------------------

const answersOptions = document.querySelectorAll('[type=radio')  // Adiciona a variável as opções de respostas

for (var i = 0; i < answersOptions.length; i++) {        // Um loop para percorrer as opções e ter a opção selecionada pelo user
  answersOptions[i].addEventListener('change', (e) => { 
    let selected = e.target.value
    if (selected == 'correct') {                // Verifica se a selecionada pelo o user foi a correta
      let parentNode = e.target.parentNode      // Instancia o elemento pai da opção de resposta

      parentNode.style.backgroundColor = 'green' // Adiciona ao elemento par um fundo verde para identificar a correta

      let elements = parentNode.parentNode.querySelectorAll('[type=radio]') // Pega o elemento pai que seria o form

      for (var n = 0; n < elements.length; n++) {   // Percorre os elementos de todo o form
        elements[n].disabled = true // Desabilita as opções que não foram selecionadas
      }
    } else if (selected == 'incorrect') {  // Verifica se a opção escolhida pelo user foi incorreta
      let parentNode = e.target.parentNode

      parentNode.style.backgroundColor = 'red' // Adiciona um fundo vermelho no elemento pai

      let elements = parentNode.parentNode.querySelectorAll('[type=radio]')

      for (var n = 0; n < elements.length; n++) {
        elements[n].disabled = true
      }

      let correct = parentNode.parentNode.querySelector('[value=correct]') 
      correct.parentNode.style.backgroundColor = 'green' // Adiciona um fundo verde no elemento quer seria a opção correta
    }
  })
}
