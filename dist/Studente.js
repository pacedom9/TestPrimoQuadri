"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Studente = void 0;
const Persona_1 = require("./Persona");
class Studente extends Persona_1.Persona {
    constructor() {
        super(...arguments);
        this.dominio = Persona_1.Dominio.Studente;
    }
    getDati() {
        return (`${this.dominio}: ${this.nome}c${this.cognome} età: ${this.calcolaEta()}, email: ${this.email}`);
    }
}
exports.Studente = Studente;
