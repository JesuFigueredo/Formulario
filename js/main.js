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
    mireloj = hora + ":" + minuto + ":00";
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
var dia = year + "-" + month + "-" + day;
var fecha = document.getElementById("fecha").innerText = dia; //buscar elemento fecha

$('#reload').hide()



function recargar() {

    const boton = document.getElementById("enviar");
    var botonfast = document.getElementById("registrofast");
    var hora = document.getElementById("reloj");
    var fast = document.getElementById("fast");
    var datetime = dia + " " + hora.childNodes[0].textContent;
    //const date = new Date(datetime);
    const d = new Date(dia + "T" + hora.childNodes[0].textContent);
    var aviso = document.getElementById("aviso");
    var tecnico = document.getElementById("select");
    var tarea = document.getElementById("tarea");
    var poblacion = document.getElementById("poblacion");
    var direccion = document.getElementById("direccion");
    var comentario = document.getElementById("comentario");





    //console.log(dia, hora.childNodes[0].textContent);
    async function sendData(fast) {
        var raw = JSON.stringify({
            "data": {
                "datetime": Date.parse(d),
                "numberwarning": aviso.value,
                "technical": tecnico.value,
                "task": tarea.value,
                "population": poblacion.value,
                "address": direccion.value,
                "comment": comentario.value,
                "modific": Date.parse(d)

            }
        });
        var salida;
        let titulo;
        var button;
        try {
            const formData = new FormData(fast)
            const queryString = new URLSearchParams(formData).toString()
            const response = await fetch(enlace + "/warnings", {
                method: "POST",
                body: raw, headers: {
                    "Authorization": "Bearer " + gettoken,
                    "Content-Type": "application/json"
                },


            });


            if (!response.ok) {
                const message = response.status;
                titulo = "error";
                button = true;

                switch (message) {
                    case 400:
                        salida = "Error al enviar los datos";
                        break;
                    case 404:
                        salida = "no se ha encontrado la web";
                        break;

                    default:
                        salida = "Error desconocido";
                        break;
                }



                throw new Error(message);
            } else {
                titulo = "success";
                salida = "Registro completado";
                button = false;

            }
        } catch (error) {

            console.log(error);
        }

        function pregunta() {

            swal({
                title: titulo,
                text: salida,
                type: titulo,
                timer: 2000,
                showConfirmButton: button
            }, function () {

                if (button == false) {
                    location.reload();
                }



            });
        }
        setTimeout(function () {
            //location.reload();

            pregunta();
            $('#reload').hide();
            boton.disabled = false;
            boton.style.opacity = 1;
        }, 1000)
    }
    sendData(fast);






    boton.disabled = true;
    boton.style.opacity = 0.7;
    $('#reload').show();


    /*if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {



        })
    }*/





}





document.getElementById("enviar").addEventListener("click", recargar);




