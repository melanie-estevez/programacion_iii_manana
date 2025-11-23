console.log("Funciones - Renta de Vehiculos");

console.log("Forma Clasica");
function mostrarMensaje() {
    console.log("Bienvenido al sistema de renta de vehiculos");
}
mostrarMensaje();

console.log("Forma con parametros y retorno");
function calcularTotal(dias, precioPorDia) {
    return dias * precioPorDia;
}
let total = calcularTotal(5, 45);
console.log("El total por 5 dias es: $", total);

console.log("Funcion flecha");
const descuento = (total, porcentaje) => {
    return total - (total * (porcentaje / 100));
}
let totalConDescuento = descuento(225, 10);
console.log("Total con 10% de descuento: $", totalConDescuento);

console.log("Funcion con retorno directo");
const calcularImpuesto = monto => monto * 0.12;
console.log("IVA del total: $", calcularImpuesto(total));

console.log("Funcion con parametros por defecto");
function generarMensaje(nombreCliente, vehiculo = "vehiculo estandar") {
    return "Estimado " + nombreCliente + ", su " + vehiculo + " esta listo para la renta.";
}
let mensaje1 = generarMensaje("Daniela");
let mensaje2 = generarMensaje("Daniela", "SUV de lujo");
console.log(mensaje1);
console.log(mensaje2);
