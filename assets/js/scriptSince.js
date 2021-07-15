let $nameSince = document.getElementById("nameSince");
let $albumSince = document.getElementById("albumSince");
let $compoSince = document.getElementById("compoSince");
let $yearSince = document.getElementById("yearSince");
let $timeSince = document.getElementById("timeSince");
let $btnSendSince = document.getElementById("sendSince");


const ingresarDatosSince = () => {
    let nameSince = prompt("Ingrese el nombre de la canción");
    let albumSince = prompt("Ingrese el nombre del album");
    let compoSince = prompt("Ingrese el nombre del compositor");
    let yearSince = prompt("Ingrese el año del album");
    let timeSince = prompt("Ingrese el día y mes");
        
    if (nameSince == null || nameSince==="" || albumSince == null || albumSince==="" || compoSince == null || compoSince==="" || yearSince == null || yearSince==="" || timeSince == null || timeSince==="") {
        validarStorageSince();
    } else {
        $nameSince.innerHTML  = "Nombre: " + nameSince;
        $albumSince.innerHTML = "Album: " + albumSince;
        $compoSince.innerHTML = "Compositor: " + compoSince;
        $yearSince.innerHTML  = "Año: " + yearSince;
        $timeSince.innerHTML  = "Tiempo: " + timeSince;

        localStorage.setItem('nameSince', nameSince);
        localStorage.setItem('albumSince', albumSince);
        localStorage.setItem('compoSince', compoSince);
        localStorage.setItem('yearSince', yearSince);
        localStorage.setItem('timeSince', timeSince);
    }
};


const validarStorageSince = () => {
    if (localStorage.getItem('nameSince') && localStorage.getItem('albumSince') && localStorage.getItem('compoSince') && localStorage.getItem('yearSince') && localStorage.getItem('timeSince')) {

        $nameSince.innerHTML  = "Nombre: " + localStorage.getItem("nameSince");
        $albumSince.innerHTML = "Album: " + localStorage.getItem("albumSince");
        $compoSince.innerHTML = "Compositor: " + localStorage.getItem("compoSince");
        $yearSince.innerHTML  = "Año: " + localStorage.getItem("yearSince");
        $timeSince.innerHTML  = "Tiempo: " + localStorage.getItem("timeSince");
        console.log("recupera datos de storage");
    } else {
        $nameSince.innerHTML  = "Nombre: sin datos";
        $albumSince.innerHTML = "Album: sin datos";
        $compoSince.innerHTML = "Compositor: sin datos";
        $yearSince.innerHTML  = "Año: sin datos";
        $timeSince.innerHTML  = "Tiempo: sin datos";
    }
};




//validamos si existe una variable en el local storage con el nombre "nombre"
//siempre retorna string
validarStorageSince();


//events
$btnSendSince.onclick = function () {
    ingresarDatosSince();
};
