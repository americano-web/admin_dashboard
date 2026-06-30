const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".sidebar a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.parentElement.classList.add("active");

    }

});

// ======================================
// SIDEBAR.JS
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.querySelector(".sidebar");
    const toggle = document.getElementById("toggleSidebar");

    // ===========================
    // ACTIVE MENU
    // ===========================

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".sidebar a").forEach(link => {

        if (link.getAttribute("href") === currentPage) {

            link.parentElement.classList.add("active");

        }

    });

    // ===========================
    // COLLAPSE
    // ===========================

    if (localStorage.getItem("sidebar") === "collapsed") {

        sidebar.classList.add("collapsed");

    }

    if (toggle) {

        toggle.addEventListener("click", () => {

            sidebar.classList.toggle("collapsed");

            if (sidebar.classList.contains("collapsed")) {

                localStorage.setItem("sidebar", "collapsed");

            } else {

                localStorage.removeItem("sidebar");

            }

        });

    }

});