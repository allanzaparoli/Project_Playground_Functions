// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) /2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(lista) {
  return `${lista[lista.length-1]} ${lista[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}

// Desafio 6
let total = 0;
let maior = 0;
let i = 0;
function highestCount(numeros) {
  for(i; i < numeros.length; i += 1) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  for(i; i < numeros.length; i += 1) {
    if (maior === numeros.length) {
      total = total += 1;
    }
  }
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
