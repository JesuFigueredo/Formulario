var cambia = document.getElementById("botoncambia");
var titulo = document.getElementById("titulo");
var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var boton = document.getElementById("boton");
var p2 = document.getElementById("p2");
var form = document.getElementsByClassName("container-form  ")
const login = document.getElementById("form");
const enlace = "http://localhost:1337/api";
var respuesta = enlace + "/auth/local/register";
var i = 0;//0 iniciar sesión, 1 registrarse;


cambia.addEventListener("click", function () {
    cambia.style.opacity = 0;
    titulo.style.opacity = 0;
    p2.style.opacity = 0;
    boton.style.opacity = 0;


    if (i == 0) {
        cambia.innerHTML = "Registrate"
        titulo.innerHTML = "Iniciar Sesión";
        email.setAttribute("name", "identifier");
        nombre.style.display = 'none';
        boton.innerHTML = "Iniciar Sesion";
        p2.innerHTML = "Si aún no tienes una cuenta por favor registrese aqui";

        setTimeout(function () {
            cambia.style.opacity = 1;
            p2.style.opacity = 1;
            boton.style.opacity = 1;
            titulo.style.opacity = 1;
        }, 350)
        respuesta = enlace + "/auth/local/";

        i = 1;
        console.log("test" + i);

    } else {
        cambia.style.opacity = 0;
        cambia.innerHTML = "Iniciar Sesión"
        titulo.innerHTML = "Crear Cuenta";
        email.setAttribute("name", "email");
        nombre.style.display = 'block';
        p2.innerHTML = "Si ya tienes una cuenta por favor inicia sesion aqui";
        setTimeout(function () {
            cambia.style.opacity = 1;
            p2.style.opacity = 1;
            boton.style.opacity = 1;
            titulo.style.opacity = 1;
        }, 350)
        respuesta = enlace + "/auth/local/register";
        i = 0;
        console.log("test" + i);

    }


});



//Registrarse


async function sendData(login) {
    document.getElementById("username").value = document.getElementById("email").value;
    try {
        const formData = new FormData(login)
        const queryString = new URLSearchParams(formData).toString()
        const response = await fetch(respuesta, {
            method: "POST",
            body: queryString, headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },

        });

        if (!response.ok) {
            const message = `Error: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();
        localStorage.setItem("data_token", data.jwt);
        window.location.href = "web/";



    } catch (error) {
        console.log(error)
    }
}

login.addEventListener('submit', (e) => {
    e.preventDefault();
    sendData(login);

})

