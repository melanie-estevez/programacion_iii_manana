function saludarCliente(nombre) {
    return "Bienvenido ".concat(nombre, " al sistema de renta de vehiculos");
}
console.log(saludarCliente("Melanie"));
var calcularCosto = function (dias, precioDia) {
    return dias * precioDia;
};
console.log(calcularCosto(5, 40));
function mostrarMensaje() {
    console.log("Gracias por preferir nuestra empresa");
    console.log("Estamos para ayudarte con tu renta");
}
mostrarMensaje();
function calcularCostoSeguro(dias) {
    console.log("Costo del seguro por " + dias + " dias: $" + (dias * 5));
}
console.log(calcularCostoSeguro(5));
calcularCostoSeguro(7);
