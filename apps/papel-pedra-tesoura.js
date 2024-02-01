// ------------------------- PEDRA PAPEL TESOURA ---------------------------------------------------

const elementsPlayer = document.querySelectorAll('.player-options div > img')
let playerOpt = ""

function resetOpt (elements) {
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = 0.3
    }
}

for(var i = 0; i < elementsPlayer.length; i++) {
    elementsPlayer[i].addEventListener('click', (t)=>{
        resetOpt(elementsPlayer)
        t.target.style.opacity = 1
        playerOpt = t.target.getAttribute('opt')
        console.log(playerOpt);
    })
}