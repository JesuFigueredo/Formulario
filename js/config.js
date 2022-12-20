const enlace = "https://strapi-1uau.onrender.com/api";
//const enlace = "http://localhost:1337/api";
var gettoken = localStorage.getItem("data_token");

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
send2();

