// Espera a que todo el contenido del HTML se cargue
document.addEventListener('DOMContentLoaded', function() {

    // Selecciona todos los enlaces del menú de categorías
    const linksCategorias = document.querySelectorAll('#menu-categorias nav a');
    
    // Selecciona todas las secciones que contienen las plantas
    const seccionesPlantas = document.querySelectorAll('.seccion-planta');

    // Función para manejar el clic en un enlace
    function mostrarSeccion(event) {
        // Previene el comportamiento por defecto del enlace (que es saltar en la página)
        event.preventDefault();

        // 1. Ocultar TODAS las secciones de plantas
        seccionesPlantas.forEach(function(seccion) {
            seccion.style.display = 'none';
        });

        // 2. Mostrar solo la sección que corresponde al enlace clickeado
        // Obtenemos el ID del objetivo desde el atributo 'data-target' del enlace
        const targetId = event.currentTarget.getAttribute('data-target');
        const seccionAMostrar = document.getElementById(targetId);
        
        if (seccionAMostrar) {
            seccionAMostrar.style.display = 'block'; // 'block' la hace visible
        }
    }

    
    linksCategorias.forEach(function(link) {
        link.addEventListener('click', mostrarSeccion);
    });

});