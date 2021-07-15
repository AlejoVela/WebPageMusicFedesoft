/*
* Datos reales para que ingrese la información correcta
Album: the spaghetti incident?
Año: 1993
Compositor: iggy pap
Duración: 3:11

*/
let datosrp = document.getElementById("datosrp");
let nombreRaw = document.getElementById("nombrerp");
let albumRaw = document.getElementById("albumrp");
let anioRaw = document.getElementById("aniorp");
let compositorRaw = document.getElementById("compositorrp");
let tiempoRaw = document.getElementById("tiemporp");

const ingresarDatosRaw = () => {
  let nombrerp = prompt("Ingrese su nombre");
  let albumrp = prompt("Ingrese el nombre del álbum");
  let aniorp = prompt("Ingrese el año de lanzamiento");
  let compositorrp = prompt("Ingrese el y/o compositores");
  let tiemporp = prompt("Ingrese el tiempo de duración en formato min:seg");

  if (
    nombrerp == null ||
    nombrerp === "" ||
    albumrp == null ||
    albumrp === "" ||
    aniorp == null ||
    aniorp === "" ||
    compositorrp == null ||
    compositorrp === "" ||
    tiemporp == null ||
    tiemporp === ""
  ) {
    validarStorageRaw();
    albumrp = albumrp.toLowerCase();
    aniorp = aniorp.toLowerCase();
    compositorrp = compositorrp.toLowerCase();
    tiemporp = tiemporp.toLowerCase();
  } else {
    if (
      albumrp !== "the spaghetti incident?" ||
      aniorp !== "1993" ||
      compositorrp !== "iggy pap" ||
      tiemporp !== "3:11"
    ) {
      albumRaw.innerHTML = "Error en la información ";
      albumrp = "";
      localStorage.setItem("albumrp", albumrp);
      anioRaw.innerHTML = "";
      aniorp = "";
      localStorage.setItem("aniorp", aniorp);
      compositorRaw.innerHTML = "";
      compositorrp = "";
      localStorage.setItem("compositorrp", compositorrp);
      tiempoRaw.innerHTML = "";
      tiemporp = "";
      localStorage.setItem("tiemporp", tiemporp);

    } else {
      nombreRaw.innerHTML = "Nombre Usuario: " + nombrerp;
      localStorage.setItem("nombrerp", nombrerp);

      albumRaw.innerHTML = "Álbum: " + albumrp;
      localStorage.setItem("albumrp", albumrp);

      anioRaw.innerHTML = "Año: " + aniorp;
      localStorage.setItem("aniorp", aniorp);

      compositorRaw.innerHTML = "Compositor: " + compositorrp;
      localStorage.setItem("compositorrp", compositorrp);

      tiempoRaw.innerHTML = "Tiempo de duración: " + tiemporp;
      +" min";
      localStorage.setItem("tiemporp", tiemporp);
    }
  }
};

const validarStorageRaw = () => {
  if (localStorage.getItem("nombrerp")) {
    nombreRaw.innerHTML = "Nombre Usuario: " + localStorage.getItem("nombrerp");
  } else {
    nombreRaw.innerHTML = "Nombre: 'Sin datos' ";
  }

  if (localStorage.getItem("albumrp")) {
    albumRaw.innerHTML = "Álbum: " + localStorage.getItem("albumrp");
  } else {
    albumRaw.innerHTML = "Álbum: 'Sin datos' ";
  }

  if (localStorage.getItem("aniorp")) {
    anioRaw.innerHTML = "Año: " + localStorage.getItem("aniorp");
  } else {
    anioRaw.innerHTML = "Año: 'Sin datos' ";
  }

  if (localStorage.getItem("compositorrp")) {
    compositorRaw.innerHTML =
      "Compositor: " + localStorage.getItem("compositorrp");
  } else {
    compositorRaw.innerHTML = "Compositor: 'Sin datos' ";
  }

  if (localStorage.getItem("tiemporp")) {
    tiempoRaw.innerHTML =
      "Tiempo de duracion: " + localStorage.getItem("tiemporp") + " min";
  } else {
    tiempoRaw.innerHTML = "Tiempo de duracion: 'Sin datos' ";
  }
};
validarStorageRaw();
datosrp.onclick = function () {
  ingresarDatosRaw();
};