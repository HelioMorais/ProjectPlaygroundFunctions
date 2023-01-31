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

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

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
