console.log("Objetos - Renta de Vehiculos");

let vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    disponible: true
}
console.log(vehiculo);


console.log(vehiculo.marca);
console.log(vehiculo.modelo);


console.log(vehiculo["año"]);

console.log("Modificacion del objeto");
vehiculo.disponible = false;
console.log(vehiculo);

vehiculo.precioDia = 45;
console.log(vehiculo);


console.log("Eliminar clave del objeto");
delete vehiculo.precioDia;
console.log(vehiculo);

console.log("Recorrer un Objeto");
for (let clave in vehiculo) {
    console.log(clave);
}


console.log("Mostrar claves con Object.keys");
console.log(Object.keys(vehiculo));


console.log("Mostrar valores con Object.values");
console.log(Object.values(vehiculo));

console.log("Objetos Anidados");
let renta = {
    cliente: {
        nombre: "Daniela",
        cedula: "1723456789",
        contacto: {
            correo: "daniela@gmail.com",
            telefono: "022345678",
            celular: "0998765432"
        }
    },
    vehiculo: {
        marca: "Nissan",
        modelo: "Versa",
        año: 2021
    },
    alquileres: [
        {
            fechaInicio: "2025-11-05",
            fechaFin: "2025-11-08",
            total: 135
        },
        {
            fechaInicio: "2025-10-20",
            fechaFin: "2025-10-23",
            total: 150
        },
    ]
};
console.log("Renta:", renta);
