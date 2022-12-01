var hoy = new Date()
var fecha = hoy.getFullYear() + '-' + ('0' + (hoy.getMonth() + 1)).slice(-2) + '-' + ('0' + hoy.getDate()).slice(-2);
var hora = ('0' + hoy.getHours()).slice(-2) + ':' + ('0' + hoy.getMinutes()).slice(-2);

var fecha_hora = fecha + 'T' + hora;
document.getElementById('fecha_hora').value = fecha_hora;