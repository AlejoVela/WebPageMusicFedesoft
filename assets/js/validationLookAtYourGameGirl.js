let testLookAtYourGameGirl = document.getElementById("testLookAtYourGameGirl");
let nombreLookAtYourGameGirl = document.getElementById("nombreLookAtYourGameGirl");
let albumLookAtYourGameGirl = document.getElementById("albumLookAtYourGameGirl");
let anioLookAtYourGameGirl = document.getElementById("anioLookAtYourGameGirl");
let compositorLookAtYourGameGirl = document.getElementById("compositorLookAtYourGameGirl");
let tiempoLookAtYourGameGirl = document.getElementById("tiempoLookAtYourGameGirl");

const validarTestLookAtYourGameGirl = () => {
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
            validateInfoLookAtYourGameGirl(nombreUsuario, albumUsuario, anioUsuario, compositorUsuario, tiempoUsuario);
          }
        }
      }
    }
  }
};

const validateInfoLookAtYourGameGirl = (nombreUsuario, albumUsuario, anioUsuario, compositorUsuario, tiempoUsuario) => {
    albumUsuario = albumUsuario.toLowerCase();
    anioUsuario = anioUsuario.toLowerCase();
    compositorUsuario = compositorUsuario.toLowerCase();
    tiempoUsuario = tiempoUsuario.toLowerCase();
    if(albumUsuario === "the spaguetti incident?" && anioUsuario == "2004" && compositorUsuario === "guns n' roses" && tiempoUsuario === "2:34"){
        nombreLookAtYourGameGirl.innerHTML = nombreUsuario;
        albumLookAtYourGameGirl.innerHTML = albumUsuario;
        anioLookAtYourGameGirl.innerHTML = anioUsuario;
        compositorLookAtYourGameGirl.innerHTML = compositorUsuario;
        tiempoLookAtYourGameGirl.innerHTML = tiempoUsuario;
        localStorage.setItem('nombreLookAtYourGameGirl', nombreUsuario);
        localStorage.setItem('albumLookAtYourGameGirl', albumUsuario);
        localStorage.setItem('anioLookAtYourGameGirl', anioUsuario);
        localStorage.setItem('compositorLookAtYourGameGirl', compositorUsuario);
        localStorage.setItem('tiempoLookAtYourGameGirl', tiempoUsuario);
    } else {
        alert("Informacion no correcta");
    }
}

const validateStorageLookAtYourGameGirl = () => {
    if(localStorage.getItem('nombreLookAtYourGameGirl')){
        nombreLookAtYourGameGirl.innerHTML = localStorage.getItem('nombreLookAtYourGameGirl');
        albumLookAtYourGameGirl.innerHTML = localStorage.getItem('albumLookAtYourGameGirl');
        anioLookAtYourGameGirl.innerHTML = localStorage.getItem('anioLookAtYourGameGirl');
        compositorLookAtYourGameGirl.innerHTML = localStorage.getItem('compositorLookAtYourGameGirl');
        tiempoLookAtYourGameGirl.innerHTML = localStorage.getItem('tiempoLookAtYourGameGirl');
    }
}

validateStorageLookAtYourGameGirl();

testLookAtYourGameGirl.onclick = function () {
  validarTestLookAtYourGameGirl();
};
