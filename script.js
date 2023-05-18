const correctas = [2,2,3,4,4];

let marcadas = [];
let mcorrectas = 0;

function respuesta(num_pregunta, seleccionada){

marcadas[num_pregunta] =seleccionada.value;
id="p" + num_pregunta;
labels = document.getElementById(id).childNodes;


}

function corregir() {
    mcorrectas = 0;
    for (i = 0; i < correctas.length; i++) {
      let id = "p" + i;
      let labels = document.getElementById(id).querySelectorAll("label");
      if (correctas[i] == marcadas[i]) {
        mcorrectas++;
        labels[correctas[i] - 1].style.backgroundColor = "green";
      } else {
        labels[correctas[i] - 1].style.backgroundColor = "red";
      }
    }
    document.getElementById("resultado").innerHTML = mcorrectas;
  }