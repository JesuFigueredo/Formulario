var hoy = new Date();
var fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
var hora = hoy.getHours() + ':' + hoy.getMinutes();
var now = fecha + '_' + hora;

document.getElementById("export").addEventListener("click", exportar);



function exportar() {
    var doc = new jsPDF();
    //doc.text(20, 20, 'This PDF has a title, subject, author, keywords and a creator.');
    doc.setFontSize(22);
    doc.text(50, 20, 'Fecha: ' + fecha);
    doc.setLineWidth(1.5);
    doc.line(20, 25, 180, 25);
    doc.setFontSize(16);
    doc.text(20, 35, 'Hora: ' + hora);
    doc.text(20, 45, 'Aviso: ###########');
    doc.text(20, 55, 'Técnico: #######');
    doc.text(20, 65, 'Tarea: #######');
    doc.text(20, 75, 'Dirección: #######');
    doc.text(20, 85, 'Población: #######');
    doc.text(20, 95, 'Comentario: #######');


    //doc.setTextColor(0, 0, 255);//color
    //doc.text(20, 60, 'This is blue.');//texto

    // Output as Data URI
    doc.save(now);
}




/*var pdf = new jsPDF('p', 'pt', 'letter');
pdf.text( 'This text is centered\raround\rthis point.', 140, 120, 'center' );
 */