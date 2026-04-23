document.addEventListener('DOMContentLoaded', () => {
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
});