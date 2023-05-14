//prendo un riferimento al FORM e creo un evento
let server = 'https://striveschool-api.herokuapp.com/api/product/';
let insertForm = document.getElementById('postProd')
insertForm.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('invio i dati')

    // prendo i riferimenti dei valori del form
    let immagineInput = document.getElementById('immagine')
    let nomeInput = document.getElementById('nome')
    let descrizioneInput = document.getElementById('descrizione')
    let brandInput = document.getElementById('brand')
    let priceInput = document.getElementById('price')

    let newProduct = {
        imageUrl: immagineInput.value,
        name: nomeInput.value,
        description: descrizioneInput.value,
        brand: brandInput.value,
        price: priceInput.value,
    }
    console.log(newProduct)
    insertForm.reset()

    //creo la fetch POST
   
    fetch(productId ? server+productId : server, {
        method: productId ? 'PUT' : 'POST',
        body: JSON.stringify(newProduct),
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkNzU3Zjg4Zjc0MDAwMTQyODczZjIiLCJpYXQiOjE2ODM4NDY1MjcsImV4cCI6MTY4NTA1NjEyN30.VXel9fri2hm7dmPukLWd-to4iTJJElKhw8OPtK_IE0c",
            'Content-Type': 'application/json',
        }
    })
        .then((res) => {
            console.log(res)
            if (res.ok) {
                alert(productId ? 'PRODOTTO MODIFICATO': 'PRODOTTO INSERITO CORRETTAMENTE')

            } else {
                alert('ERRORE NEL SALVATAGGIO DEL PRODOTTO')
            }
        })
        .catch((err) => {
            console.log(err)
        })
})





//fetch PUT
//prendo il valore della barra degli indirizzi
let addressBar = new URLSearchParams(window.location.search)
let productId = addressBar.get('productId')
console.log('productID', productId)
document.getElementById('btnElimina').classList.remove('d-none')
let modi

if (productId) {
    //modifico
    fetch(server + productId, {
        headers:
        {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkNzU3Zjg4Zjc0MDAwMTQyODczZjIiLCJpYXQiOjE2ODM4NDY1MjcsImV4cCI6MTY4NTA1NjEyN30.VXel9fri2hm7dmPukLWd-to4iTJJElKhw8OPtK_IE0c"
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("Errore nel recupero dell'elemento")
            }
        })
        .then((prodotto) => {
            console.log(prodotto);
            document.getElementById('immagine').value = prodotto.imageUrl
            document.getElementById('nome').value = prodotto.name
            document.getElementById('descrizione').value = prodotto.description
            document.getElementById('brand').value = prodotto.brand
            document.getElementById('price').value = prodotto.price

            document.getElementById('h2bo').innerText= 'Back-Office - Modifica'
            document.getElementById('btnInserisci').innerText= 'MODIFICA'
            
        })
        .catch((error) => {
            console.log(error)
        })
} else {
    //creo
}



//DELETE
let btnElimina = document.getElementById('btnElimina')
btnElimina.addEventListener('click', function(){
    fetch(server+productId,{
        method:'DELETE',
        headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkNzU3Zjg4Zjc0MDAwMTQyODczZjIiLCJpYXQiOjE2ODM4NDY1MjcsImV4cCI6MTY4NTA1NjEyN30.VXel9fri2hm7dmPukLWd-to4iTJJElKhw8OPtK_IE0c"
        }
    })
    .then((res)=>{
        if(res.ok){
            alert('PRODOTTO RIMOSSO')
            insertForm.reset()
        }else{
            throw new Error ("Problema nell'eliminazione del prodotto")
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})

//Button reset form
let btnReset = document.getElementById('btnReset')
btnReset.addEventListener('click', function(){
    insertForm.reset()
})