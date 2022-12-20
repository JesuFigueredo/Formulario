
function borrar(i) {
    async function registros() {
        try {
            const formData = new FormData()
            const response = await fetch(enlace + "/warnings/" + i, {
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer " + gettoken,
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
                        titulo = "datos no encontrada";
                        break;

                    default:
                        titulo = "Error Desconocido";
                        break;
                }



                throw new Error(message);
            }
            titulo = "Borrado";
            type = "success";
            button = false;
            const data = await response.json();

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

            }, function () {
                if (button == false) {
                    location.reload();
                }
            });
        }
        pregunta();
    }
    registros();
}
var fecha_hora1 = document.getElementById("fecha_hora1");
var aviso1 = document.getElementById("aviso1");
var tecnico1 = document.getElementById("select1");
var tarea1 = document.getElementById("tarea1");
var poblacion1 = document.getElementById("poblacion1");
var direccion1 = document.getElementById("direccion1");
var comentario1 = document.getElementById("comentario1");
const edit = document.getElementById("edit");
var enviar12 = document.getElementById("enviar1");
var respuesta = enlace + "/warnings";
function editar(i) {
    var titulo;
    var type;
    $('#reload1').hide();
    async function re() {
        try {
            const formData = new FormData()
            const response = await fetch(enlace + "/warnings/" + i, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + gettoken,
                },

            });
            function pregunta() {

                swal({
                    title: type,
                    text: titulo,
                    type: type,
                    timer: 2000,
                    showConfirmButton: button

                }, function () {
                    if (button == false) {
                        location.reload();
                    }
                });
            }

            if (!response.ok) {
                const message = response.status;
                type = "error";
                button = false;
                switch (message) {
                    case 400:
                        titulo = "Error al Enviar los datos";
                        break;
                    case 404:
                        titulo = "datos no encontrados";
                        break;

                    default:
                        titulo = "Error Desconocido";
                        break;
                }



                pregunta();
                throw new Error(message);



            }


            const data = await response.json();
            //console.log(data.data.attributes.numberwarning);

            var hoy1 = new Date(data.data.attributes.datetime);
            var fecha1 = hoy1.getFullYear() + '-' + ('0' + (hoy1.getMonth() + 1)).slice(-2) + '-' + ('0' + hoy1.getDate()).slice(-2);
            var obteniendohora = hoy1.getHours() - 1;

            var hora1 = ('0' + obteniendohora).slice(-2) + ':' + ('0' + hoy1.getMinutes()).slice(-2) + ":00";
            var datosdetiempo = fecha1 + 'T' + hora1;

            fecha_hora1.value = datosdetiempo;
            aviso1.value = data.data.attributes.numberwarning;
            tecnico1.value = data.data.attributes.technical;
            tarea1.value = data.data.attributes.task;
            poblacion1.value = data.data.attributes.population;
            direccion1.value = data.data.attributes.address;
            comentario1.value = data.data.attributes.comment;

            function edit1() {
                $('#reload1').hide();
                console.log("aki")
                async function sendedit() {
                    console.log(aviso1.value);
                    const d1 = new Date(hora.value);
                    var raw = JSON.stringify({
                        "data": {
                            "datetime": fecha_hora1.value,
                            "numberwarning": aviso1.value,
                            "technical": tecnico1.value,
                            "task": tarea1.value,
                            "population": poblacion1.value,
                            "address": direccion1.value,
                            "comment": comentario1.value,
                            "modific": Date.parse(fecha_hora)

                        }
                    });

                    try {
                        const response = await fetch(respuesta + "/" + data.data.id, {
                            method: "PUT",
                            body: raw,
                            headers: {
                                "Authorization": "Bearer " + gettoken,
                                "Content-Type": "application/json"
                            },
                            redirect: 'follow'



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
                        titulo = "Modificación Exitosa";
                        type = "success";
                        console.log(response.status);
                        button = false;
                    } catch (error) {

                        console.log(error);
                    }
                    function pregunta() {

                        swal({
                            title: type,
                            text: titulo,
                            type: type,
                            timer: 1000,
                            showConfirmButton: button

                        }, function () {
                            if (button == false) {
                                location.reload();
                            }
                        });
                    }
                    pregunta();
                }
                console.log("aki")
                sendedit()

            }

            enviar12.addEventListener("click", edit1);



        } catch (error) {
            console.log(error);

        }

    }
    re();
}




