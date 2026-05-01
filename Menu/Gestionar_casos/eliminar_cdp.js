document.addEventListener('DOMContentLoaded', () => {
    
    const listaCasos = document.getElementById('lista_casos');
    const buscador = document.getElementById('buscador_casos');
    const inputNombre = document.getElementById('nombre_caso_modificar');
    const textarea = document.getElementById('textarea_eliminar');
    const numerosLinea = document.getElementById('numeros_linea');
    const badgeEstado = document.getElementById('badge_estado');
    const botonGuardar = document.getElementById('boton_guardar');
    const botonCancelar = document.getElementById('boton_cancelar');

    let casoSeleccionado = null;   
    let contenidoOriginal = '';   
    let nombreOriginal = '';  

    function actualizarNumeros() {
        const lineas = textarea.value.split('\n').length;
        numerosLinea.innerHTML = '';
        for (let i = 1; i <= lineas; i++) {
            const span = document.createElement('span');
            span.textContent = i + '.';
            numerosLinea.appendChild(span);
        }
    }

    function seleccionarCaso(item) {
        document.querySelectorAll('.item_caso').forEach(i => i.classList.remove('seleccionado'));

        item.classList.add('seleccionado');
        casoSeleccionado  = item;

        const nombre = item.dataset.nombre;
        const contenido = item.dataset.contenido;

        nombreOriginal = nombre;
        contenidoOriginal = contenido;

        inputNombre.value = nombre;
        inputNombre.removeAttribute('readonly');
        textarea.value = contenido;
        textarea.disabled = false;

        actualizarNumeros();
        actualizarBadge('sin_cambios');
        botonGuardar.disabled = true;
    }

    listaCasos.querySelectorAll('.item_caso').forEach(item => {
        item.addEventListener('click', () => seleccionarCaso(item));
    });

    function haycambios() {
        return (
            textarea.value !== contenidoOriginal ||
            inputNombre.value !== nombreOriginal
        );
    }

    function actualizarBadge(estado) {
        badgeEstado.className = 'badge_sin_cambios';
        if (estado === 'modificado') {
            badgeEstado.classList.add('modificado');
            badgeEstado.textContent = 'Cambios sin guardar';
            botonGuardar.disabled   = false;
        } else if (estado === 'guardado') {
            badgeEstado.classList.add('guardado');
            badgeEstado.textContent = 'Guardado';
            botonGuardar.disabled   = true;
        } else {
            badgeEstado.textContent = 'Sin cambios';
            botonGuardar.disabled   = true;
        }
    }

    textarea.addEventListener('input', () => {
        actualizarNumeros();
        actualizarBadge(hayambios() ? 'modificado' : 'sin_cambios');
    });

    inputNombre.addEventListener('input', () => {
        actualizarBadge(hayCambios() ? 'modificado' : 'sin_cambios');
    });

    botonGuardar.addEventListener('click', () => {
        if (!casoSeleccionado) return;

        const nuevoNombre = inputNombre.value.trim();
        const nuevoContenido = textarea.value;

        if (!nuevoNombre) {
            alert('El nombre del caso no puede estar vacío.');
            return;
        }

        casoSeleccionado.dataset.nombre = nuevoNombre;
        casoSeleccionado.dataset.contenido = nuevoContenido;
        casoSeleccionado.querySelector('.nombre_caso').textContent = nuevoNombre;

        nombreOriginal = nuevoNombre;
        contenidoOriginal = nuevoContenido;

        actualizarBadge('guardado');
    });

    botonCancelar.addEventListener('click', () => {
        if (!casoSeleccionado) return;

        if (haycambios()) {
            if (!confirm('¿Descartar los cambios realizados?')) return;
        }

        textarea.value = contenidoOriginal;
        inputNombre.value = nombreOriginal;
        actualizarNumeros();
        actualizarBadge('sin_cambios');
    });

    buscador.addEventListener('input', () => {
        const termino = buscador.value.toLowerCase();
        document.querySelectorAll('.item_caso').forEach(item => {
            const nombre  = item.dataset.nombre.toLowerCase();
            item.style.display = nombre.includes(termino) ? 'block' : 'none';
        });
    });

    const botonCerrar = document.querySelector('.cerrar_sesion');
    if (botonCerrar) {
        botonCerrar.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
                window.location.href = '../../Iniciar sesion y registro/login.html';
            }
        });
    }

    const botonVolverGestionar = document.getElementById('boton_volver_gestionar');
    if (botonVolverGestionar) {
        botonVolverGestionar.addEventListener('click', () => {
            window.location.href = 'gestionar.html';
        });
    }

    const botonEjecutar = document.getElementById('boton_ejecutar');
    if (botonEjecutar) {
    botonEjecutar.addEventListener('click', () => {
        alert('Ejecutar: función disponible próximamente');
        });
    }

    const botonResultado = document.getElementById('boton_resultado');
    if (botonResultado) {
    botonResultado.addEventListener('click', () => {
        alert('Resultado: función disponible próximamente');
        });
    }

    const botonAutomatizar = document.getElementById('boton_eliminar');
    if (botonAutomatizar) {
    botonAutomatizar.addEventListener('click', () => {
        alert('Eliminar: función disponible próximamente');
        });
    }

    const botonesNav = document.querySelectorAll('.boton_nav');
    botonesNav.forEach(boton => {
        boton.addEventListener('click', () => {
            alert('Navegación de historial (Función de prueba)');
        });
    });

});