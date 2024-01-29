//------------------------------------------- ANIMAÇÕES COM JAVASCRIPT -----------------------------------------

const animationBox = document.querySelectorAll('.box')[0] // Alocamos em uma variável o elemento html através da classe

animationBox.addEventListener('click', () => {
  // Adicionamos um evento que ocorre no window da página neste caso foi o de click mas
  animationBox.classList.add('showBox') // poderia ser outro como hover por exemplo, e com isso ao ocorrer o evento disparamos
}) // uma função que acrescenta uma classe com o efeito que queremos passar da animação.
