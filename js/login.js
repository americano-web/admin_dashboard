// ======================================
// LOGIN.JS
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    initPassword();

    initLogin();

});

// ======================================
// SHOW PASSWORD
// ======================================

function initPassword(){

    const toggle =
        document.querySelector(".toggle-password");

    const password =
        document.getElementById("password");

    if(!toggle || !password) return;

    toggle.addEventListener("click",()=>{

        if(password.type==="password"){

            password.type="text";

            toggle.classList.replace(
                "fa-eye",
                "fa-eye-slash"
            );

        }else{

            password.type="password";

            toggle.classList.replace(
                "fa-eye-slash",
                "fa-eye"
            );

        }

    });

}

// ======================================
// LOGIN
// ======================================

function initLogin(){

    const form =
        document.getElementById("loginForm");

    if(!form) return;

    form.addEventListener("submit",loginUser);

}

async function loginUser(e){

    e.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();

    try{

        const response =
            await fetch("data/dummy.json");

        const data =
            await response.json();

        const user =
            data.users.find(u=>

                u.email===email &&
                u.password===password

            );

        if(!user){

            alert("Email atau Password salah!");

            return;

        }

        localStorage.setItem(

            "user",

            JSON.stringify(user)

        );

        localStorage.setItem(

            "isLogin",

            "true"

        );

        window.location.href="index.html";

    }

    catch(err){

        console.error(err);

        alert("Tidak dapat membaca data user.");

    }

}