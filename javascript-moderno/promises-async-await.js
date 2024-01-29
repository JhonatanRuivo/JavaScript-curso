// ----------------------------------- PROMISES - ASYNC - AWAIT ----------------------------------------------

// A promise é uma função que me retorna uma promessa que pode ser que ela foi resolvida ou foi rejeitada
{
  const testPromise = function () {
    return new Promise((resolve, reject) => {
      // Aqui declaramos uma fallback dentro da promise com um arrow function, com dois parâmetros
      // o resolve e o reject.
      setTimeout(() => {
        let error = false

        if (error) {
          reject('Não foi possível realizar a operação!') // Se a variável error for true então ela não será resolvida e cairá no parâmetro reject
        } else {
          resolve('Promessa devolvida com sucesso!') // Porém se o erro for false a promessa será resolvida e cairá no parâmetro resolve.
        }
      }, 2000)
    })
  }

  testPromise()
    .then((res) => {
      // Ao chamara a função coma a promise teremos dois métodos, o método then que nos responderá o resultado da promise caso ela
      alert(res) // ela tenha dado certo
    })
    .catch((err) => {
      // e teremos o método catch para pegar o erro da promise caso ela não renha sido resolvida e aí poderemos manipular como
      alert(err) // acharmos melhor esses dois resultados.
    })

  async function asyncFunctionExemple() {
    // Com a função async teremos dentro dela agora o método await, este método fará com que o restante da
    await testPromise()
      .then((res) => {
        // da função execute somente depois que a função testPromise() que está no await for executado.
        alert(res)
      })
      .catch((err) => {
        alert(err)
      })
    alert('Olá!')
  }

  asyncFunctionExemple()
}
