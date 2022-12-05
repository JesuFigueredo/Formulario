var cambia = document.getElementById("botoncambia");
var titulo = document.getElementById("titulo");
var nombre = document.getElementById("nombre");
var boton = document.getElementById("boton");
var p2 = document.getElementById("p2");

var i = 1;


cambia.addEventListener("click", function () {


    if (i === 1) {
        cambia.innerHTML = "Registrate"
        titulo.innerHTML = "Iniciar Sesion";
        nombre.style.display = 'none';
        boton.innerHTML = "Iniciar Sesion";
        p2.innerHTML = "Si aún no tienes una cuenta por favor registrese aqui";

        i = 0;
    } else {
        cambia.innerHTML = "Iniciar Sesión"
        titulo.innerHTML = "Crear Cuenta";
        nombre.style.display = 'block';
        p2.innerHTML = "Si ya tienes una cuenta por favor inicia sesion aqui";
        i = 1;
    }
    console.log(i);







});

boton.addEventListener("click", function () {
    window.location.href = "web/index.html";
})
