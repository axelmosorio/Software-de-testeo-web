document.addEventListener('DOMContentLoaded', () => {
    const boton_cerrar = document.querySelector('.cerrar_sesion');
    if (boton_cerrar) {
        boton_cerrar.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
                window.location.href = '../../Iniciar_sesion_y_registro/login.html';
            }
        });
    }

    const botonesNav = document.querySelectorAll('.boton_nav');
    botonesNav.forEach(boton => {
        boton.addEventListener('click', () => {
            alert('Navegación de historial (Función de prueba)');
        });
    });

    const botonVolverGestionar = document.getElementById('boton_volver_gestionar');
    if (botonVolverGestionar) {
        botonVolverGestionar.addEventListener('click', () => {
            window.location.href = 'gestionar.html';
        });
    }
});