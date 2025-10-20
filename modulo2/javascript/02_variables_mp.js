console.log("Variables");

bienvenida="Bienvenido a RentaCar"
console.log("Variable bienvenida",bienvenida);
console.log("Tipo de variable", typeof(bienvenida));


precio=70
console.log("Variable numero", precio);
console.log("Tipo de variable", typeof(precio));


oferta=true;
console.log("Variable booleana oferta:",oferta);
console.log("Tipo de variable:", typeof(oferta));


fechaDevolucion=undefined;
console.log("Variable indefinida fechaDevolucion:", fechaDevolucion);
console.log("Tipo de variable:", typeof(fechaDevolucion));


autoAsignado=null;
console.log("Variable nula autoAsignado:", autoAsignado);
console.log("Tipo de variable:", typeof(autoAsignado));


numeroReserva = 9876543210123456789n;
console.log("Variable BigInt numeroReserva:",numeroReserva);
console.log("Tipo de variable:", typeof(numeroReserva));


cliente = {
    nombre: "Mel",
    edad: 21,
    autoReservado: "SUV Familiar"
};
console.log("Variable objeto cliente:", cliente);
console.log("Tipo de variable:", typeof(cliente));


preciosAutos = [25, 40, 55, 80];
console.log("Variable Array preciosAutos:", preciosAutos);
console.log("Tipo de variable:", typeof(preciosAutos));