// Obtenemos los elementos relevantes
const hamburguesa = document.getElementById('hamburguesa');
const menuDesplegable = document.getElementById('menu-desplegable');
const cerrarMenu = document.getElementById('cerrar-menu');

// Función para abrir el menú
hamburguesa.addEventListener('click', function() {
    menuDesplegable.style.display = 'block';  // Muestra el menú
});

// Función para cerrar el menú
cerrarMenu.addEventListener('click', function() {
    menuDesplegable.style.display = 'none';  // Oculta el menú
});