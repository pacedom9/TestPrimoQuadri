export enum Dominio {
    Studente = "studente",
    Docente = "docente",
}

export abstract class Persona {
    abstract dominio: Dominio;
    constructor(public id: number, public nome:string, public cognome:string, public dataDiNascita:Date) {
    }

    get email(): string {
        return (`${this.nome.charAt(0).toLowerCase()}${this.cognome.toLowerCase()}@${this.dominio}.toString().com`);
    }

    calcolaEta(): number { 
        let dataCorrente = new Date();
        let eta = dataCorrente.getFullYear() - this.dataDiNascita.getFullYear();
        let mese = dataCorrente.getMonth() - this.dataDiNascita.getMonth();
        if (mese < 0 || (mese === 0 && dataCorrente.getDate() < this.dataDiNascita.getDate())) { 
            eta--;
        }
        return eta;
    }

    getDati(): string {    
        return (`id: ${this.id}.toString() nome: ${this.nome} cognome: ${this.cognome} età: ${this.calcolaEta()} email: ${this.email}.toString() dominio: ${this.dominio}.toString.toLowercase()`);
    }

}