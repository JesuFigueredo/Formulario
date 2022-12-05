const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const graph = document.querySelector("#grafica");

const data = {
    labels: labels,

    options: {
        responsive: true,


    },
    datasets: [{
        label: "Propio",
        data: [1, 2, 3, 4, 9, 6, 3, 1, 2],
        circula: true,
        backgroundColor: 'blue',
        width: 1,
        borderRadius: 15
    },
    {
        label: "Proovedor",
        data: [5, 4, 3, 2, 8, 9, 5, 6],
        backgroundColor: 'green',
        borderRadius: 15
    }
    ]
};

const config = {
    type: 'bar',
    data: data,
};

new Chart(graph, config);