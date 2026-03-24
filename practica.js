document.addEventListener("DOMContentLoaded", () => {
    /*LOGICA DEL INICIO DE SESION*/
    const boton_login = document.getElementById("boton_login");
    if (boton_login) {
        boton_login.addEventListener("click", (event) => {
            const usuario = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (usuario && password) {
                event.preventDefault();
                alert(`Bienvenido de nuevo, ${usuario}! Redirigiendo al menu...`);
                window.location.href = "menu_p.html";
            }
        })
    }
    /*LOGICA DEL REGISTRO*/
    const boton_registro = document.getElementById("boton_registro");
    if (boton_registro) {
        boton_registro.addEventListener("click", (event) => {
            const email = document.getElementById("email").value;
            const usuario = document.getElementById("usuario").value;
            const password = document.getElementById("password").value;

            if (email && usuario && password) {
                event.preventDefault();
                alert(`Gracias por registrarte ${usuario}, hemos enviado un correo a ${email}`);
                window.location.href = "login.html";
            }
        })
    }
    /*LOGICA RECUPERAR PASSWORD*/
    const boton_recuperar = document.getElementById("boton_recuperar");
    if (boton_recuperar) {
        boton_recuperar.addEventListener("click", (event) => {
            const email = document.getElementById("email").value;

            if (email) {
                event.preventDefault();
                alert(`Te enviaremos un enlace a tu correo ${email} para que puedas reestablecer tu password`)
                window.location.href = "login.html"
            }
        })
    }
    /*LOGICA CERRAR SESION*/
    const boton_cerrar = document.querySelector(".cerrar_sesion");
    if (boton_cerrar) {
        boton_cerrar.addEventListener("click", () => {
            if (confirm("Estas seguro de que deseas cerrar sesion?")) {
                window.location.href = "login.html";
            }
        })
    }

    const opciones = document.querySelectorAll(".opcion_menu");
    opciones.forEach(opcion => {
        opcion.addEventListener("click", function() {
            const texto_opcion = this.innerText;
            alert(`Abriendo opcion${opcion}`)
        })
    })
})