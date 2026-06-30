// =======================================
// USERS.JS
// =======================================

let usersData = [];

document.addEventListener("DOMContentLoaded", async () => {

    try {

        const response = await fetch("data/dummy.json");

        if (!response.ok) {
            throw new Error("Gagal mengambil data user.");
        }

        const data = await response.json();

        usersData = data.users;

        renderUsers(usersData);

        initSearch();

    } catch (error) {

        console.error(error);

    }

});

// =======================================
// RENDER USER
// =======================================

function renderUsers(users){

    const table = document.getElementById("userTable");

    if(!table) return;

    table.innerHTML = "";

    users.forEach(user => {

        table.innerHTML += `

        <tr>

            <td>${user.id}</td>

            <td>

                <img
                    src="${user.photo}"
                    class="avatar">

            </td>

            <td>${user.name}</td>

            <td>${user.email}</td>

            <td>

                <span class="${roleClass(user.role)}">

                    ${user.role}

                </span>

            </td>

            <td>

                <span class="${statusClass(user.status)}">

                    ${user.status}

                </span>

            </td>

            <td>

                <div class="action-btn">

                    <button class="edit-btn"
                        onclick="editUser(${user.id})">

                        <i class="fa-solid fa-pen"></i>

                    </button>

                    <button class="delete-btn"
                        onclick="deleteUser(${user.id})">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

            </td>

        </tr>

        `;

    });

}

// =======================================
// ROLE COLOR
// =======================================

function roleClass(role){

    switch(role){

        case "Admin":
            return "badge success";

        case "Manager":
            return "badge warning";

        default:
            return "badge";

    }

}

// =======================================
// STATUS COLOR
// =======================================

function statusClass(status){

    if(status === "Active"){

        return "badge success";

    }

    return "badge danger";

}

// =======================================
// SEARCH
// =======================================

function initSearch(){

    const search =
        document.getElementById("searchUser");

    if(!search) return;

    search.addEventListener("keyup", ()=>{

        const keyword =
            search.value.toLowerCase();

        const result =
            usersData.filter(user=>{

                return(

                    user.name.toLowerCase().includes(keyword) ||

                    user.email.toLowerCase().includes(keyword) ||

                    user.role.toLowerCase().includes(keyword)

                );

            });

        renderUsers(result);

    });

}

// =======================================
// EDIT
// =======================================

function editUser(id){

    const user =
        usersData.find(u=>u.id===id);

    console.log(user);

    alert("Fitur Edit akan dibuat pada tahap berikutnya.");

}

// =======================================
// DELETE
// =======================================

function deleteUser(id){

    const confirmDelete =
        confirm("Yakin ingin menghapus user ini?");

    if(!confirmDelete) return;

    usersData =
        usersData.filter(user=>user.id!==id);

    renderUsers(usersData);

}