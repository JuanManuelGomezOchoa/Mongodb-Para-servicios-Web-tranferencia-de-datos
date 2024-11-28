import { modeloJugadores } from "../models/jugadoresModel.js";

modeloJugadores.create({
    name:"El chino",
    apPat:"Huerta",
    numero:10
})

export const test = ()=>{
    console.log("Funciona el controlador")
}