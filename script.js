document.addEventListener('DOMContentLoaded', () => {
    const boton_login = document.getElementById('boton_login');
    if (boton_login) {
        boton_login.addEventListener('click', (event) => {
            const user = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (user && password) {
                event.preventDefault();
                alert(`¡Bienvenido de nuevo, ${user}! Redirigiendo al menú...`);
                window.location.href = 'menu_p.html'; 
            }
        });
    }

    const boton_registro = document.getElementById('boton_registro');
    if (boton_registro) {
        boton_registro.addEventListener('click', (event) => {
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (email && username && password) {
                event.preventDefault();
                alert(`¡Gracias por registrarte, ${username}! Hemos enviado un correo a ${email}.`);
                window.location.href = 'login.html';
            }
        });
    }

    const boton_recuperar = document.getElementById('btn_recuperar');
    if (boton_recuperar) {
        boton_recuperar.addEventListener('click', (event) => {
            const email = document.getElementById('email_recuperar').value;
            
            if (email) {
                event.preventDefault();
                alert(`Se ha enviado un enlace de recuperación a: ${email}`);
                window.location.href = 'login.html';
            }
        });
    }

    const boton_cerrar = document.querySelector('.cerrar_sesion');
    if (boton_cerrar) {
        boton_cerrar.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
                window.location.href = 'login.html';
            }
        });
    }

    const opciones = document.querySelectorAll('.opcion_menu');
    opciones.forEach(opcion => {
        opcion.addEventListener('click', function() {
            const textoOpcion = this.innerText;
            alert(`Abriendo: ${textoOpcion}`);
        });
    });

    const botonesNav = document.querySelectorAll('.boton_nav');
    botonesNav.forEach(boton => {
        boton.addEventListener('click', () => {
            alert('Navegación de historial (Función de prueba)');
        });
    });

    const botonIrGestion = document.getElementById('boton_ir_gestion');
    if (botonIrGestion) {
        botonIrGestion.addEventListener('click', () => {
            window.location.href = 'gestionar.html';
        });
    }

    const botonVolverMenu = document.getElementById('boton_volver_menu');
    if (botonVolverMenu) {
        botonVolverMenu.addEventListener('click', () => {
            window.location.href = 'menu_p.html';
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