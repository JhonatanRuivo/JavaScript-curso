const buttonShowParagraph = document.querySelector('.showParagraphButton')

buttonShowParagraph.addEventListener('click', handleParagraph())

function handleParagraph() {
    var contentParagraph = document.getElementsByClassName('.paragraph')
    
if(contentParagraph.classList.contains('showParagraph')) {
    handleParagraph.classList.remove('showParagraph');
    buttonShowParagraph.innerHTML = 'Ver mais...'
} else {
    handleParagraph.classList.add('showParagraph')
    buttonShowParagraph.innerHTML = 'ocultar'
}
}
