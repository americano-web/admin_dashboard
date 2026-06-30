// ======================================
// LOGIN CHECK
// ======================================

if(localStorage.getItem("isLogin")!=="true"){

    window.location.href="login.html";

}
// ======================================
// APP.JS
// Dashboard Controller
// ======================================

document.addEventListener("DOMContentLoaded", async () => {

    try {

        const response = await fetch("data/dummy.json");

        if (!response.ok) {
            throw new Error("Gagal mengambil data");
        }

        const data = await response.json();

        loadDashboard(data.dashboard);
        loadActivity(data.activity);
        loadProducts(data.products);

    } catch (err) {

        console.error(err);

    }

});

// ======================================
// DASHBOARD CARD
// ======================================

function loadDashboard(dashboard) {

    document.getElementById("users").textContent =
        dashboard.totalUsers;

    document.getElementById("products").textContent =
        dashboard.totalProducts;

    document.getElementById("orders").textContent =
        dashboard.totalOrders;

    document.getElementById("income").textContent =
        "Rp " + dashboard.totalIncome.toLocaleString("id-ID");

}

// ======================================
// RECENT ACTIVITY
// ======================================

function loadActivity(activity) {

    const activityList =
        document.getElementById("activityList");

    if (!activityList) return;

    activityList.innerHTML = "";

    activity.forEach(item => {

        activityList.innerHTML += `
            <li>${item}</li>
        `;

    });

}

// ======================================
// LATEST PRODUCTS
// ======================================

function loadProducts(products) {

    const table =
        document.getElementById("productTable");

    if (!table) return;

    table.innerHTML = "";

    products.slice(0,5).forEach(product => {

        table.innerHTML += `

        <tr>

            <td>${product.id}</td>

            <td>${product.name}</td>

            <td>${product.category}</td>

            <td>${product.stock}</td>

            <td>
                Rp ${product.price.toLocaleString("id-ID")}
            </td>

        </tr>

        `;

    });

}

const user =
JSON.parse(localStorage.getItem("user"));

if(user){

    document.getElementById("welcomeName").innerHTML =
    `Welcome, ${user.name}`;

}

const logout =
document.getElementById("logoutBtn");

if(logout){

logout.addEventListener("click",()=>{

localStorage.clear();

window.location.href="login.html";

});

}