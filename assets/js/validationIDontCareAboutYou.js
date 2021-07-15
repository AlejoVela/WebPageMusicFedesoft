let testIDontCareAboutYou = document.getElementById("testIDontCareAboutYou");
let nombreIDontCareAboutYou = document.getElementById("nombreIDontCareAboutYou");
let albumIDontCareAboutYou = document.getElementById("albumIDontCareAboutYou");
let anioIDontCareAboutYou = document.getElementById("anioIDontCareAboutYou");
let compositorIDontCareAboutYou = document.getElementById("compositorIDontCareAboutYou");
let tiempoIDontCareAboutYou = document.getElementById("tiempoIDontCareAboutYou");

const validarTestIDontCareAboutYou = () => {
  let nombreUsuario = prompt("Ingrese su nombre");
  if (nombreUsuario == null || nombreUsuario === "") {
    alert("Nombre no valido");
  } else {
    let albumUsuario = prompt("Ingrese el album");
    if (albumUsuario == null || albumUsuario === "") {
      alert("Album no valido");
    } else {
      let anioUsuario = prompt("Ingrese el año de publicación de la canción");
      if (anioUsuario == null || anioUsuario === "") {
        alert("Año no valido");
      } else {
        let compositorUsuario = prompt("Ingrese el compositor de la canción");
        if (compositorUsuario == null || compositorUsuario === "") {
          alert("Compositor no valido");
        } else {
          let tiempoUsuario = prompt("Ingrese la duración de la canción");
          if (tiempoUsuario == null || tiempoUsuario === "") {
            alert("Duración no valido");
          } else {
            validateInfoIDontCareAboutYou(nombreUsuario, albumUsuario, anioUsuario, compositorUsuario, tiempoUsuario);
          }
        }
      }
    }
  }
};

const validateInfoIDontCareAboutYou = (nombreUsuario, albumUsuario, anioUsuario, compositorUsuario, tiempoUsuario) => {
    albumUsuario = albumUsuario.toLowerCase();
    anioUsuario = anioUsuario.toLowerCase();
    compositorUsuario = compositorUsuario.toLowerCase();
    tiempoUsuario = tiempoUsuario.toLowerCase();
    if(albumUsuario === "the spaguetti incident?" && anioUsuario == "1993" && compositorUsuario === "guns n' roses" && tiempoUsuario === "2:17"){
        nombreIDontCareAboutYou.innerHTML = nombreUsuario;
        albumIDontCareAboutYou.innerHTML = albumUsuario;
        anioIDontCareAboutYou.innerHTML = anioUsuario;
        compositorIDontCareAboutYou.innerHTML = compositorUsuario;
        tiempoIDontCareAboutYou.innerHTML = tiempoUsuario;
        localStorage.setItem('nombreIDontCareAboutYou', nombreUsuario);
        localStorage.setItem('albumIDontCareAboutYou', albumUsuario);
        localStorage.setItem('anioIDontCareAboutYou', anioUsuario);
        localStorage.setItem('compositorIDontCareAboutYou', compositorUsuario);
        localStorage.setItem('tiempoIDontCareAboutYou', tiempoUsuario);
    } else {
        alert("Informacion no correcta");
    }
}

const validateStorageIDontCareAboutYou = () => {
    if(localStorage.getItem('nombreIDontCareAboutYou')){
        nombreIDontCareAboutYou.innerHTML = localStorage.getItem('nombreIDontCareAboutYou');
        albumIDontCareAboutYou.innerHTML = localStorage.getItem('albumIDontCareAboutYou');
        anioIDontCareAboutYou.innerHTML = localStorage.getItem('anioIDontCareAboutYou');
        compositorIDontCareAboutYou.innerHTML = localStorage.getItem('compositorIDontCareAboutYou');
        tiempoIDontCareAboutYou.innerHTML = localStorage.getItem('tiempoIDontCareAboutYou');
    }
}

validateStorageIDontCareAboutYou();

testIDontCareAboutYou.onclick = function () {
  validarTestIDontCareAboutYou();
};
