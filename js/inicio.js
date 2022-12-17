var gettoken = localStorage.getItem("data_token");
var avisocantidad = document.getElementById("avisocantidad");

async function send1() {
    try {
        const formData = new FormData()

        const response = await fetch(enlace + '/warnings', {
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

        const data = await response.json();
        avisocantidad.innerHTML = data.meta.pagination.total;
        //console.log(data);


    } catch (error) {
        console.log(error)
    }
};
//total
async function send2() {
    try {
        const formData = new FormData()

        const response = await fetch(enlace + '/users/me', {
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

        const data = await response.json();
        /*const mostrar = data.username;
        const cantidad = mostrar.length;
        const newStr = mostrar.indexOf("@")
        const restar = cantidad - newStr;
        const salida = mostrar.substring(0, mostrar.length, restar)
        console.log(salida);
        console.log(cantidad + "," + newStr + "," + restar);*/
        var salida = data.username;


        document.getElementById("mostrar").innerHTML = salida.charAt(0).toUpperCase() + salida.slice(1);;




    } catch (error) {
        console.log(error)
    }
};
//t.propio
async function send3() {
    try {
        const formData = new FormData()

        const response = await fetch(enlace + '/warnings?filters[technical][$eq]=self', {
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

        const data = await response.json();
        var salida1 = data.meta.pagination.total;




        document.getElementById("mostrar1").innerHTML = salida1;




    } catch (error) {
        console.log(error)
    }
};

async function send4() {
    try {
        const formData = new FormData()

        const response = await fetch(enlace + '/warnings?filters[technical][$eq]=supplier', {
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

        const data = await response.json();
        var salida2 = data.meta.pagination.total;




        document.getElementById("mostrar2").innerHTML = salida2;




    } catch (error) {
        console.log(error)
    }
};



send1();
send2();
send3();
send4();

