// script.js
// Si prefieres jQuery, asegúrate de incluirlo antes de este script en el HTML.

// Obtener el botón
const boton = document.querySelector(".menuboton");

// Agregar evento de clic al botón
boton.addEventListener("click", function() {
  boton.classList.toggle("active");
});
