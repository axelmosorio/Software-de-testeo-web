document.addEventListener('DOMContentLoaded', () => {
    const boton_cerrar = document.querySelector('.cerrar_sesion');
    if (boton_cerrar) {
        boton_cerrar.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
                window.location.href = '../Iniciar_sesion_y_registro/login.html';
            }
        });
    }

    const botonesNav = document.querySelectorAll('.boton_nav');
    botonesNav.forEach(boton => {
        boton.addEventListener('click', () => {
            alert('Navegación de historial (Función de prueba)');
        });
    });

    const botonIrGestion = document.getElementById('boton_ir_gestion');
    if (botonIrGestion) {
        botonIrGestion.addEventListener('click', () => {
            window.location.href = 'Gestionar_casos/gestionar.html';
        });
    }

    const botonIrGenerarInformes = document.getElementById('boton_ir_generar_informes');
    if (botonIrGenerarInformes) {
        botonIrGenerarInformes.addEventListener('click', () => {
            window.location.href = 'Generar_informes/generar.html';
        });
    }

    const opciones = document.querySelectorAll('.opcion_menu');
    opciones.forEach(opcion => {
        opcion.addEventListener('click', function() {
            const textoOpcion = this.innerText;
            alert(`Abriendo: ${textoOpcion}`);
        });
    });
});