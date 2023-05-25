var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Capo = /** @class */ (function () {
    function Capo(_id, _codProd, _collezione, _capo, _modello, _quantita, _colore, _prezzoIvaEsclusa, _prezzoIvaInclusa, _disponibile, _saldo) {
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
            this.saldo = _saldo;
    }
    Capo.prototype.getSaldoCapo = function () {
        return (this.prezzoIvaInclusa * this.saldo) / 100;
    };
    Capo.prototype.getacquistoCapo = function () {
        return this.prezzoIvaInclusa - this.getSaldoCapo();
    };
    return Capo;
}());
// Arrivo al risultato facendo le istanze. Dopo proverò con la fetch.
//CARDIGAN
var cardigan = new Capo(1, 2121, "primavera", "cardigan", 1231, 5, "nero", 18.50, 22.57, "negozio", 45);
console.log('CARDIGAN');
console.log("Saldo capo: ".concat(cardigan.getSaldoCapo(), "\u20AC"));
console.log("Totale capo: ".concat(cardigan.getacquistoCapo(), "\u20AC"));
console.log("--------------------------------");
//T-SHIRT
var tShirt = new Capo(2, 4111, "estate", "t-shirt", 1251, 6, "rosso", 5.50, 6.71, "magazzino", 30);
console.log('T-SHIRT');
console.log("Saldo capo: ".concat(tShirt.getSaldoCapo(), "\u20AC"));
console.log("Totale capo: ".concat(tShirt.getacquistoCapo(), "\u20AC"));
console.log("--------------------------------");
//FELPA
var felpa = new Capo(3, 1181, "inverno", "felpa", 1229, 8, "beige", 17.50, 21.35, "negozio", 50);
console.log('FELPA');
console.log("Saldo capo: ".concat(felpa.getSaldoCapo(), "\u20AC"));
console.log("Totale capo: ".concat(felpa.getacquistoCapo(), "\u20AC"));
console.log("--------------------------------");
//MAGLIONE
var maglione = new Capo(4, 1111, "estate", "maglione", 1221, 4, "verde", 20, 24.40, "negozio", 50);
console.log('MAGLIONE');
console.log("Saldo capo: ".concat(maglione.getSaldoCapo(), "\u20AC"));
console.log("Totale capo: ".concat(maglione.getacquistoCapo(), "\u20AC"));
console.log("--------------------------------");
//MAGLIA
var maglia = new Capo(5, 6111, "primavera", "maglia", 1021, 5, "blu", 11, 13.42, "magazzino", 60);
console.log('MAGLIA');
console.log("Saldo capo: ".concat(maglia.getSaldoCapo(), "\u20AC"));
console.log("Totale capo: ".concat(maglia.getacquistoCapo(), "\u20AC"));
// Ottengo lo stesso risultando facendo la fetch
var fileJson = './Abbigliamento.json';
var price;
var sale;
function recupera() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(fileJson)
                        .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                        .then(function (dati) {
                        console.log(dati);
                        dati.forEach(function (element) {
                            var capo = new Capo(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
                            console.log(capo);
                            sale = capo.getSaldoCapo();
                            price = capo.getacquistoCapo();
                            console.log(sale);
                            consolg.log(price);
                        });
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
recupera();
