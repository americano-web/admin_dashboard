// =========================================
// SETTINGS.JS
// =========================================

document.addEventListener("DOMContentLoaded", async () => {

    try{

        const response = await fetch("data/dummy.json");

        const data = await response.json();

        loadSettings(data.settings);

    }

    catch(err){

        console.error(err);

    }

});

// =========================================
// LOAD SETTINGS
// =========================================

function loadSettings(settings){

    const emailNotification =
        document.getElementById("emailNotification");

    const autoBackup =
        document.getElementById("autoBackup");

    const darkMode =
        document.getElementById("darkMode");

    if(emailNotification)
        emailNotification.checked =
            settings.emailNotification;

    if(autoBackup)
        autoBackup.checked =
            settings.autoBackup;

    if(darkMode)
        darkMode.checked =
            settings.theme==="dark";

}

// =========================================
// SAVE PROFILE
// =========================================

const saveButton =
document.getElementById("saveProfile");

if(saveButton){

saveButton.addEventListener("click",(e)=>{

e.preventDefault();

const name =
document.getElementById("adminName").value;

const email =
document.getElementById("adminEmail").value;

localStorage.setItem("adminName",name);

localStorage.setItem("adminEmail",email);

alert("Profile berhasil disimpan.");

});

}

// =========================================
// EMAIL NOTIFICATION
// =========================================

const emailNotification =
document.getElementById("emailNotification");

if(emailNotification){

emailNotification.addEventListener("change",()=>{

localStorage.setItem(

"emailNotification",

emailNotification.checked

);

});

}

// =========================================
// AUTO BACKUP
// =========================================

const autoBackup =
document.getElementById("autoBackup");

if(autoBackup){

autoBackup.addEventListener("change",()=>{

localStorage.setItem(

"autoBackup",

autoBackup.checked

);

});

}

// =========================================
// DARK MODE
// =========================================

const darkMode =
document.getElementById("darkMode");

if(darkMode){

darkMode.addEventListener("change",()=>{

if(darkMode.checked){

document.body.classList.add("dark");

}else{

document.body.classList.remove("dark");

}

});

}