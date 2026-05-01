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

    const textarea = document.getElementById('textarea_creacion');
    const numerosLinea = document.getElementById('numeros_linea_creacion');
    
    function actualizarNumerosCreacion() {
        const lineas = textarea.value === '' ? 1 : textarea.value.split('\n').length;
        numerosLinea.innerHTML = '';
        for (let i = 1; i <= lineas; i++) {
            const span = document.createElement('span');
            span.textContent = i + '.';
            numerosLinea.appendChild(span);
        }
    }
    
    textarea.addEventListener('input', actualizarNumerosCreacion);
    textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            setTimeout(actualizarNumerosCreacion, 0);
        }
    });
});