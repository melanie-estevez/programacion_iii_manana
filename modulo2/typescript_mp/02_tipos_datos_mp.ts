let edadCliente: number = 25;
let nombreCliente: string = "Carlos";
let tieneLicencia: boolean = true;
let datoExtra: any = "Cliente frecuente";

if (edadCliente >= 18 && tieneLicencia) {
    console.log("Cliente apto para rentar un vehiculo");
} else {
    console.log("Cliente no puede rentar");
}

let vehiculosDisponibles: string[] = ["Toyota", "Nissan", "Kia"];
for (let i = 0; i < vehiculosDisponibles.length; i++) {
    console.log(vehiculosDisponibles[i]);
}

enum EstadoRenta {
    Pendiente,
    EnCurso,
    Finalizada
}

console.log(EstadoRenta);
console.log(EstadoRenta.Finalizada);
