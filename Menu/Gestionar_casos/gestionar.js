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

    const botonVolverMenu = document.getElementById('boton_volver_menu');
    if (botonVolverMenu) {
        botonVolverMenu.addEventListener('click', () => {
            window.location.href = '../menu_p.html';
        });
    }

    function actualizarContador() {
        const elementos = document.querySelectorAll('.elemento_actividad');
        const contadorElemento = document.querySelector('.contador_casos');
        if (contadorElemento) {
            contadorElemento.textContent = `Total: ${elementos.length}`;
        }
    }
    actualizarContador();
});