interface Registro {
    credito: number;
    numeroChiamate: number;

    ricarica(importoRicarica:number): void;
    chiamata(minChiamata: number):void;
    numero404():number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

class Primo implements Registro {
    public credito: number;
    public numeroChiamate: number;

    constructor (_credito:number, _numeroChiamate:number){
        this.credito = _credito,
        this.numeroChiamate = _numeroChiamate
    }

     public ricarica(importoRicarica:number):void{
        this.credito += importoRicarica;
     }

     public chiamata(minChiamata:number):void{
        this.credito -= minChiamata * 0.20;
        this.numeroChiamate++;
     }

     public numero404():number{
        return this.credito;
     };

     public getNumeroChiamate():number{
        return this.numeroChiamate;
     };
     public azzeraChiamate():number{
        return this.numeroChiamate = 0;
     };
}


class Secondo extends Primo { 
    constructor(_credito:number, _numeroChiamate:number){
        super(_credito,_numeroChiamate)
    }
}

class Terzo extends Primo { 
    constructor(_credito:number, _numeroChiamate:number){
        super(_credito,_numeroChiamate)
    }
}

//ISTANZE CLASSI

const primo = new Primo(0,2);

console.log('Primo utente:')
console.log('-----------')
primo.ricarica(10);
primo.chiamata(5);
primo.ricarica(5);
primo.chiamata(20);
console.log(`Credito residuo: ${primo.numero404()}€`);
console.log(`Numero chiamate: ${primo.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${primo.azzeraChiamate()}`)

const secondo = new Secondo(0,3)

console.log('Secondo utente:')
console.log('-----------')
secondo.ricarica(30);
secondo.chiamata(60);
secondo.ricarica(5);
secondo.chiamata(10);
console.log(`Credito residuo: ${secondo.numero404()}€`);
console.log(`Numero chiamate: ${secondo.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${secondo.azzeraChiamate()}`)

const terzo = new Terzo(0,2)

console.log('Terzo utente:')
console.log('-----------')
terzo.ricarica(5);
terzo.chiamata(15);
terzo.ricarica(5);
terzo.chiamata(45);
console.log(`Credito residuo: ${terzo.numero404()}€`);
console.log(`Numero chiamate: ${terzo.getNumeroChiamate()}`);
console.log(`Chiamate azzerate: ${terzo.azzeraChiamate()}`)