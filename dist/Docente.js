"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docente = void 0;
const Persona_1 = require("./Persona");
class Docente extends Persona_1.Persona {
    constructor() {
        super(...arguments);
        this.dominio = Persona_1.Dominio.Docente;
    }
    getDati() {
        return (`${this.dominio}: ${this.nome}c${this.cognome} età: ${this.calcolaEta()}, email: ${this.email}`);
    }
}
exports.Docente = Docente;
