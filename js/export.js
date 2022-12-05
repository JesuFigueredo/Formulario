var hoy = new Date();
var fecha = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
var hora = hoy.getHours() + ':' + hoy.getMinutes();
var now = fecha + '_' + hora;

document.getElementById("export").addEventListener("click", exportar);

function exportar() {

    var doc = new jsPDF();
    //doc.text(20, 20, 'This PDF has a title, subject, author, keywords and a creator.');
    doc.setFontSize(22);
    doc.text(8, 10, 'Formulario');
    doc.setFontSize(22);
    doc.text(130, 10, 'Recibo de Técnicos');
    doc.setLineWidth(0.5);
    doc.line(5, 15, 205, 15);
    doc.setFontSize(12);
    doc.text(8, 22.5, 'Número de Aviso: ');
    doc.text(150, 20, 'Fecha: ');
    doc.text(150, 25, 'Hora: ');
    doc.setLineWidth(0.5);
    doc.line(5, 27, 205, 27);

    doc.setFontSize(12);
    doc.text(20, 40, 'Técnico: ');
    doc.text(20, 50, 'Tarea: ');
    doc.text(20, 60, 'Población: ');
    doc.text(20, 70, 'Dirección: ');
    doc.text(20, 80, 'Comentario: ');


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




/*var pdf = new jsPDF('p', 'pt', 'letter');
pdf.text( 'This text is centered\raround\rthis point.', 140, 120, 'center' );
 */