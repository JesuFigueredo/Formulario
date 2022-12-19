async function registros1() {
    try {
        const formData = new FormData()
        const response = await fetch(enlace + "/warnings", {
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




        let hilera = "";
        let n = 1;
        for (var i = 0; i < data.data.length; i++) {
            var remplazar = datos[0][i].attributes.datetime;
            var cambio = remplazar.replace("T", " ");
            var cantidad2 = cambio.length;
            var newStr2 = cambio.indexOf(".");
            let resta2 = cantidad2 - newStr2;
            var salid2 = cambio.substring(0, cambio.length - resta2);
            var salid3 = datos[0][i].id;


            hilera += "<tr>";
            let boton = '<div class="dropdown"><button class="btn" type = "button" id = "dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-v" ></i></button></i><div class="dropdown-menu dropdown2" aria-labelledby="dropdownMenuButton"><a class="dropdown-item item1" onclick="editar(' + salid3 + ')" data-bs-toggle="modal" data-bs-target="#exampleModal1"> <i class="bi bi-pencil-fill"></i> Editar</a ><a class="dropdown-item item2" href="javascript:borrar(' + salid3 + ')"><i class="bi bi-trash"></i> Borrar</a><a class="dropdown-item item3" href="javascript:exportar(' + salid3 + ')"><i class="bi bi-box-arrow-in-down" ></i> Exportar</a></div > ';
            hilera += "<th scope=row>" + n++ + "</th>";



            hilera += "<td>" + datos[0][i].attributes.numberwarning + "</td>";
            hilera += "<td>" + salid2 + "</td>";
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
            hilera += "<tr>";



            document.getElementById("tabla2").innerHTML = hilera;
        }



    } catch (error) {
        console.log(error);

    }
}
registros1();
