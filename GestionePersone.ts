import { Persona } from "./Persona";

export class GestionePersone {
    async CreaPersona(persona: Persona) {
        const url = await fetch("http://localhost:7122/api/Persona", {
            method: "POST",
            body: JSON.stringify(persona)
        });
}}
    
