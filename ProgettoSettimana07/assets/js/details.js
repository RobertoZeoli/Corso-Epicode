let server = 'https://striveschool-api.herokuapp.com/api/product/';
let addressBar = new URLSearchParams(window.location.search)
let productId = addressBar.get('productId')

window.onload= ()=> {
    if(productId){
    fetch(server+productId,{
        headers:
        {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkNzU3Zjg4Zjc0MDAwMTQyODczZjIiLCJpYXQiOjE2ODM4NDY1MjcsImV4cCI6MTY4NTA1NjEyN30.VXel9fri2hm7dmPukLWd-to4iTJJElKhw8OPtK_IE0c"
        }
    })
    .then((res)=>{
        if(res.ok){
            return res.json()
        }else{
            throw new Error('Errore nel contattare il server')
        }
    })
    .then((dettaglio)=>{
        console.log(dettaglio)
        dettaglio.innerHTML = `<div class="d-flex justify-content-center align-item-center">
        <div class="details">
            <div class="card">
                <div class="card-img-part">
                    <img src="" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text brand"></p>
                    <p class="card-text description"></p>
                    <p class="card-text price"></p>
                    <div class="row">
                        <a href="homepage.html" class="btn mt-1">Torna alla Home</a>

                    </div>
                </div>
            </div>
        </div>
    </div>`;
        })
    .catch((err)=>{
        console.log(err)
    })
}else{
    console.log(err)
}}

//lascio scritto il codice, ma la GET non mi prende l'oggetto specifico, quindi non riesco a stampare la card tramite JS.

/*
    Mi da questo errore in console: 
    TypeError: Cannot read properties of null (reading 'innerHTML')
    at script.js:39:13
    at Array.forEach (<anonymous>)
    at script.js:19:22 
    
    script.js:43
*/