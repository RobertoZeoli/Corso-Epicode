//prendo i riferimenti nel dom dell'input form e dei bottoni
let nome = document.getElementById('nome');
let saveButton = document.getElementById('save');
let clearButton = document.getElementById('clear');
let listName = document.querySelector('ul');


//inserisco l'evento di salvataggio al button save e lo faccio stampare nella lista ul
saveButton.addEventListener('click', function(event) {
    event.preventDefault()
    let testoNome = nome.value
    console.log('testo della sezione nome', testoNome)
    localStorage.setItem('testoSalvato', testoNome)

    localStorage.getItem('testoSalvato')
    let li = document.createElement('li')
    li.textContent = testoNome
    document.querySelector('ul').appendChild(li)
    }
)




//inserisco l'evento che elimina l'input dallo storage
clearButton.addEventListener('click', function(){
    localStorage.removeItem('testoSalvato');
})

