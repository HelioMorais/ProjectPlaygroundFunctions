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

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

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
