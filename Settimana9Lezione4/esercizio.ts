class Capo {
    id: number;
    codProd: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoIvaEsclusa: number;
    prezzoIvaInclusa: number;
    disponibile: string;
    saldo: number

    constructor(_id:number, _codProd:number, _collezione:string, _capo:string, _modello:number, _quantita:number, _colore:string, _prezzoIvaEsclusa:number, _prezzoIvaInclusa:number, _disponibile:string, _saldo:number) {
        this.id = _id,
        this.codProd = _codProd,
        this.collezione = _collezione,
        this.capo = _capo,
        this.modello = _modello,
        this.quantita = _quantita,
        this.colore = _colore,
        this.prezzoIvaEsclusa = _prezzoIvaEsclusa,
        this.prezzoIvaInclusa = _prezzoIvaInclusa,
        this.disponibile = _disponibile,
        this.saldo = _saldo
    }

    getSaldoCapo():number{
        return (this.prezzoIvaInclusa*this.saldo)/100
    }

    getacquistoCapo():number{
        return this.prezzoIvaInclusa - this.getSaldoCapo()
    }
}

// Arrivo al risultato facendo le istanze. Dopo proverò con la fetch.

//CARDIGAN
let cardigan = new Capo(1,2121,"primavera","cardigan",1231,5,"nero",18.50,22.57,"negozio",45)

console.log('CARDIGAN');
console.log(`Saldo capo: ${cardigan.getSaldoCapo()}€`);
console.log(`Totale capo: ${cardigan.getacquistoCapo()}€`);
console.log("--------------------------------");

//T-SHIRT

let tShirt = new Capo(2,4111,"estate","t-shirt",1251,6,"rosso",5.50,6.71,"magazzino",30)

console.log('T-SHIRT');
console.log(`Saldo capo: ${tShirt.getSaldoCapo()}€`);
console.log(`Totale capo: ${tShirt.getacquistoCapo()}€`);
console.log("--------------------------------");

//FELPA

let felpa = new Capo(3,1181,"inverno","felpa",1229,8,"beige",17.50,21.35,"negozio",50)

console.log('FELPA');
console.log(`Saldo capo: ${felpa.getSaldoCapo()}€`);
console.log(`Totale capo: ${felpa.getacquistoCapo()}€`);
console.log("--------------------------------");

//MAGLIONE

let maglione = new Capo(4,1111,"estate","maglione",1221,4,"verde",20,24.40,"negozio",50)

console.log('MAGLIONE');
console.log(`Saldo capo: ${maglione.getSaldoCapo()}€`);
console.log(`Totale capo: ${maglione.getacquistoCapo()}€`);
console.log("--------------------------------");

//MAGLIA

let maglia = new Capo(5,6111,"primavera","maglia",1021,5,"blu",11,13.42,"magazzino",60)

console.log('MAGLIA');
console.log(`Saldo capo: ${maglia.getSaldoCapo()}€`);
console.log(`Totale capo: ${maglia.getacquistoCapo()}€`);

// Ottengo lo stesso risultando facendo la fetch

const fileJson = './Abbigliamento.json'
let price: number;
let sale: number;

async function recupera(): Promise<any> {

    await fetch(fileJson) 
		.then((response) => {
            if (response.ok) {
                return response.json();
            }
		})
		.then((dati) => {
            console.log(dati);
            dati.forEach(element=>{
                    let capo = new Capo(
                    element.id,
					element.codprod,
					element.collezione,
					element.capo,
					element.modello,
					element.quantita,
					element.colore,
					element.prezzoivaesclusa,
					element.prezzoivainclusa,
					element.disponibile,
					element.saldo
                    );
                    console.log(capo);
                    sale= capo.getSaldoCapo();
                    price = capo.getacquistoCapo();
                    console.log(sale);
                    console.log(price)
            });
        });
    }

    recupera();