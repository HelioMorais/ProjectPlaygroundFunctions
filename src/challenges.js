/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */
// Desafio 1 - Crie a função compareTrue
const girafa = true;
const elefante = true;
const macaco = false;
const compareTrue = (a, b) => a && b;
console.log(compareTrue(girafa, elefante));
console.log(compareTrue(macaco, elefante));
// Desafio 2 - Crie a função splitSentence
function splitSentence(sentence) {
  let words = sentence.split(' ');
  return words;
}
splitSentence('go trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

// Desafio 3 - Crie a função concatName
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let concatAll = `${lastItem}, ${firstItem}`;
  return concatAll;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
concatName(['foguete', 'não', 'tem', 'ré']);
concatName(['captain', 'my', 'captain']);

// Desafio 4 - Crie a função footballPoints
function footballPoints(win, ties) {
  let points = (win * 3) + ties;
  return points;
}
footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 5 - Crie a função highestCount
function highestCount(array) {
  let numberBig = array[0];
  let repetitions = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (numberBig < array[index]) {
      numberBig = array[index];
      repetitions = 1;
    } else if (array[index] === numberBig) {
      repetitions += 1;
    }
  }
  return repetitions;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);
highestCount([0, 4, 4, 4, 9, 2, 1]);
highestCount([0, 0, 0]);

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea(base, heigth) {
  let areaTotalTri = (base * heigth) / 2;
  return areaTotalTri;
}

function calcRectangleArea(base, heigth) {
  let areaTotalRet = (base * heigth);
  return areaTotalRet;
}

function calcAllAreas(base, heigth, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, heigth)}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, heigth)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}
calcTriangleArea(10, 50);
calcRectangleArea(10, 50);
calcAllAreas(10, 50, 'triângulo');
calcAllAreas(10, 50, 'retângulo');
calcAllAreas(10, 50, 'quadrado');
// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  let distg1 = Math.abs(mouse - cat1);
  let distg2 = Math.abs(mouse - cat2);
  let result;
  if (distg1 > distg2) {
    result = 'cat2';
  } else if (distg2 > distg1) {
    result = 'cat1';
  } else if (distg1 === distg2) {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
console.log(catAndMouse(1, 4, 5));
// Desafio 8 - Crie a função fizzBuzz
/* eslint-disable complexity */
function fizzBuzz(param) {
  let result = [];
  for (let index = 0; index < param.length; index += 1) {
    if (param[index] % 3 === 0 && param[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (param[index] % 3 === 0 && param[index] % 5 !== 0) {
      result.push('fizz');
    } else if (param[index] % 3 !== 0 && param[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));
// Desafio 9 - Crie a função encode e a função decode
/* eslint-disable complexity */
function encode(barabam) {
  let result = '';
  for (let index = 0; index < barabam.length; index += 1) {
    switch (barabam[index]) {
    case 'a':
      result += 1;
      break;
    case 'e':
      result += 2;
      break;
    case 'i':
      result += 3;
      break;
    case 'o':
      result += 4;
      break;
    case 'u':
      result += 5;
      break;
    default:
      result += barabam[index];
      break;
    }
  }
  return result;
}
/* eslint-disable complexity */
function decode(barabam) {
  let result = '';
  for (let index = 0; index < barabam.length; index += 1) {
    switch (barabam[index]) {
    case '1':
      result += 'a';
      break;
    case '2':
      result += 'e';
      break;
    case '3':
      result += 'i';
      break;
    case '4':
      result += 'o';
      break;
    case '5':
      result += 'u';
      break;
    default:
      result += barabam[index];
      break;
    }
  }
  return result;
}
console.log(encode('hello'));
console.log(decode('h2ll4'));
console.log(encode('How are you today?'));
console.log(encode('This is an encoding test.'));
console.log(encode('go Trybe!'));
/* eslint-disable complexity */
// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
