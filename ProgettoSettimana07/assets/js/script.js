let server = 'https://striveschool-api.herokuapp.com/api/product/';

//fetch GET
window.onload = () => {
    fetch(server, {
        headers:
            { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkNzU3Zjg4Zjc0MDAwMTQyODczZjIiLCJpYXQiOjE2ODM4NDY1MjcsImV4cCI6MTY4NTA1NjEyN30.VXel9fri2hm7dmPukLWd-to4iTJJElKhw8OPtK_IE0c" }
    })
        .then((res) => {
            console.log(res)
            if (res.ok) {
                return res.json()
            } else {
                throw err('Errore nel contattare il server')
            }
        })
        .then((prodotti) => {
            console.log('CONTENITORE', prodotti)
            prodotti.forEach((event) => {
                let card = `<div class="col-lg-3 col-md-4">
                <div class="card">
                <div class="card-img-part">
                <img src="${event.imageUrl}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text brand">${event.brand}</p>
                    <p class="card-text description">${event.description} </p>
                    <p class="card-text price">${event.price}€</p>  
                    <div class="row buttons">                 
                    <a href="details.html?productId=${event._id}" class="btn mt-1">Scopri di più</a>
                    <a href="backOffice.html?productId=${event._id}" class="btn mt-1">Modifica</a>
                    </div>
                </div>
            </div>
            </div>`

            let menu = document.getElementById('menu-cards')
            menu.innerHTML += card
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
