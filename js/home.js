var token = localStorage.getItem("data_token");

function id() {
    if (token == null) {
        window.location.href = "../";
    } else {
        try {
            const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
            const now = (Math.floor((new Date).getTime() / 1000))
            return now >= expiry;


        } catch (error) {
            console.log(error);
        }
        return true
    }
}
function salida() {
    localStorage.removeItem("data_token");
    window.location.href = "../";
}
id();
