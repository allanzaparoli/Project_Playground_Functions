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
  let first = lista[0];
  let last = lista[lista.length -1];
  let result = `${last}, ${first}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(num) {
  let total = 0;
  let maior = 0;
  for (let i = 0; i < num.length; i += 1) { 
      maior =  Math.max.apply(null, num);
    if (maior === num[i]) {
        total += 1;
      }
  }
  return total;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dgato1;
  let dgato2;
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
function fizzBuzz(nfb) {
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
function encode(letras) {
  for(let i = 0; i < letras.length; i += 1) {
    letras = letras.replace(/a/g, '1');
    letras = letras.replace(/e/g, '2');
    letras = letras.replace(/i/g, '3');
    letras = letras.replace(/o/g, '4');
    letras = letras.replace(/u/g, '5');
  }
  return letras;
}
function decode(letras) {
  for(let i = 0; i < letras.length; i += 1) {
    letras = letras.replace(/1/g, 'a');
    letras = letras.replace(/2/g, 'e');
    letras = letras.replace(/3/g, 'i');
    letras = letras.replace(/4/g, 'o');
    letras = letras.replace(/5/g, 'u');
  }
  return letras;
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
