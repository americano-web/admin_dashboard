// ========================================
// REPORTS.JS
// Admin Dashboard
// ========================================

let reportsData = [];

// ========================================
// LOAD DATA
// ========================================

document.addEventListener("DOMContentLoaded", async () => {

    try {

        const response = await fetch("data/dummy.json");

        if (!response.ok) {
            throw new Error("Gagal mengambil data.");
        }

        const data = await response.json();

        reportsData = data.reports;

        renderReports(reportsData);

    } catch (error) {

        console.error(error);

    }

});

// ========================================
// RENDER TABLE
// ========================================

function renderReports(reports) {

    const table = document.getElementById("reportTable");

    if (!table) return;

    table.innerHTML = "";

    reports.forEach(report => {

        table.innerHTML += `

        <tr>

            <td>${report.id}</td>

            <td>${formatDate(report.date)}</td>

            <td>${report.invoice}</td>

            <td>${report.customer}</td>

            <td>

                Rp ${report.total.toLocaleString("id-ID")}

            </td>

            <td>

                <span class="${statusClass(report.status)}">

                    ${report.status}

                </span>

            </td>

        </tr>

        `;

    });

}

// ========================================
// STATUS
// ========================================

function statusClass(status) {

    switch (status) {

        case "Paid":
            return "badge success";

        case "Pending":
            return "badge warning";

        case "Cancelled":
            return "badge danger";

        default:
            return "badge";

    }

}

// ========================================
// FORMAT DATE
// ========================================

function formatDate(date) {

    return new Date(date).toLocaleDateString("id-ID", {

        day: "2-digit",
        month: "long",
        year: "numeric"

    });

}

// ========================================
// EXPORT PDF
// ========================================

const exportBtn = document.querySelector(".add-btn");

if (exportBtn) {

    exportBtn.addEventListener("click", () => {

        alert("Fitur Export PDF akan dibuat pada tahap berikutnya.");

    });

}