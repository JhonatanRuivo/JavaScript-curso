// ------------------------- PEDRA PAPEL TESOURA ---------------------------------------------------

const elementsPlayer = document.querySelectorAll('.player-options div > img') //Pegando todos os elementos de dentro da div
let playerOpt = '' // Instanciando primeiramente a opção do player como vazio

const elementsEnemy = document.querySelectorAll('.enemy-options div > img') //Pegando todos os elementos de dentro da div
let enemyOpt = '' // Instanciando primeiramente a opção do player como vazio

function resetOpt(elements) {
  // Função para definir o resto qual não foi a escolha do player para opacity 0.3
  for (var i = 0; i < elements.length; i++) {
    // Um loop para percorrer todos os elementos
    elements[i].style.opacity = 0.3 // Definindo a opacidade do elemento
  }
}

function enemyPlayer() {
  let rand = Math.floor(Math.random() * 3)

  for (let i = 0; i < elementsEnemy.length; i++) {
    if (i == rand) {
      elementsEnemy[i].style.opacity = 1
      enemyOpt = elementsEnemy[i].getAttribute('opt')
    }
  }
}
function defineWinner() {
  // Função que realiza o algorítimo para definir o vencedor de acordo com as regras do jogo, também
  // retorna ao usuário quem foi o ganhador, perdedor ou se houve empate.
  let winnerMessage = document.querySelector('.result')

  const win = () => {
    winnerMessage.innerHTML = 'PARABÉNS VOCÊ FOI O VENCEDOR!'
    winnerMessage.classList.add('result-show')
  }
  const lose = () => {
    winnerMessage.innerHTML = 'INFELIZMENTE VOCÊ PERDEU, DESEJO-LHE MAIS SORTE DA PRÓXIMA VEZ!'
    winnerMessage.classList.add('result-show')
  }
  const draw = () => {
    winnerMessage.innerHTML = 'EMPATOU! TENTE NOVAMENTE!'
    winnerMessage.classList.add('result-show')
  }

  if (playerOpt === 'rock') {
    if (enemyOpt === 'rock') {
      draw()
    } else if (enemyOpt === 'scissor') {
      win()
    } else if (enemyOpt === 'paper') {
      lose()
    }
  } else if (playerOpt === 'paper') {
    if (enemyOpt === 'paper') {
      draw()
    } else if (enemyOpt === 'rock') {
      win()
    } else if (enemyOpt === 'scissor') {
      lose()
    }
  } else if (playerOpt === 'scissor') {
    if (enemyOpt === 'scissor') {
      draw()
    } else if (enemyOpt === 'paper') {
      win()
    } else if (enemyOpt === 'rock') {
      lose()
    }
  }
}

for (var i = 0; i < elementsPlayer.length; i++) {
  // um loop percorrendo todos os elementos do player
  elementsPlayer[i].addEventListener('click', (t) => {
    // Uma função para dispara em efeito de click do user
    resetOpt(elementsPlayer) // Usando a função de resetOpt para deixar a opacity padrão de 0.3 as não escolhas do player
    resetOpt(elementsEnemy)
    t.target.style.opacity = 1 // Definindo a escolha e deixando em evidência com o opacity 1
    playerOpt = t.target.getAttribute('opt') // Pegando o valor escolhido pelo player

    enemyPlayer() // Função que define a jogada gerada de modo aleatória do adversário
    defineWinner() // Função que realiza as validações para definir o vencedor de acordo com as regras do jogo
  })
}

// HTML DA PÁGINA PARA INSERIR NO INDEX.HTML PARA QUE ESTE APP FUNCIONE CORRETAMENTE
{
  /* <body> 
    <style>
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        background: linear-gradient(180deg, #ededed, #adadad);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 20px;
        color: #363636;
      }
      h1 {
        width: 50%;
        padding: 8px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        background-color: #c8c8c8;
        box-shadow: 0px 5px 15px 0px #363636 ;
      }
      
      .result-show {
        padding: 8px;
        border-radius: 8px;
        border: solid 1px #363636;
        display: flex;
        justify-content: center;
        background-color: transparent;
        box-shadow: 0px 5px 15px 0px #7b7b7b ;
      }
      .player-options img,
      .enemy-options img {
        max-width: 200px;
        opacity: 0.3;
      }
      .player-options {
        cursor: pointer;
      }
      .player-options img:hover {
        scale: 1.1;
        transition: 250ms
      }

      .align {
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
    </style>
    <h1>Pedra, papel ou tesoura!</h1>
    <h3 class="result"></h3>
    <div class="align">
      <div class="player-options">
        <div><img title="rock" opt="rock" src="./apps/pedrapapeltesoura/rock.png" /></div>
        <div><img title="paper" opt="paper" src="./apps/pedrapapeltesoura/paper.png" /></div>
        <div><img title="scissor" opt="scissor" src="./apps/pedrapapeltesoura/scissor.png" /></div>
      </div>
      <div class="enemy-options">
        <div><img title="rock" opt="rock" src="./apps/pedrapapeltesoura/rock.png" /></div>
        <div><img title="paper" opt="paper" src="./apps/pedrapapeltesoura/paper.png" /></div>
        <div><img title="scissor" opt="scissor" src="./apps/pedrapapeltesoura/scissor.png" /></div>
      </div>
    </div>
    <script></script>
  </body> */
}
