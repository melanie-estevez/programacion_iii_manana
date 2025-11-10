function saludarCliente(nombre?: string): string {
    return `Bienvenido ${nombre} al sistema de renta de vehiculos`;
}
console.log(saludarCliente("Melanie"));


const calcularCosto = (dias: number, precioDia: number): number => {
    return dias * precioDia;
}
console.log(calcularCosto(5, 40));

function mostrarMensaje(): void {
    console.log("Gracias por preferir nuestra empresa");
    console.log("Estamos para ayudarte con tu renta");
}
mostrarMensaje();

function calcularCostoSeguro(dias: number): void {
    console.log("Costo del seguro por " + dias + " dias: $" + (dias * 5));
}
console.log(calcularCostoSeguro(5));
calcularCostoSeguro(7);
