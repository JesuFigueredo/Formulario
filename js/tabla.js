var busqueda = document.getElementById('buscar');
var tabl = document.getElementById("tabla");
var table = tabl.tBodies[0];

/*function evento(n, type) {

    var rows, switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        rows = tabl.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }

    }
}*/
$(document).ready(function () {
    $('#tabla').DataTable({
        sProcessing: "Procesando...",
        paging: false,//pag
        filter: false,
        dom: '<lf<t>ip>',
        scrollX: true,
        responsive: true,

        language: {
            "decimal": "",
            "emptyTable": "No hay información",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ Entradas",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados encontrados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
            }

        },
        //ordering: false,//orden
        //info: false,//información
        /*columnDefs: [
            {
                target: 4,
                visible: false,
                searchable: false,
            },
            {
                target: 3,
                visible: false,
            },
        ],*///ocultar columna*/
        //order: [[0, 'asc']], //orden por el que comienza
        paging: true,

    });

});

buscaTabla = function () {

    texto = busqueda.value.toLowerCase();
    var r = 0;
    while (row = table.rows[r++]) {
        if (row.innerText.toLowerCase().indexOf(texto) !== -1)
            row.style.display = null;
        else
            row.style.display = 'none';
    }
}


busqueda.addEventListener('keyup', buscaTabla);


