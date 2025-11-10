import { Vehiculo } from "./11_herencia_mp";

export class Camion extends Vehiculo {
    getCapacidadCarga(): void {
        console.log("Cargas pesadas");
    }
}

const miCamion = new Camion("Volvo", "Cargamento");
console.log(miCamion.marca);
console.log(miCamion.tipo);
miCamion.moverse();
miCamion.getCapacidadCarga();
