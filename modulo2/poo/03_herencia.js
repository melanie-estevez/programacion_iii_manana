class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    hacerSonido(){
        console.log("Reliza algun ruido")
    }
}

class Perro extends Animal{}
const miPerro = new Perro('Tobby');
const miAnimal = new Animal ('Lucero')
miPerro.hacerSonido();