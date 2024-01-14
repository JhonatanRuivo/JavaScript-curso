// ------------------------------- EXERCÍCIO BÁSICO PARA TREINAR LÓGICA CALCULANDO IDADE -----------------------------------

var ageUser = prompt("qual ano você nasceu ?") // Guardando em uma variável o ano de nascimento do usuário

while(ageUser >= 2023 || ageUser <= 1920 ) {        // Fazendo uma verificação se o ano que o usuário informou não passa de 2023 e seja
    alert("Apenas nascido entre 1920 a 2023.")      // menor que 1920, se não passar na verificação a pergunta irá repetir até o usuário
    var ageUser = prompt("qual ano você nasceu ?")  // digitar um valor válido.
}

function calculateAge() {                           // Função que é responsável pelo calculo da idade do usuário.
    const dataActual = new Date()
    const yearActual = dataActual.getFullYear()

    const ageBirth = ageUser
    const age = yearActual - ageBirth
    alert(`Sua idade é: ${age} anos.`)
}
calculateAge()