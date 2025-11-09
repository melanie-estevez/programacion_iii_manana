console.log("Clases - Renta de Vehiculos");

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    encender() {
        console.log(`${this.marca} ${this.modelo} esta encendido`);
    }

    conducir() {
        console.log(`${this.marca} ${this.modelo} esta en movimiento`);
    }

    apagar() {
        console.log(`${this.marca} ${this.modelo} esta apagado`);
    }
}

const miVehiculo = new Vehiculo('Nissan', 'Versa');
miVehiculo.encender();
miVehiculo.conducir();
miVehiculo.apagar();
console.log(miVehiculo.marca);
console.log(miVehiculo.modelo);
