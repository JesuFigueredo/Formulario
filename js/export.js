var hoy = new Date();
var fecha = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
var hora = hoy.getHours() + ':' + hoy.getMinutes();
var now = fecha + '_' + hora;

//document.getElementById("export").addEventListener("click", exportar);

function exportar(i) {
    var salida;
    let titulo;
    var button;

    async function desca(i) {
        try {
            const formData = new FormData()
            const response = await fetch(enlace + "/warnings/" + i, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + gettoken,
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
            const data = await response.json();



            //var salid2 = cambio1.substring(cambio1, cambio1.length - resta21);
            console.log(data.data.attributes.numberwarning);
            console.log();
            function save() {
                var doc = new jsPDF();
                //doc.text(20, 20, 'This PDF has a title, subject, author, keywords and a creator.');
                doc.setFontSize(22);
                doc.text(8, 10, 'Formulario');
                doc.setFontSize(22);
                doc.text(130, 10, 'Recibo de Técnicos');
                doc.setLineWidth(0.5);
                doc.line(5, 15, 205, 15);
                doc.setFontSize(12);
                doc.text(8, 22.5, 'Número de Aviso: ' + data.data.attributes.numberwarning);
                doc.text(120, 22, 'Fecha: ' + new Date(data.data.attributes.datetime).toLocaleString('en-EU', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: "long", hour: '2-digit', hour12: true, minute: '2-digit', second: '2-digit' }));
                doc.setLineWidth(0.5);
                doc.line(5, 27, 205, 27);

                doc.setFontSize(12);
                if (data.data.attributes.technical == "self") {
                    var tecn = "Propio";
                } else {
                    var tecn = "Proveedor";
                }
                doc.text(20, 40, 'Técnico: ' + tecn);
                doc.text(20, 50, 'Tarea: ' + data.data.attributes.task);
                doc.text(20, 60, 'Población: ' + data.data.attributes.population);
                doc.text(20, 70, 'Dirección: ' + data.data.attributes.address);
                if (data.data.attributes.comment != "") {
                    var com = data.data.attributes.comment;
                    doc.text(20, 80, 'Comentario: ' + com);

                }
                doc.setLineWidth(0.5);



                doc.line(5, 100, 205, 100);

                doc.line(120, 150, 160, 150);
                doc.text(135, 155, 'Firma');
                doc.text(120, 160, 'Nombre de la Persona');

                doc.setLineWidth(0.5);
                doc.line(0, 290, 210, 290);
                doc.setFontSize(10);
                doc.text(150, 295, 'Generado el ' + now);






                // Output as Data URI
                doc.save(now);
            }
            save();





        } catch (error) {
            console.log(error);

        };
    }

    desca(i)

}
function exportartodo() {

}






/*var pdf = new jsPDF('p', 'pt', 'letter');
pdf.text( 'This text is centered\raround\rthis point.', 140, 120, 'center' );
 */