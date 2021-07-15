/*
* Datos reales para que ingrese la información correcta
Album: the spaghetti incident?
Año: 1993
Compositor: johnny thunders
Duración: 6:48

*/
let datoshb = document.getElementById("datoshb");
let nombreHuman = document.getElementById("nombrehb");
let albumHuman = document.getElementById("albumhb");
let anioHuman = document.getElementById("aniohb");
let compositorHuman = document.getElementById("compositorhb");
let tiempoHuman = document.getElementById("tiempohb");

const ingresarDatosHumans = () => {
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
    validarStorageHumans();
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
      albumHuman.innerHTML = "Error en la información ";
      albumhb = "";
      localStorage.setItem("albumhb", albumhb);
      anioHuman.innerHTML = "";
      aniohb = "";
      localStorage.setItem("aniohb", aniohb);
      compositorHuman.innerHTML = "";
      compositorhb = "";
      localStorage.setItem("compositorhb", compositorhb);
      tiempoHuman.innerHTML = "";
      tiempohb = "";
      localStorage.setItem("tiempohb", tiempohb);

    } else {
      nombreHuman.innerHTML = "Nombre Usuario: " + nombrehb;
      localStorage.setItem("nombrehb", nombrehb);

      albumHuman.innerHTML = "Álbum: " + albumhb;
      localStorage.setItem("albumhb", albumhb);

      anioHuman.innerHTML = "Año: " + aniohb;
      localStorage.setItem("aniohb", aniohb);

      compositorHuman.innerHTML = "Compositor: " + compositorhb;
      localStorage.setItem("compositorhb", compositorhb);

      tiempoHuman.innerHTML = "Tiempo de duración: " + tiempohb;
      +" min";
      localStorage.setItem("tiempohb", tiempohb);
    }
  }
};

const validarStorageHumans = () => {
  if (localStorage.getItem("nombrehb")) {
    nombreHuman.innerHTML = "Nombre Usuario: " + localStorage.getItem("nombrehb");
  } else {
    nombreHuman.innerHTML = "Nombre: 'Sin datos' ";
  }

  if (localStorage.getItem("albumhb")) {
    albumHuman.innerHTML = "Álbum: " + localStorage.getItem("albumhb");
  } else {
    albumHuman.innerHTML = "Álbum: 'Sin datos' ";
  }

  if (localStorage.getItem("aniohb")) {
    anioHuman.innerHTML = "Año: " + localStorage.getItem("aniohb");
  } else {
    anioHuman.innerHTML = "Año: 'Sin datos' ";
  }

  if (localStorage.getItem("compositorhb")) {
    compositorHuman.innerHTML =
      "Compositor: " + localStorage.getItem("compositorhb");
  } else {
    compositorHuman.innerHTML = "Compositor: 'Sin datos' ";
  }

  if (localStorage.getItem("tiempohb")) {
    tiempoHuman.innerHTML =
      "Tiempo de duracion: " + localStorage.getItem("tiempohb") + " min";
  } else {
    tiempoHuman.innerHTML = "Tiempo de duracion: 'Sin datos' ";
  }
};
validarStorageHumans();
datoshb.onclick = function () {
  ingresarDatosHumans();
};
