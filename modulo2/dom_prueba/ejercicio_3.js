// Referencias a los elementos
const colorSelect = document.getElementById("colorSelect");
const sizeSelect = document.getElementById("sizeSelect");
const applyBtn = document.getElementById("applyBtn");
const message = document.getElementById("message");

// Evento del botón
applyBtn.addEventListener("click", () => {
  const selectedColor = colorSelect.value;
  const selectedSize = sizeSelect.value;

  message.style.color = selectedColor;
  message.style.fontSize = selectedSize;
});
