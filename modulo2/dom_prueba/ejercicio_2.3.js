// Referencias a los elementos
const toggleBtn = document.getElementById("toggleBtn");
const mensaje = document.getElementById("mensaje");

// Evento para mostrar u ocultar el contenido
toggleBtn.addEventListener("click", () => {
  mensaje.classList.toggle("oculto");
});
