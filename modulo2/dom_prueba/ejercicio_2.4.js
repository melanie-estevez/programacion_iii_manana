// Referencias a los elementos
const numeroInput = document.getElementById("numero");
const verificarBtn = document.getElementById("verificarBtn");
const resultado = document.getElementById("resultado");

// Evento para verificar si el número es par o impar
verificarBtn.addEventListener("click", () => {
  const numero = parseInt(numeroInput.value);
  resultado.className = ""; // limpia clases previas

  if (isNaN(numero)) {
    resultado.textContent = "Por favor ingrese un número válido.";
    resultado.classList.add("error");
    return;
  }

  if (numero % 2 === 0) {
    resultado.textContent = "Es un número par.";
    resultado.classList.add("par");
  } else {
    resultado.textContent = "Es un número impar.";
    resultado.classList.add("impar");
  }
});
