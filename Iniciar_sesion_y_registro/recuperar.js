document.addEventListener('DOMContentLoaded', () => {
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
});