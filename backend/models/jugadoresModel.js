import { Schema, model } from "mongoose";

const EsquemaJugadores = new Schema ({
    name : String,
    apPat: String,
    numero: Number
})

export const modeloJugadores = new model ("tabla de jugadores", EsquemaJugadores)