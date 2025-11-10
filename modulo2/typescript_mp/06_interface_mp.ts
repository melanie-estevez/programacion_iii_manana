import { Cliente } from "./05_interface_mp";

const cliente1: Cliente = {
    id: 201,
    nombre: "Juan Perez"
}

const cliente2: Cliente = {
    id: 202,
    nombre: "Marta Suarez",
    correo: "ana@rentaautos.com"
}

console.log(cliente1);
console.log(cliente1.id);
console.log(cliente1.nombre);
console.log(cliente1.correo);
console.log(cliente2);
console.log(cliente2.id);
console.log(cliente2.nombre);
console.log(cliente2.correo);
