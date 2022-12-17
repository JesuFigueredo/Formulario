const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']



async function send3() {
    try {
        const formData = new FormData()

        const response = await fetch(enlace + '/warnings?filters[technical][$eq]=self&sort[0]=datetime&fields[1]=datetime', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + gettoken,
            },
        });
        const response2 = await fetch(enlace + '/warnings?filters[technical][$eq]=supplier&sort[0]=datetime&fields[1]=datetime', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + gettoken,
            },
        });
        if (!response.ok) {
            if (response.status == 401) {
                localStorage.removeItem("data_token")

            } else {
                const message = `Error: ${response.status}`;
                throw new Error(message);
            }
            const message = `Error: ${response.status}`;
            throw new Error(message);

        }
        const data1 = await response.json();
        const data2 = await response2.json();
        var meses = new Array();
        const graph = document.querySelector("#grafica");
        const data = {
            labels: labels,

            options: {
                responsive: true,
            },
            datasets: [{
                label: "Propio",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                circula: true,
                backgroundColor: 'blue',
                width: 1,
                borderRadius: 15
            },
            {
                label: "Proovedor",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'green',
                borderRadius: 15
            }
            ]
        };


        const config = {
            type: 'bar',
            data: data,
        };

        for (let i = 0; i < data1.data.length; i++) {
            var salida = data1.data[i].attributes.datetime;
            var cantidad = salida.length;
            var newStr = salida.indexOf("T");
            let resta = cantidad - newStr;
            var salid = salida.substring(0, salida.length - resta)
            let fecha = new Date(salid);
            var mes = fecha.getMonth();
            //console.log(mes);
            meses.push(mes);
            var repetidos = {};
            meses.forEach(function (numero) {
                repetidos[numero] = (repetidos[numero] || 0) + 1;
                data.datasets[0].data[mes] = repetidos[numero];
            });
        }
        var mese = new Array();
        for (let a = 0; a < data2.data.length; a++) {
            var salida1 = data2.data[a].attributes.datetime;

            var cantidad1 = salida1.length;
            var newStr1 = salida1.indexOf("T");
            let resta1 = cantidad1 - newStr1;
            var salid1 = salida1.substring(0, salida1.length - resta1)
            let fecha1 = new Date(salid1);
            var mes1 = fecha1.getMonth();
            //console.log(mes);
            mese.push(mes1);
            var repetidos1 = {};
            mese.forEach(function (numero1) {
                repetidos1[numero1] = (repetidos1[numero1] || 0) + 1;
                data.datasets[1].data[mes1] = repetidos1[numero1];
            });
        }






        new Chart(graph, config);


    } catch (error) {
        console.log(error)
    }
    //return mes;

};


send3();




