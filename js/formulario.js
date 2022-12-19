var hoy = new Date()
var fecha = hoy.getFullYear() + '-' + ('0' + (hoy.getMonth() + 1)).slice(-2) + '-' + ('0' + hoy.getDate()).slice(-2);
var hora = ('0' + hoy.getHours()).slice(-2) + ':' + ('0' + hoy.getMinutes()).slice(-2);

var datetime = fecha + 'T' + hora;


const form = document.getElementById("form");
var gettoken = localStorage.getItem("data_token");
var respuesta = enlace + "/warnings";
var hora = document.getElementById("fecha_hora");
var aviso = document.getElementById("aviso");
var tecnico = document.getElementById("select");
var tarea = document.getElementById("tarea");
var poblacion = document.getElementById("poblacion");
var dirección = document.getElementById("dirección");
var comentario = document.getElementById("comentario");
hora.value = datetime;

const d = new Date();

async function sendData(form) {
    var hora = document.getElementById("fecha_hora");
    var raw = JSON.stringify({
        "data": {
            "datetime": hora.value,
            "numberwarning": aviso.value,
            "technical": tecnico.value,
            "task": tarea.value,
            "population": poblacion.value,
            "address": direccion.value,
            "comment": comentario.value,
            "modific": datetime


        }
    });


    try {

        const formData = new FormData(form)
        const queryString = new URLSearchParams(formData).toString()
        const response = await fetch(respuesta, {
            method: "POST",
            body: raw, headers: {
                "Authorization": "Bearer " + gettoken,
                "Content-Type": "application/json"
            },


        });

        var titulo;
        var type;
        var button;
        if (!response.ok) {
            const message = response.status;
            type = "error";
            button = true;
            switch (message) {
                case 400:
                    titulo = "Error al Enviar los datos";
                    break;
                case 404:
                    titulo = "Página no encontrada";
                    break;

                default:
                    titulo = "Error Desconocido";
                    break;
            }

            throw new Error(message);
        }
        titulo = "Registro Completo";
        type = "success";
        button = false;
    } catch (error) {

        console.log(error);
    }

    function pregunta() {

        swal({
            title: type,
            text: titulo,
            type: type,
            timer: 2000,
            showConfirmButton: button
            //showConfirmButton: button
        }, function () {
            if (button == false) {
                location.reload();
            }
        });
    }
    pregunta();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendData(form);

})