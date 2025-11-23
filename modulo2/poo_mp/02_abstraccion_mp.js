class Cliente {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    verificarEdad() {
        if (this.edad >= 18) {
            console.log("El cliente puede rentar un vehiculo");
        } else {
            console.log("El cliente no puede rentar un vehiculo");
        }
    }

    mostrar() {
        console.log(this.nombre, this.edad);
    }
}

const cliente1 = new Cliente("Alma", 20);
cliente1.verificarEdad();
cliente1.mostrar();
