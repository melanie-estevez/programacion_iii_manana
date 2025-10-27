for (let i=1; i<=10; i++){
    console.log("Vehiculo numero:",i);
}


let ganacias=0;

for(let i=1; i<= 5; i++){
    ganacias += 70;
}
console.log("Ganancia total de 5 alquileres: $",ganacias);


let cliente="Margarita";
for(let i=0; i< cliente.length; i++){
    console.log(cliente[i]);
}

for (let i = 1; i <= 10; i++) {
    console.log("Reserva N°", i, "total a pagar: $",i * 20);
}


console.log("Bucle While");
console.log("Dias de alquiler:");
let i=1
while(i<=7){
    console.log("Dia",i,"del alquiler en curso");
    i++;
}


let vehiculos_disponibles = ["Toyota", "Kia", "Nissan", "Chevrolet", "Ford"];
let indice = 0;
while (indice < vehiculos_disponibles.length) {
    console.log("Vehiculo disponible:",vehiculos_disponibles[indice]);
    indice++;
}


let numero = 1;
while (numero<=10) {
    if (numero %2==0)
        console.log("Vehiculo", numero,"esta en mantenimiento");
    numero++;
}

let dias_restantes = 5;
do {
    console.log("Dias restantes para devolver el vehiculo:",dias_restantes);
    dias_restantes--;
} while (dias_restantes != 0);


let precio_base = 1;
while (precio_base <= 7) {
    console.log(precio_base, "* 30= $", precio_base * 30, "por", precio_base, "dias");
    precio_base++;
}


let alquileres=[5, 12, 8, 15, 9, 3]; 
let posicion=0;
let mas_alquilado=0;

while (posicion < alquileres.length) {
    if (alquileres[posicion] > mas_alquilado) {
        mas_alquilado = alquileres[posicion];
    }
    posicion++;
}
console.log("El vehiculo mas alquilado tuvo", mas_alquilado, "reservas este mes.");