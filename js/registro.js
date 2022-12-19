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
        console.log(data);
    } catch (error) {
        console.log(error);

    }
}
registros1();
