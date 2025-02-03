import { Persona, Dominio } from './Persona';    

export class Docente extends Persona{
    dominio = Dominio.Docente;

    override getDati(): string {   
        return (`${this.dominio}: ${this.nome}c${this.cognome} età: ${this.calcolaEta()}, email: ${this.email}`);
    }
}