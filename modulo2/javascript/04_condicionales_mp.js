let autos_disponiles = 20;

if (autos_disponiles > 1) {
    console.log("Hay vehículos disponibles para alquilar");
} else {
    console.log("No hay vehiculos disponibles en este momento");
}



let metodo_pago = "efectivo";

if(metodo_pago === "tarjeta") {
    console.log("Pago procesado con tarjeta correctamente");
} else if (metodo_pago === "efectivo"){
    console.log("Pago en efectivo confirmado");
} else {
    console.log("Metodo de pago no reconocido");
}



let edad_cliente = 21;
let tiene_licencia = true;

if(edad_cliente >=18 && tiene_licencia) {
    console.log("Cliente apto para alguilar un vehiculo");
} else if (edad_cliente >=18 && !tiene_licencia){
    console.log("El cliente necesita presentar licencia de conducir");
} else {
    console.log ("El cliente no cumple la edad minima para alquilar");
}



let dia = "Viernes";

switch (dia){
    case "Lunes":
        console.log("10% de descuento en autos compactos");
        break;
    case "Viernes":
        console.log("20% de descuento en SUVs");
        break;
    default:
        console.log("No hay promociones especiales hoy")
}
