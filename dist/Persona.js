"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = exports.Dominio = void 0;
var Dominio;
(function (Dominio) {
    Dominio["Studente"] = "studente";
    Dominio["Docente"] = "docente";
})(Dominio || (exports.Dominio = Dominio = {}));
class Persona {
    constructor(id, nome, cognome, dataDiNascita) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.dataDiNascita = dataDiNascita;
    }
    get email() {
        return (`${this.nome.charAt(0).toLowerCase()}${this.cognome.toLowerCase()}@${this.dominio}.toString().com`);
    }
    calcolaEta() {
        let dataCorrente = new Date();
        let eta = dataCorrente.getFullYear() - this.dataDiNascita.getFullYear();
        let mese = dataCorrente.getMonth() - this.dataDiNascita.getMonth();
        if (mese < 0 || (mese === 0 && dataCorrente.getDate() < this.dataDiNascita.getDate())) {
            eta--;
        }
        return eta;
    }
    getDati() {
        return (`id: ${this.id}.toString() nome: ${this.nome} cognome: ${this.cognome} età: ${this.calcolaEta()} email: ${this.email}.toString() dominio: ${this.dominio}.toString.toLowercase()`);
    }
}
exports.Persona = Persona;
