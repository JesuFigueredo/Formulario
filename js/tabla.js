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
        //paging: false,//pag
        filter: false,
        dom: '<lf<t>ip>',
        scrollX: false,
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
        //order: [[0, 'desc']],orden por el que comienza

        columnDefs: [
            {
                render: function (data, type, row) {
                    return data + ' (' + row[1] + ')';
                },
                targets: 0,
            },
            { visible: false, targets: [0] },
        ],
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


