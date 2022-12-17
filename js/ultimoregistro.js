async function registros() {
    try {
        const formData = new FormData()
        const response = await fetch(enlace + "/warnings?sort[0]=createdAt%3Adesc&pagination[pageSize]=5", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + gettoken,
            },

        });

        if (!response.ok) {
            const message = response.status;
            if (message == 400) {

            }

            throw new Error(message);
        }

        const data = await response.json();
        var datos = new Array();

        datos.push(data.data);



        //console.log(data.data);
        let hilera = "";
        let n = 1;
        for (var i = 0; i < data.data.length; i++) {
            var remplazar = datos[0][i].attributes.datetime;
            var cambio = remplazar.replace("T", " ");
            var cantidad2 = cambio.length;
            var newStr2 = cambio.indexOf(".");
            let resta2 = cantidad2 - newStr2;
            var salid2 = cambio.substring(0, cambio.length - resta2);
            //var salid2 = ;
            //console.log("remplazar", timestamp);
            hilera += "<tr>";
            let boton = '<div class="dropdown"><button class="btn" type = "button" id = "dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-v" ></i></button></i><div class="dropdown-menu dropdown2" aria-labelledby="dropdownMenuButton"><a class="dropdown-item item1" href="#"><i class="bi bi-pencil-fill"></i> Editar</a><a class="dropdown-item item2" href="#"><i class="bi bi-trash"></i> Borrar</a><a class="dropdown-item item3" href="javascript:exportar()"><i class="bi bi-box-arrow-in-down" ></i> Exportar</a></div>';
            hilera += "<th scope=row>" + n++ + "</th>";

            hilera += "<td>" + salid2 + "</td>";
            hilera += "<td>" + datos[0][i].attributes.numberwarning + "</td>";
            var tecnico;
            if (datos[0][i].attributes.technical == "self") {
                var tecnico = "Propio";
            } else if (datos[0][i].attributes.technical == "supplier") {
                tecnico = "Proveedor";
            } else {
                tecnico = "No definido";
            }
            hilera += "<td>" + tecnico + "</td>";
            hilera += "<td>" + datos[0][i].attributes.task + "</td>";
            hilera += "<td>" + datos[0][i].attributes.population + "</td>";
            hilera += "<td>" + datos[0][i].attributes.address + "</td>";
            if (datos[0][i].attributes.comment == null) {
                hilera += "<td></td>";
            } else {
                hilera += "<td>" + datos[0][i].attributes.comment + "</td>";
            }

            hilera += "<td>" + boton + "</td>";

            //console.log(cambio);



            hilera += "<tr>";



            document.getElementById("tabla").innerHTML = hilera;
        }



    } catch (error) {


    }
}
registros();