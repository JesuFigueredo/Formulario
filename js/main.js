var gettoken = localStorage.getItem("data_token");

/*Popover*/
$(function () {
    $("[data-toggle=popover]").popover({
        html: true,
        placement: "bottom",
        trigger: 'hover',
        content: function () {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
        },
        title: function () {
            var title = $(this).attr("data-popover-content");
            return $(title).children(".popover-heading").html();
        }
    });
});
/*Reloj */
function actual() {
    fecha = new Date(); //Actualizar fecha.
    hora = fecha.getHours(); //hora actual
    minuto = fecha.getMinutes(); //minuto actual

    if (hora < 10) { //dos cifras para la hora
        hora = "0" + hora;
    }
    if (minuto < 10) { //dos cifras para el minuto
        minuto = "0" + minuto;
    }

    //devolver los datos:
    mireloj = hora + " : " + minuto;
    return mireloj;
}
function actualizar() { //función del temporizador
    mihora = actual(); //recoger hora actual
    mireloj = document.getElementById("reloj"); //buscar elemento reloj
    mireloj.innerHTML = mihora; //incluir hora en elemento
}
setInterval(actualizar, 1000); //iniciar temporizador

/*Fecha */
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var dia = day + "/" + month + "/" + year;
var fecha = document.getElementById("fecha").innerText = dia; //buscar elemento fecha

$('#reload').hide()



function recargar() {

    const boton = document.getElementById("enviar");


    boton.disabled = true;
    boton.style.opacity = 0.7;

    $('#reload').show();



}

document.getElementById("enviar").addEventListener("click", recargar);


