// =======================================
// CHART.JS
// Admin Dashboard
// =======================================

document.addEventListener("DOMContentLoaded", async () => {

    const chartCanvas =
    document.getElementById("salesChart") ||
    document.getElementById("reportChart");

if (!chartCanvas) return;

    try {

        // Ambil data JSON
        const response = await fetch("data/dummy.json");

        if (!response.ok) {
            throw new Error("Gagal mengambil data JSON");
        }

        const data = await response.json();

        const labels = data.chart.labels;
        const sales = data.chart.sales;

        new Chart(chartCanvas, {

            type: "line",

            data: {

                labels: labels,

                datasets: [

                    {

                        label: "Penjualan",

                        data: sales,

                        borderColor: "#3B82F6",

                        backgroundColor: "rgba(59,130,246,.15)",

                        fill: true,

                        tension: 0.4,

                        borderWidth: 3,

                        pointRadius: 5,

                        pointHoverRadius: 8,

                        pointBackgroundColor: "#3B82F6"

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        display: true,

                        labels: {

                            color: "#F8FAFC"

                        }

                    }

                },

                scales: {

                    x: {

                        ticks: {

                            color: "#CBD5E1"

                        },

                        grid: {

                            color: "rgba(255,255,255,.05)"

                        }

                    },

                    y: {

                        beginAtZero: true,

                        ticks: {

                            color: "#CBD5E1"

                        },

                        grid: {

                            color: "rgba(255,255,255,.05)"

                        }

                    }

                }

            }

        });

    } catch (error) {

        console.error(error);

    }

});