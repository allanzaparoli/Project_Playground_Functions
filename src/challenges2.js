// Desafio 10
function techList(tecName) {
  tecName = {
   tec: ["React", "Jest", "HTML", "CSS", "JavaScript"],
   nome: "Allan"
  }
  let ListaCompleta = tecName.tec.sort();
    for(let i = 0; i < 5; i += 1) {
     if(ListaCompleta[i]=== "") {
       tecName = "Vazio!";
     }
    }
    return tecName;
  }

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
