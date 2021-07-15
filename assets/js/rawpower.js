/*
* Datos reales para que ingrese la información correcta
Album: the spaghetti incident?
Año: 1993
Compositor: iggy pap
Duración: 3:11

*/
let datosrp = document.getElementById("datosrp");
let nombre = document.getElementById("nombrerp");
let album = document.getElementById("albumrp");
let anio = document.getElementById("aniorp");
let compositor = document.getElementById("compositorrp");
let tiempo = document.getElementById("tiemporp");

const ingresarDatos = () => {
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
    validarStorage();
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
      album.innerHTML = "Error en la información ";
      albumrp = "";
      localStorage.setItem("albumrp", albumrp);
      anio.innerHTML = "";
      aniorp = "";
      localStorage.setItem("aniorp", aniorp);
      compositor.innerHTML = "";
      compositorrp = "";
      localStorage.setItem("compositorrp", compositorrp);
      tiempo.innerHTML = "";
      tiemporp = "";
      localStorage.setItem("tiemporp", tiemporp);

    } else {
      nombre.innerHTML = "Nombre Usuario: " + nombrerp;
      localStorage.setItem("nombrerp", nombrerp);

      album.innerHTML = "Álbum: " + albumrp;
      localStorage.setItem("albumrp", albumrp);

      anio.innerHTML = "Año: " + aniorp;
      localStorage.setItem("aniorp", aniorp);

      compositor.innerHTML = "Compositor: " + compositorrp;
      localStorage.setItem("compositorrp", compositorrp);

      tiempo.innerHTML = "Tiempo de duración: " + tiemporp;
      +" min";
      localStorage.setItem("tiemporp", tiemporp);
    }
  }
};

const validarStorage = () => {
  if (localStorage.getItem("nombrerp")) {
    nombre.innerHTML = "Nombre Usuario: " + localStorage.getItem("nombrerp");
  } else {
    nombre.innerHTML = "Nombre: 'Sin datos' ";
  }

  if (localStorage.getItem("albumrp")) {
    album.innerHTML = "Álbum: " + localStorage.getItem("albumrp");
  } else {
    album.innerHTML = "Álbum: 'Sin datos' ";
  }

  if (localStorage.getItem("aniorp")) {
    anio.innerHTML = "Año: " + localStorage.getItem("aniorp");
  } else {
    anio.innerHTML = "Año: 'Sin datos' ";
  }

  if (localStorage.getItem("compositorrp")) {
    compositor.innerHTML =
      "Compositor: " + localStorage.getItem("compositorrp");
  } else {
    compositor.innerHTML = "Compositor: 'Sin datos' ";
  }

  if (localStorage.getItem("tiemporp")) {
    tiempo.innerHTML =
      "Tiempo de duracion: " + localStorage.getItem("tiemporp") + " min";
  } else {
    tiempo.innerHTML = "Tiempo de duracion: 'Sin datos' ";
  }
};
validarStorage();
datosrp.onclick = function () {
  ingresarDatos();
};