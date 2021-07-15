/*
* Datos reales para que ingrese la información correcta
Album: the spaghetti incident?
Año: 1993
Compositor: johnny thunders
Duración: 6:48

*/
let datoshb = document.getElementById("datoshb");
let nombre = document.getElementById("nombrehb");
let album = document.getElementById("albumhb");
let anio = document.getElementById("aniohb");
let compositor = document.getElementById("compositorhb");
let tiempo = document.getElementById("tiempohb");

const ingresarDatos = () => {
  let nombrehb = prompt("Ingrese su nombre");
  let albumhb = prompt("Ingrese el nombre del álbum");
  let aniohb = prompt("Ingrese el año de lanzamiento");
  let compositorhb = prompt("Ingrese el y/o compositores");
  let tiempohb = prompt("Ingrese el tiempo de duración en formato min:seg");

  if (
    nombrehb == null ||
    nombrehb === "" ||
    albumhb == null ||
    albumhb === "" ||
    aniohb == null ||
    aniohb === "" ||
    compositorhb == null ||
    compositorhb === "" ||
    tiempohb == null ||
    tiempohb === ""
  ) {
    validarStorage();
    albumhb = albumhb.toLowerCase();
    aniohb = aniohb.toLowerCase();
    compositorhb = compositorhb.toLowerCase();
    tiempohb = tiempohb.toLowerCase();
  } else {
    if (
      albumhb !== "the spaghetti incident?" ||
      aniohb !== "1993" ||
      compositorhb !== "johnny thunders" ||
      tiempohb !== "6:48"
    ) {
      album.innerHTML = "Error en la información ";
      albumhb = "";
      localStorage.setItem("albumhb", albumhb);
      anio.innerHTML = "";
      aniohb = "";
      localStorage.setItem("aniohb", aniohb);
      compositor.innerHTML = "";
      compositorhb = "";
      localStorage.setItem("compositorhb", compositorhb);
      tiempo.innerHTML = "";
      tiempohb = "";
      localStorage.setItem("tiempohb", tiempohb);

    } else {
      nombre.innerHTML = "Nombre Usuario: " + nombrehb;
      localStorage.setItem("nombrehb", nombrehb);

      album.innerHTML = "Álbum: " + albumhb;
      localStorage.setItem("albumhb", albumhb);

      anio.innerHTML = "Año: " + aniohb;
      localStorage.setItem("aniohb", aniohb);

      compositor.innerHTML = "Compositor: " + compositorhb;
      localStorage.setItem("compositorhb", compositorhb);

      tiempo.innerHTML = "Tiempo de duración: " + tiempohb;
      +" min";
      localStorage.setItem("tiempohb", tiempohb);
    }
  }
};

const validarStorage = () => {
  if (localStorage.getItem("nombrehb")) {
    nombre.innerHTML = "Nombre Usuario: " + localStorage.getItem("nombrehb");
  } else {
    nombre.innerHTML = "Nombre: 'Sin datos' ";
  }

  if (localStorage.getItem("albumhb")) {
    album.innerHTML = "Álbum: " + localStorage.getItem("albumhb");
  } else {
    album.innerHTML = "Álbum: 'Sin datos' ";
  }

  if (localStorage.getItem("aniohb")) {
    anio.innerHTML = "Año: " + localStorage.getItem("aniohb");
  } else {
    anio.innerHTML = "Año: 'Sin datos' ";
  }

  if (localStorage.getItem("compositorhb")) {
    compositor.innerHTML =
      "Compositor: " + localStorage.getItem("compositorhb");
  } else {
    compositor.innerHTML = "Compositor: 'Sin datos' ";
  }

  if (localStorage.getItem("tiempohb")) {
    tiempo.innerHTML =
      "Tiempo de duracion: " + localStorage.getItem("tiempohb") + " min";
  } else {
    tiempo.innerHTML = "Tiempo de duracion: 'Sin datos' ";
  }
};
validarStorage();
datoshb.onclick = function () {
  ingresarDatos();
};
