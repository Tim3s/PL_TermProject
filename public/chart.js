// Example
const ctx = document.getElementById("chart1");
const chart1 = new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["America", "India", "China"],
        datasets: [
            {
                label: "My first dataset",
                data: [300, 50, 100],
                backgroundColor: ["#ffa726", "#f57c00", "#e65100"],
                hoverOffset: 4,
            },
        ],
    },
    options: {
        maintainAspectRatio: false,
    },
});
