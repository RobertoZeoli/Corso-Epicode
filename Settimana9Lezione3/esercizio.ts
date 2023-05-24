class Base{
    codRedd:number;
    redditoAnnuoLordo:number;
    tasseInps:number;
    tasseIrpef:number;
    
    constructor(_codRedd:number, _redditoAnnuoLordo:number){
        this.codRedd = _codRedd,
        this.redditoAnnuoLordo = _redditoAnnuoLordo,
        this.tasseInps = 0.2623,
        this.tasseIrpef = 0.15
    }

    getUtileTasse():number{
        return (this.redditoAnnuoLordo*this.codRedd)/100
    }

    getTasseInps():number{
        return (this.getUtileTasse()*this.tasseInps)/100
    }

    getTasseIrpef():number{
        return (this.getUtileTasse()*this.tasseIrpef)/100
    }
    
    getRedditoAnnuoNetto():number{
        return this.redditoAnnuoLordo - (this.getTasseInps()+this.getTasseIrpef())
    }
}
//una volta impostata la classe, riutilizzare lo "stampino" per le tre professioni e fare i console.log

let artigiano = new Base(40, 50000)
let commerciante = new Base (54, 60000)
let imprenditore = new Base (62, 100000)

console.log(`Utile tasse artigiano:${artigiano.getUtileTasse()} €`)
console.log(`Tasse Inps artigiano:${artigiano.getTasseInps()} €`)
console.log(`Tasse Irpef artigiano:${artigiano.getTasseIrpef()} €`)
console.log(`reddito annuo netto artigiano: ${artigiano.getRedditoAnnuoNetto()}€`)
console.log('----------------------------------------------------------------')
console.log(`Utile tasse commerciante:${commerciante.getUtileTasse()} €`)
console.log(`Tasse Inps commerciante:${commerciante.getTasseInps()} €`)
console.log(`Tasse Irpef commerciante:${commerciante.getTasseIrpef()} €`)
console.log(`reddito annuo netto commerciante: ${commerciante.getRedditoAnnuoNetto()}€`)
console.log('----------------------------------------------------------------')
console.log(`Utile tasse imprenditore:${imprenditore.getUtileTasse()} €`)
console.log(`Tasse Inps imprenditore:${imprenditore.getTasseInps()} €`)
console.log(`Tasse Irpef imprenditore:${imprenditore.getTasseIrpef()} €`)
console.log(`reddito annuo netto imprenditore: ${imprenditore.getRedditoAnnuoNetto()}€`)