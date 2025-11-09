console.log("Arrays o arreglos - Renta de Vehículos");

let vehiculos = ["Toyota Corolla", "Nissan Versa", "Chevrolet Spark", "Hyundai Tucson"];
let autosDisponibles = new Array();
let autosReservados = [];
console.log("Arreglo de vehículos original:", vehiculos);
console.log("Autos disponibles:", autosDisponibles);
console.log("Autos reservados:", autosReservados);

console.log("Acceso a los elementos del Array");
console.log("Primer vehículo:", vehiculos[0]);
console.log("ultimo vehículo:", vehiculos[3]);

console.log("Modificar elemento del array");
vehiculos[0] = "Toyota Yaris";
console.log("Lista actualizada:", vehiculos);

console.log("Agregar un vehículo al final del array");
vehiculos.push("Kia Rio");
console.log(vehiculos);

console.log("Agregar un vehículo al inicio del array");
vehiculos.unshift("Mazda CX-5");
console.log(vehiculos);

console.log("Eliminar el ultimo vehículo del array");
vehiculos.pop();
console.log(vehiculos);

console.log("Eliminar el primer vehículo del array");
vehiculos.shift();
console.log(vehiculos);

console.log("Iteracion con While");
let indice = 0;
while (indice < vehiculos.length) {
    console.log("Vehículo", indice, ":", vehiculos[indice]);
    indice++;
}

console.log("Iteracion con For");
for (let i = 0; i < vehiculos.length; i++) {
    console.log(vehiculos[i]);
}

console.log("Iteracion con For ... of");
for (let auto of vehiculos) {
    console.log(auto);
}

console.log("Iteracion con For Each");
vehiculos.forEach(function(auto, indice) {
    console.log("Posicion", indice, ":", auto);
});
