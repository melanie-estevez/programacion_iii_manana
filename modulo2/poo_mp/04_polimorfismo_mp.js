class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar() {
        console.log("Empleado atendiendo clientes ...");
    }

    calcularBono() {
        return this.salario * 0.10;
    }

    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}

class Vendedor extends Empleado {
    calcularBono() {
        return this.salario * 0.15;
    }

    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 3;
    }
}

class Mecanico extends Empleado {
    calcularBono() {
        return this.salario * 0.08;
    }
}

const vendCarlos = new Vendedor("Carlos", 1800);
const mecLuis = new Mecanico("Luis", 1300);

vendCarlos.trabajar();
mecLuis.trabajar();

console.log(vendCarlos.calcularBono());
console.log(mecLuis.calcularBono());
console.log(vendCarlos.horasExtra(5));
console.log(mecLuis.horasExtra(4));
