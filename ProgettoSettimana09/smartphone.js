// INTERFACCIA
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// CLASSI
var Primo = /** @class */ (function () {
    function Primo(_credito, _numeroChiamate) {
        this.credito = _credito,
            this.numeroChiamate = _numeroChiamate;
    }
    Primo.prototype.ricarica = function (importoRicarica) {
        this.credito += importoRicarica;
    };
    Primo.prototype.chiamata = function (minChiamata) {
        this.credito -= minChiamata * 0.20;
        this.numeroChiamate++;
    };
    Primo.prototype.numero404 = function () {
        return this.credito;
    };
    ;
    Primo.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ;
    Primo.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    ;
    return Primo;
}());
var Secondo = /** @class */ (function (_super) {
    __extends(Secondo, _super);
    function Secondo(_credito, _numeroChiamate) {
        return _super.call(this, _credito, _numeroChiamate) || this;
    }
    return Secondo;
}(Primo));
var Terzo = /** @class */ (function (_super) {
    __extends(Terzo, _super);
    function Terzo(_credito, _numeroChiamate) {
        return _super.call(this, _credito, _numeroChiamate) || this;
    }
    return Terzo;
}(Primo));
//ISTANZE CLASSI
var primo = new Primo(0, 2);
console.log('Primo utente:');
console.log('-----------');
primo.ricarica(10);
primo.chiamata(5);
primo.ricarica(5);
primo.chiamata(20);
console.log("Credito residuo: ".concat(primo.numero404(), "\u20AC"));
console.log("Numero chiamate: ".concat(primo.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(primo.azzeraChiamate()));
var secondo = new Secondo(0, 3);
console.log('Secondo utente:');
console.log('-----------');
secondo.ricarica(30);
secondo.chiamata(60);
secondo.ricarica(5);
secondo.chiamata(10);
console.log("Credito residuo: ".concat(secondo.numero404(), "\u20AC"));
console.log("Numero chiamate: ".concat(secondo.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(secondo.azzeraChiamate()));
var terzo = new Terzo(0, 2);
console.log('Terzo utente:');
console.log('-----------');
terzo.ricarica(5);
terzo.chiamata(15);
terzo.ricarica(5);
terzo.chiamata(45);
console.log("Credito residuo: ".concat(terzo.numero404(), "\u20AC"));
console.log("Numero chiamate: ".concat(terzo.getNumeroChiamate()));
console.log("Chiamate azzerate: ".concat(terzo.azzeraChiamate()));
