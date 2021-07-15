let $nameNewRoses = document.getElementById("nameNewRoses");
let $albumNewRoses = document.getElementById("albumNewRoses");
let $compoNewRoses = document.getElementById("compoNewRoses");
let $yearNewRoses = document.getElementById("yearNewRoses");
let $timeNewRoses = document.getElementById("timeNewRoses");
let $btnSendNewRoses = document.getElementById("sendNewRoses");


const ingresarDatosRoses = () => {
    let nameNewRoses = prompt("Ingrese el nombre de la canción");
    let albumNewRoses = prompt("Ingrese el nombre del album");
    let compoNewRoses = prompt("Ingrese el nombre del compositor");
    let yearNewRoses = prompt("Ingrese el año del album");
    let timeNewRoses = prompt("Ingrese el día y mes");
        
    if (nameNewRoses == null || nameNewRoses==="" || albumNewRoses == null || albumNewRoses==="" || compoNewRoses == null || compoNewRoses==="" || yearNewRoses == null || yearNewRoses==="" || timeNewRoses == null || timeNewRoses==="") {
        validarStorageRoses();
    } else {
        $nameNewRoses.innerHTML  = "Nombre: " + nameNewRoses;
        $albumNewRoses.innerHTML = "Album: " + albumNewRoses;
        $compoNewRoses.innerHTML = "Compositor: " + compoNewRoses;
        $yearNewRoses.innerHTML  = "Año: " + yearNewRoses;
        $timeNewRoses.innerHTML  = "Tiempo: " + timeNewRoses;

        localStorage.setItem('nameNewRoses', nameNewRoses);
        localStorage.setItem('albumNewRoses', albumNewRoses);
        localStorage.setItem('compoNewRoses', compoNewRoses);
        localStorage.setItem('yearNewRoses', yearNewRoses);
        localStorage.setItem('timeNewRoses', timeNewRoses);
    }
};


const validarStorageRoses = () => {
    if (localStorage.getItem('nameNewRoses') && localStorage.getItem('albumNewRoses') && localStorage.getItem('compoNewRoses') && localStorage.getItem('yearNewRoses') && localStorage.getItem('timeNewRoses')) {

        $nameNewRoses.innerHTML  = "Nombre: " + localStorage.getItem("nameNewRoses");
        $albumNewRoses.innerHTML = "Album: " + localStorage.getItem("albumNewRoses");
        $compoNewRoses.innerHTML = "Compositor: " + localStorage.getItem("compoNewRoses");
        $yearNewRoses.innerHTML  = "Año: " + localStorage.getItem("yearNewRoses");
        $timeNewRoses.innerHTML  = "Tiempo: " + localStorage.getItem("timeNewRoses");
        console.log("recupera datos de storage");
    } else {
        $nameNewRoses.innerHTML  = "Nombre: sin datos";
        $albumNewRoses.innerHTML = "Album: sin datos";
        $compoNewRoses.innerHTML = "Compositor: sin datos";
        $yearNewRoses.innerHTML  = "Año: sin datos";
        $timeNewRoses.innerHTML  = "Tiempo: sin datos";
    }
};




//validamos si existe una variable en el local storage con el nombre "nombre"
//siempre retorna string
validarStorageRoses();


//events
$btnSendNewRoses.onclick = function () {
    ingresarDatosRoses();
};
