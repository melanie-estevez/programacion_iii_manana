console.log("Herencia - Renta de Vehiculos");

class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }

    mostrarInfo() {
        console.log("Este es un vehiculo de renta");
    }
}

class Auto extends Vehiculo {}

const miAuto = new Auto("Toyota");
const miVehiculo = new Vehiculo("Nissan");

miAuto.mostrarInfo();
