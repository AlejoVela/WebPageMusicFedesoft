let starQuestions = document.getElementById("starQuestions");

let anio = document.getElementById("anio");
let duracion = document.getElementById("duracion");
let discografica = document.getElementById("discografica");
let generos = document.getElementById("generos");
let collapseExample = document.getElementById("collapseExample");


const validarStorage = (objectHtml, object) => {
    objectHtml = eval(objectHtml);

    if(localStorage.getItem(object) == ''){
        objectHtml.innerHTML = "";
    }
    if(localStorage.getItem(object)){
        objectHtml.innerHTML = localStorage.getItem(object);
    }
    else{
        localStorage.setItem(objectHtml, '');
        objectHtml.innerHTML = "";
    }
}

validarStorage("anio", "year_publication");
validarStorage("duracion", "duration_album");
validarStorage("discografica", "record_company");
validarStorage("generos","musical_genres");


starQuestions.onclick = function () {

  let sw = enterData(
    "Ingrese el año de publicación de este álbum: \n 1. 2021. \n 2. 1893. \n 3. 1492. \n 4. 1993.",
    "4",
    "Correcto! El álbum se publicó en 1993. Continuemos con la siguiente pregunta...",
    "year_publication",
    "1993",
    "Ooops! El álbum no fue se publicado en el año seleccionado.",
    "anio"
  );
  if (sw === 1) {
    let swDuration = enterData(
      "Seleccione la duración de este álbum: \n 1. 1:25. \n 2. 46:06. \n 3. 30:00. \n 4. 5:00.",
      "2",
      "Correcto! La duración del álbum es de 46:06 minutos. Continuemos con la siguiente pregunta...",
      "duration_album",
      "46:06",
      "Ooops! La duración del álbum no es la seleccionada.",
      "duracion"
    );
    if (swDuration === 1) {
      let sw = enterData(
        "Seleccione la disquera de este álbum: \n 1. Sony. \n 2. Palenque Records. \n 3. Geffen Records. \n 4. La Distritofónica.",
        "3",
        "Correcto! El la disquera de este álbum es Geffen Records. Continuemos con la siguiente pregunta...",
        "record_company",
        "Geffen Records",
        "Ooops! La disquera del álbum no es la seleccionada.",
        "discografica"
      );
      if (sw === 1) {
        enterData(
          "Seleccione los géneros de este álbum: " +
            " \n 1. Punk Rock, Hard Rock, Glam Rock. \n 2. Salsa Merengue. \n 3. Cumbia, Vallenato. \n 4. Jazz, Soul.",
          "1",
          "Correcto! Los géneros que incluye este álbum son Punk Rock, Hard Rock, Glam Rock. Felicidades, contestaste todo correctamente...",
          "musical_genres",
          "Punk Rock, Hard Rock, Glam Rock",
          "Ooops! Los géneros seleccionados, no corresponden al álbum Spaguetti Incident?. Intenta nuevamente.",
          "generos"
        );
      }
    }
  }
};


const enterData = (
  textPrompt,
  correctAnswer,
  textOk,
  nameStorageVar,
  valueStorageVar,
  textFail,
  objectSpan
) => {
  let recordCompany = prompt(textPrompt);
  let sw = 0;
  objectSpan = eval(objectSpan);
  if (recordCompany === correctAnswer) {
    alert(textOk);
    localStorage.setItem(nameStorageVar, valueStorageVar);
    objectSpan.innerHTML = valueStorageVar;
    sw = 1;
  } else {
    if (recordCompany === null || recordCompany === "") {
      alert("Debes ingresar un valor de la lista.");
      sw = 0;
    } else if (recordCompany !== correctAnswer) {
      alert(textFail);
      sw = 0;
    }
  }
  if(sw === 0){
    objectSpan.innerHTML = "";
    localStorage.setItem(nameStorageVar, '');
  }

  return sw;
};
