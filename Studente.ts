import { Persona, Dominio } from './Persona';    

export class Studente extends Persona{
    dominio = Dominio.Studente;

    override getDati(): string {   
        return (`${this.dominio}: ${this.nome}c${this.cognome} età: ${this.calcolaEta()}, email: ${this.email}`);
    }
}
