function generarTabla(){
    const numeroEntero= parseInt(document.getElementById('numero').value);
    const resultado=(document.getElementById('resultado').value)
}

// Evento del botón
generarTabla.addEventListener("click", () => {
  const numero = parseInt(numeroInput.value);
  resultadoDiv.innerHTML = ""; // Limpia resultados previos

  if (isNaN(numero) || numero < 1) {
    resultadoDiv.innerHTML = "<span style='color:red;'>Por favor ingresa un número válido.</span>";
    return;
  }

  // Generar tabla de multiplicar
  for (let i = 1; i <= 10; i++) {
    const resultado = `${numero} x ${i} = ${numero * i}`;
    const linea = document.createElement("p");
    linea.textContent = resultado;
    resultadoDiv.appendChild(linea);
  }
});
