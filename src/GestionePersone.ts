import { Persona } from "./Persona";

export class GestionePersone {

    async CreaPersona(persona: Persona) {
        const response = await fetch("http://localhost:5149/api/persone", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(persona)
        });

        if (!response.ok) {
            throw new Error("Errore nella creazione della persona");
        }

        const data = await response.json();
        return data;  
    }

    async VisualizzaPersonaById(id: number) {
        const response = await fetch(`http://localhost:5149/api/persone/${id}`);

        if (!response.ok) {
            throw new Error(`Errore nel recupero della persona con ID ${id}`);
        }

        const persona = await response.json();
        console.log(persona);
        return persona; 
    }

    async VisualizzaPersone() {
        const response = await fetch("http://localhost:5149/api/persone");

        if (!response.ok) {
            throw new Error("Errore nel recupero delle persone");
        }

        const persone = await response.json();
        console.log(persone);
        return persone; 
    }

    async ModificaPersona(persona: Persona) {
        const response = await fetch(`http://localhost:5149/api/persone/${persona.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(persona)
        });

        if (!response.ok) {
            throw new Error(`Errore nell'aggiornamento della persona con ID ${persona.id}`);
        }

        const data = await response.json();
        return data;  
    }

    async EliminaPersona(id: number) {
        const response = await fetch(`http://localhost:5149/api/persone/${id}`, {
            method: "DELETE"
        });


        if (!response.ok) {
            throw new Error(`Errore nell'eliminazione della persona con ID ${id}`);
        }

        const data = await response.json();
        console.log('Persona eliminata:', data);
        return data;
    }
}
