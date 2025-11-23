console.log("Manejo de errores - Renta de Vehiculos");

try {
    console.log(vehiculoNoDefinido); 
} catch (error) {
    console.log("Mensaje de error:", error.message);
}

try {
    console.log("Intentando registrar una renta...");
    throw new Error("Vehiculo no disponible para la fecha seleccionada");
} catch (error) {
    console.log("Mensaje de error:", error.message);
} finally {
    console.log("Finalizando proceso de registro de renta");
}
