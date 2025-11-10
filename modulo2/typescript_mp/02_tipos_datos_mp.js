var edadCliente = 25;
var nombreCliente = "Carlos";
var tieneLicencia = true;
var datoExtra = "Cliente frecuente";
if (edadCliente >= 18 && tieneLicencia) {
    console.log("Cliente apto para rentar un vehiculo");
}
else {
    console.log("Cliente no puede rentar");
}
var vehiculosDisponibles = ["Toyota", "Nissan", "Kia"];
for (var i = 0; i < vehiculosDisponibles.length; i++) {
    console.log(vehiculosDisponibles[i]);
}
var EstadoRenta;
(function (EstadoRenta) {
    EstadoRenta[EstadoRenta["Pendiente"] = 0] = "Pendiente";
    EstadoRenta[EstadoRenta["EnCurso"] = 1] = "EnCurso";
    EstadoRenta[EstadoRenta["Finalizada"] = 2] = "Finalizada";
})(EstadoRenta || (EstadoRenta = {}));
console.log(EstadoRenta);
console.log(EstadoRenta.Finalizada);
