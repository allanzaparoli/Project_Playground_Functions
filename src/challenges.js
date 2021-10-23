// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(lista) {
  return lista[lista.length-1]+''+lista[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount() {
  let num = [];
  let total = 0;
  let maior = 0;
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] > maior) {
      maior = num[i];
    }
  }
  for (let i = 0; i < num.length; i += 1) {
    if (maior === num[i]) {
      total += 1;
    }
  }
  return total;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let bichos = ["mouse","cat1","cat2","dgato1","dgato2"]
  let resultado;
  if (mouse < cat1) {
    dgato1 = mouse - cat1;
  } else {
    dgato1 = cat1 - mouse;
  }
  if (mouse < cat2) {
    dgato2 = mouse - cat2;
  } else {
    dgato2 = cat2 - mouse;
  }
  if (dgato1 > dgato2) {
    resultado = 'cat1';
  } else if (dgato1 === dgato2) {
    resultado = 'os gatos trombam e o rato foge';
  } else {
    resultado = 'cat2';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz() {
  let nfb;
  let tipos = [];
  for (let i = 0; i < nfb.length; i += 1) {
    if (nfb[i] % 3 === 0 && nfb[i] % 5 === 0) {
      tipos.push('fizzBuzz');
    } else if (nfb[i] % 5 === 0) {
      tipos.push('buzz');
    } else if (nfb[i] % 3 === 0) {
      tipos.push('fizz');
    } else {
      tipos.push('bug!');
    }
  }
  return tipos;
}

// Desafio 9
function encode() {
  
}
function decode() {

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
