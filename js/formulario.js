const login = document.getElementById("form");
var gettoken = localStorage.getItem("data_token");
var respuesta = enlace + "/warnings";


async function sendData(login) {
    var raw = JSON.stringify({
        "data": {
            "identificador": "Prueba",
            "tarea": "Prueba",
            "poblacion": "Prueba",
            "direccion": "creado desde postman"
        }
    });
    try {
        const formData = new FormData(login)
        const queryString = new URLSearchParams(formData).toString()
        const response = await fetch(respuesta, {
            method: "POST",
            body: raw, headers: {
                "Authorization": "Bearer " + gettoken,
                "Content-Type": "application/json"
            },


        });


        if (!response.ok) {
            const message = response.status;
            if (message == 400) {

            }

            throw new Error(message);
        }






    } catch (error) {

        console.log(error);
    }
}

login.addEventListener('submit', (e) => {
    e.preventDefault();
    sendData(login);

})