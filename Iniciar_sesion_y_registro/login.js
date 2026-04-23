document.addEventListener('DOMContentLoaded', () => {
    const boton_login = document.getElementById('boton_login');
    if (boton_login) {
        boton_login.addEventListener('click', (event) => {
            const user = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (user && password) {
                event.preventDefault();
                alert(`Bienvenido al sistema ${user}!, redirigiendo al menu`);
                window.location.href='../Menu/menu_p.html'
            }
        })
    }
})