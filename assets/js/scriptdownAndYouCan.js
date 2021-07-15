let pruebaYouCantPutYourArmsAroundAMemory = document.getElementById("pruebaYouCantPutYourArmsAroundAMemory");
let nombreYouCantPutYourArmsAroundAMemory = document.getElementById("nombreYouCantPutYourArmsAroundAMemory");
let albumYouCantPutYourArmsAroundAMemory = document.getElementById("albumYouCantPutYourArmsAroundAMemory");
let anioYouCantPutYourArmsAroundAMemory = document.getElementById("anioYouCantPutYourArmsAroundAMemory");
let compositorYouCantPutYourArmsAroundAMemory = document.getElementById("compositorYouCantPutYourArmsAroundAMemory");
let tiempoYouCantPutYourArmsAroundAMemory = document.getElementById("tiempoYouCantPutYourArmsAroundAMemory");

const validarYouCantPutYourArmsAroundAMemory = () => {
  let nombreUsuario = prompt("Ingrese su nombre");
  if (nombreUsuario == null) {
    alert("Nombre no valido");
  } else {
    let albumUsuario = prompt("Ingrese el album");
    if (albumUsuario == null) {
      alert("Album no valido");
    } else {
      let anioUsuario = prompt("Ingrese el año de publicación");
      if (anioUsuario == null) {
        alert("Año no valido");
      } else {
        let compositorUsuario = prompt("Ingrese el compositor");
        if (compositorUsuario == null) {
          alert("Compositor no valido");
        } else {
          let tiempoUsuario = prompt("Ingrese la duración");
          if (tiempoUsuario == null) {
            alert("Duración no valido");
          } else {
            validateInformacionYouCantPutYourArmsAroundAMemory(nombreUsuario, albumUsuario, anioUsuario, compositorUsuario, tiempoUsuario);
          }
        }
      }
    }
  }
};

const validateInformacionYouCantPutYourArmsAroundAMemory = (nombreUsuario, albumUsuario, anioUsuario, compositorUsuario, tiempoUsuario) => {
    albumUsuario = albumUsuario.toLowerCase();
    anioUsuario = anioUsuario.toLowerCase();
    compositorUsuario = compositorUsuario.toLowerCase();
    tiempoUsuario = tiempoUsuario.toLowerCase();
    if(albumUsuario === "the spaguetti incident?" && anioUsuario == "1993" && compositorUsuario === "guns n' roses" && tiempoUsuario === "3:35"){
        nombreYouCantPutYourArmsAroundAMemory.innerHTML = nombreUsuario;
        albumYouCantPutYourArmsAroundAMemory.innerHTML = albumUsuario;
        anioYouCantPutYourArmsAroundAMemory.innerHTML = anioUsuario;
        compositorYouCantPutYourArmsAroundAMemory.innerHTML = compositorUsuario;
        tiempoYouCantPutYourArmsAroundAMemory.innerHTML = tiempoUsuario;
        localStorage.setItem('nombreYouCantPutYourArmsAroundAMemory', nombreUsuario);
        localStorage.setItem('albumYouCantPutYourArmsAroundAMemory', albumUsuario);
        localStorage.setItem('anioYouCantPutYourArmsAroundAMemory', anioUsuario);
        localStorage.setItem('compositorYouCantPutYourArmsAroundAMemory', compositorUsuario);
        localStorage.setItem('tiempoYouCantPutYourArmsAroundAMemory', tiempoUsuario);
    } else {
        alert("Informacion no correcta");
    }
}

const validateStorageYouCantPutYourArmsAroundAMemory = () => {
    if(localStorage.getItem('nombreYouCantPutYourArmsAroundAMemory')){
        nombreYouCantPutYourArmsAroundAMemory.innerHTML = localStorage.getItem('nombreYouCantPutYourArmsAroundAMemory');
    }
    if(localStorage.getItem('albumYouCantPutYourArmsAroundAMemory')){
        albumYouCantPutYourArmsAroundAMemory.innerHTML = localStorage.getItem('albumYouCantPutYourArmsAroundAMemory');
    }
    if(localStorage.getItem('anioYouCantPutYourArmsAroundAMemory')){
        anioYouCantPutYourArmsAroundAMemory.innerHTML = localStorage.getItem('anioYouCantPutYourArmsAroundAMemory');
    }
    if(localStorage.getItem('compositorYouCantPutYourArmsAroundAMemory')){
        compositorYouCantPutYourArmsAroundAMemory.innerHTML = localStorage.getItem('compositorYouCantPutYourArmsAroundAMemory');
    }
    if(localStorage.getItem('tiempoYouCantPutYourArmsAroundAMemory')){
        tiempoYouCantPutYourArmsAroundAMemory.innerHTML = localStorage.getItem('tiempoYouCantPutYourArmsAroundAMemory');
    }
}

validateStorageYouCantPutYourArmsAroundAMemory();

pruebaYouCantPutYourArmsAroundAMemory.onclick = function () {
  validarYouCantPutYourArmsAroundAMemory();
};




let pruebaDownOnTheFarm = document.getElementById("pruebaDownOnTheFarm");
let nombreDownOnTheFarm = document.getElementById("nombreDownOnTheFarm");
let albumDownOnTheFarm = document.getElementById("albumDownOnTheFarm");
let anioDownOnTheFarm = document.getElementById("anioDownOnTheFarm");
let compositorDownOnTheFarm = document.getElementById("compositorDownOnTheFarm");
let tiempoDownOnTheFarm = document.getElementById("tiempoDownOnTheFarm");

const validarDownOnTheFarm = () => {
  let nombreUsuario = prompt("Ingrese su nombre");
  if (nombreUsuario == null) {
    alert("Nombre no valido");
  } else {
    let albumUsuario = prompt("Ingrese el album");
    if (albumUsuario == null) {
      alert("Album no valido");
    } else {
      let anioUsuario = prompt("Ingrese el año de publicación");
      if (anioUsuario == null) {
        alert("Año no valido");
      } else {
        let compositorUsuario = prompt("Ingrese el compositor");
        if (compositorUsuario == null) {
          alert("Compositor no valido");
        } else {
          let tiempoUsuario = prompt("Ingrese la duración");
          if (tiempoUsuario == null) {
            alert("Duración no valido");
          } else {
            validateInformacionDownOnTheFarm(nombreUsuario, albumUsuario, anioUsuario, compositorUsuario, tiempoUsuario);
          }
        }
      }
    }
  }
};

const validateInformacionDownOnTheFarm = (nombreUsuario, albumUsuario, anioUsuario, compositorUsuario, tiempoUsuario) => {
    albumUsuario = albumUsuario.toLowerCase();
    anioUsuario = anioUsuario.toLowerCase();
    compositorUsuario = compositorUsuario.toLowerCase();
    tiempoUsuario = tiempoUsuario.toLowerCase();
    if(albumUsuario === "the spaguetti incident?" && anioUsuario == "1993" && compositorUsuario === "guns n' roses" && tiempoUsuario === "3:29"){
        nombreDownOnTheFarm.innerHTML = nombreUsuario;
        albumDownOnTheFarm.innerHTML = albumUsuario;
        anioDownOnTheFarm.innerHTML = anioUsuario;
        compositorDownOnTheFarm.innerHTML = compositorUsuario;
        tiempoDownOnTheFarm.innerHTML = tiempoUsuario;
        localStorage.setItem('nombreDownOnTheFarm', nombreUsuario);
        localStorage.setItem('albumDownOnTheFarm', albumUsuario);
        localStorage.setItem('anioDownOnTheFarm', anioUsuario);
        localStorage.setItem('compositorDownOnTheFarm', compositorUsuario);
        localStorage.setItem('tiempoDownOnTheFarm', tiempoUsuario);
    } else {
        alert("Informacion no correcta");
    }
}

const validateStorageDownOnTheFarm = () => {
    if(localStorage.getItem('nombreDownOnTheFarm')){
        nombreDownOnTheFarm.innerHTML = localStorage.getItem('nombreDownOnTheFarm');
    }
    if(localStorage.getItem('albumDownOnTheFarm')){
        albumDownOnTheFarm.innerHTML = localStorage.getItem('albumDownOnTheFarm');
    }
    if(localStorage.getItem('anioDownOnTheFarm')){
        anioDownOnTheFarm.innerHTML = localStorage.getItem('anioDownOnTheFarm');
    }
    if(localStorage.getItem('compositorDownOnTheFarm')){
        compositorDownOnTheFarm.innerHTML = localStorage.getItem('compositorDownOnTheFarm');
    }
    if(localStorage.getItem('tiempoDownOnTheFarm')){
        tiempoDownOnTheFarm.innerHTML = localStorage.getItem('tiempoDownOnTheFarm');
    }
}

validateStorageDownOnTheFarm();

pruebaDownOnTheFarm.onclick = function () {
  validarDownOnTheFarm();
};