// =======================================
// PRODUCTS.JS
// =======================================

let productsData = [];

document.addEventListener("DOMContentLoaded", async () => {

    try {

        const response = await fetch("data/dummy.json");

        if (!response.ok) {
            throw new Error("Gagal mengambil data produk.");
        }

        const data = await response.json();

        productsData = data.products;

        renderProducts(productsData);

        initSearch();

    } catch (error) {

        console.error(error);

    }

});

// =======================================
// RENDER PRODUCT
// =======================================

function renderProducts(products) {

    const table = document.getElementById("productTable");

    if (!table) return;

    table.innerHTML = "";

    products.forEach(product => {

        table.innerHTML += `

        <tr>

            <td>${product.id}</td>

            <td>

                <img
                    src="${product.image}"
                    class="product-image"
                    alt="${product.name}">

            </td>

            <td>${product.name}</td>

            <td>${product.category}</td>

            <td>

                Rp ${product.price.toLocaleString("id-ID")}

            </td>

            <td>${product.stock}</td>

            <td>

                <span class="${statusClass(product.status)}">

                    ${product.status}

                </span>

            </td>

            <td>

                <div class="action-btn">

                    <button
                        class="edit-btn"
                        onclick="editProduct(${product.id})">

                        <i class="fa-solid fa-pen"></i>

                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteProduct(${product.id})">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

            </td>

        </tr>

        `;

    });

}

// =======================================
// STATUS BADGE
// =======================================

function statusClass(status) {

    switch (status) {

        case "Available":
            return "badge success";

        case "Low Stock":
            return "badge warning";

        case "Out of Stock":
            return "badge danger";

        default:
            return "badge";

    }

}

// =======================================
// SEARCH
// =======================================

function initSearch() {

    const search =
        document.getElementById("searchProduct");

    if (!search) return;

    search.addEventListener("keyup", () => {

        const keyword =
            search.value.toLowerCase();

        const result =
            productsData.filter(product =>

                product.name.toLowerCase().includes(keyword) ||

                product.category.toLowerCase().includes(keyword)

            );

        renderProducts(result);

    });

}

// =======================================
// EDIT
// =======================================

function editProduct(id) {

    const product =
        productsData.find(p => p.id === id);

    console.log(product);

    alert("Fitur Edit Produk akan dibuat pada tahap berikutnya.");

}

// =======================================
// DELETE
// =======================================

function deleteProduct(id) {

    const confirmDelete =
        confirm("Yakin ingin menghapus produk ini?");

    if (!confirmDelete) return;

    productsData =
        productsData.filter(product => product.id !== id);

    renderProducts(productsData);

}