"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo) {
        this.idGeneric = '9918128933';
        this.titulo = titulo;
        this.generarCota();
    }
    Libro.prototype.generarCota = function () {
        var fecha = new Date();
        this.cota = (new Date()).toDateString();
    };
    Libro.prototype.getCota = function () {
        return this.cota;
    };
    Libro.prototype.getAtributes = function () {
        return {
            cota: this.cota,
            titulo: this.titulo,
            id: this.idGeneric
        };
    };
    return Libro;
}());
exports.Libro = Libro;
