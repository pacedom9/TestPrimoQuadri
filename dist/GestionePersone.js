"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionePersone = void 0;
class GestionePersone {
    CreaPersona(persona) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("http://localhost:5149/api/persone", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(persona)
            });
            if (!response.ok) {
                throw new Error("Errore nella creazione della persona");
            }
            const data = yield response.json();
            return data;
        });
    }
    VisualizzaPersonaById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:5149/api/persone/${id}`);
            if (!response.ok) {
                throw new Error(`Errore nel recupero della persona con ID ${id}`);
            }
            const persona = yield response.json();
            console.log(persona);
            return persona;
        });
    }
    VisualizzaPersone() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("http://localhost:5149/api/persone");
            if (!response.ok) {
                throw new Error("Errore nel recupero delle persone");
            }
            const persone = yield response.json();
            console.log(persone);
            return persone;
        });
    }
    ModificaPersona(persona) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:5149/api/persone/${persona.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(persona)
            });
            if (!response.ok) {
                throw new Error(`Errore nell'aggiornamento della persona con ID ${persona.id}`);
            }
            const data = yield response.json();
            return data;
        });
    }
    EliminaPersona(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:5149/api/persone/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error(`Errore nell'eliminazione della persona con ID ${id}`);
            }
            const data = yield response.json();
            console.log('Persona eliminata:', data);
            return data;
        });
    }
}
exports.GestionePersone = GestionePersone;
