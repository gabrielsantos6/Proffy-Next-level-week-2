// Procurar o botao
document.querySelector("#add-time")

//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
    //Duplicar os campos. que campos ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // pegar os campos. que campos ?
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo, limpar
    fields.forEach(function(field) {
        field.value= ""
    })
    //Colocar na pagina: onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

    

   