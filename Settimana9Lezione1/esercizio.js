//let giocatore1: number= 5;
//let giocatore2: number= 8;
var giocatore1 = document.getElementById('giocatore1');
var giocatore2 = document.getElementById('giocatore2');
console.log(giocatore1);
console.log(giocatore2);
var randomNum = Math.floor(Math.random() * (100 - 1) + 1);
console.log(randomNum);
var scommessa = function (giocatore1, giocatore2) {
    switch (true) {
        case giocatore1 == randomNum && giocatore2 != randomNum: console.log("Il giocatore 1 ha azzeccato il numero casuale");
        case giocatore2 == randomNum && giocatore1 != randomNum: console.log("Il giocatore 2 ha azzeccato il numero casuale");
        case (randomNum - giocatore1) < (randomNum - giocatore2): console.log('Nessuno dei due giocatori ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più');
        case (randomNum - giocatore2) < (randomNum - giocatore1): console.log('Nessuno dei due giocatori ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più');
    }
};
scommessa(giocatore1, giocatore2);
