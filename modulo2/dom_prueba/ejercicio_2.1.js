// Referencias a los elementos
const numeroInput = document.getElementById("numero");
const generarBtn = document.getElementById("generarBtn");
const resultadoDiv = document.getElementById("resultado");

// Evento del botón
generarBtn.addEventListener("click", () => {
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
