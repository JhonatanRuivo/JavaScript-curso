// ------------------------------------------------- CSS  -------------------------------------------------------
const elementWrapperId = document.getElementById('wrapper') // Podemos pegar uma tag através do id 

elementWrapperId.style.height = "200"             // Podemos manipular o CSS através das propriedades da tag selecionada que agora virou um objeto
elementWrapperId.style.width = "200"              // podendo assim ser atribuído valores e manipulando a propriedade de estilo por exemplo.
elementWrapperId.style.backgroundColor = "gray"   
elementWrapperId.style.textAlign = "center"

const elementsWrapperClass = document.getElementsByClassName('box') // Podemos utilizar classes para pegar as tags podendo assim selecionar 
                                                                   // várias de uma só vez.
elementsWrapperClass[0].style.backgroundColor = "white"   // Através do index no array manipulamos a classe.

for(var i = 0; i < elementsWrapperClass.length; i++) {    // Fazendo um loop de for podemos atribui o mesmo valor para várias classes.
   var el = elementsWrapperClass[i]
   el.style.border = "solid 1px blue"
}                                                          

const classAll = document.querySelectorAll('.box')   // Com querySelectorAll selecionamos várias classes com a sintaxe de invocar as classes
                                                     // e id`s no CSS como exemplo .box, assim podemos novamente manipular várias objetos da
console.log(classAll);                               // da DOM através de um loop como no exemplo.

for(var i = 0; i < classAll.length; i++) {
    var cls = classAll[i]

    cls.innerHTML = "Manipulado via js"               // Podemos injetar valores dentro das classes através do innerHTML
}