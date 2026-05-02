document.addEventListener('DOMContentLoaded', () => {

    // ── Elementos del DOM ──────────────────────────
    const listaCasos        = document.getElementById('lista_casos_informe');
    const buscador          = document.getElementById('buscador_informe');
    const estadoVacio       = document.getElementById('estado_vacio');
    const contenidoInforme  = document.getElementById('contenido_informe');
    const tituloInforme     = document.getElementById('titulo_informe');
    const numerosInforme    = document.getElementById('numeros_informe');
    const lineasCodigo      = document.getElementById('lineas_codigo_informe');
    const marcadores        = document.getElementById('marcadores_informe');
    const numeroErrores     = document.getElementById('numero_errores');
    const textoResumen      = document.getElementById('texto_resumen');
    const botonDescargar    = document.getElementById('boton_descargar');
    const tarjetaErrores    = document.querySelector('.tarjeta_errores_informe');

    let casoActivo = null;

    function cargarInforme(item) {
        document.querySelectorAll('.item_caso').forEach(i => i.classList.remove('seleccionado'));
        item.classList.add('seleccionado');
        casoActivo = item;

        const nombre        = item.dataset.nombre;
        const contenido     = item.dataset.contenido;
        const erroresTotal  = parseInt(item.dataset.errores);
        const lineasError   = item.dataset.erroresLineas
            ? item.dataset.erroresLineas.split(',').map(n => parseInt(n.trim()))
            : [];
        const resumen       = item.dataset.resumen;

        tituloInforme.textContent = nombre + ': resultados de este caso de prueba';

        numerosInforme.innerHTML  = '';
        lineasCodigo.innerHTML    = '';
        marcadores.innerHTML      = '';

        const lineas = contenido.split('\n');
        lineas.forEach((linea, index) => {
            const numeroLinea = index + 1;
            const tieneError  = lineasError.includes(numeroLinea);

            const spanNum = document.createElement('span');
            spanNum.textContent = numeroLinea + '.';
            numerosInforme.appendChild(spanNum);

            const divLinea = document.createElement('div');
            divLinea.classList.add('linea_codigo');
            if (tieneError) divLinea.classList.add('linea_error');
            divLinea.textContent = linea;
            lineasCodigo.appendChild(divLinea);

            const divMarcador = document.createElement('div');
            divMarcador.classList.add('marcador_linea');
            divMarcador.textContent = tieneError ? '✕' : '';
            marcadores.appendChild(divMarcador);
        });

        numeroErrores.textContent = erroresTotal;
        textoResumen.textContent  = resumen;

        if (erroresTotal === 0) {
            tarjetaErrores.classList.add('sin_errores');
        } else {
            tarjetaErrores.classList.remove('sin_errores');
        }

        estadoVacio.style.display      = 'none';
        contenidoInforme.style.display = 'flex';
    }

    listaCasos.querySelectorAll('.item_caso').forEach(item => {
        item.addEventListener('click', () => cargarInforme(item));
    });

    buscador.addEventListener('input', () => {
        const termino = buscador.value.toLowerCase();
        document.querySelectorAll('#lista_casos_informe .item_caso').forEach(item => {
            item.style.display = item.dataset.nombre.toLowerCase().includes(termino)
                ? 'block'
                : 'none';
        });
    });

    botonDescargar.addEventListener('click', () => {
        if (!casoActivo) return;

        const nombre       = casoActivo.dataset.nombre;
        const contenido    = casoActivo.dataset.contenido;
        const errores      = casoActivo.dataset.errores;
        const lineasError  = casoActivo.dataset.erroresLineas || 'Ninguna';
        const resumen      = casoActivo.dataset.resumen;

        const texto =
`INFORME DE CASO DE PRUEBA
==========================
Caso: ${nombre}

CÓDIGO DEL CASO:
${contenido}

ERRORES DETECTADOS: ${errores}
Líneas con error: ${lineasError}

RESUMEN:
${resumen}
`;

        const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href     = url;
        a.download = `informe_${nombre.replace(/\s+/g, '_')}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    });

    const botonCerrar = document.querySelector('.cerrar_sesion');
    if (botonCerrar) {
        botonCerrar.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
                window.location.href = '../Iniciar_sesion_y_registro/login.html';
            }
        });
    }

    // ── Navegación ─────────────────────────────────
    const botonVolverMenu = document.getElementById('boton_volver_menu');
    if (botonVolverMenu) {
        botonVolverMenu.addEventListener('click', () => {
            window.location.href = '../menu_p.html';
        });
    }

    const botonesNav = document.querySelectorAll('.boton_nav');
    botonesNav.forEach(boton => {
        boton.addEventListener('click', () => {
            alert('Navegación de historial (Función de prueba)');
        });
    });

});