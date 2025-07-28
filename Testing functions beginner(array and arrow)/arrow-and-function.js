// ---------1---------
function parasykVarda() {
  alert("Audrius")
}
parasykVarda();

// --------2--------
function betKoksSkaicius (){
  let skaicius = Math.floor(Math.random() * 5) + 1;
  console.log(skaicius);
}

betKoksSkaicius();

// ---------3-----------
function sumNameSurname(name, surname) {
  name = "Petras";
  surname = "Slekys";
  return name.length + surname.length;
}

let result = sumNameSurname();
console.log(result);

// ---------4----------
function leidimas(amzius) {
  if (amzius >= 18) {
    return "Galima gerti";
  } else {
    let leidzia = confirm("Reikia tėvų leidimo. Ar tėvai leidžia?");
    return leidzia ? "Leidžiama su tėvų leidimu" : "Negalima be tėvų leidimo";
  }
}
console.log(leidimas(17));

// --------5---------
function raidesISkaicius(random) {
  const raides = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];
    return raides[random];
}

console.log(raidesISkaicius(5));

// ---------6---------
function skaiciuVeiksmas(n1, n2, operator) {
  switch (operator) {
    case "sum":
      return n1 + n2;
    case "sub":
      return n1 - n2;
    case "div":
      return n1 / n2;
    case "multi":
      return n1 * n2;
    default:
      return "Nežinomas operatorius";
  }
}

console.log(skaiciuVeiksmas(5, 7, "multi"));
console.log(skaiciuVeiksmas(6, 3, "sum"));

// ------------7----------
function generateRandomNumber() {
  return Math.floor(Math.random() * 11);
}
function squareNumber(number) {
  return Math.pow(number, 2);
}

console.log(squareNumber(generateRandomNumber()));

////////////////////////////////////////////////////////
//////////////////ARROW PAKEITIMAS//////////////////////
/////////////////////////////////////////////////////////


// ---------1-------------
let manoVardas = () => alert(manoVardas);
console.log("Audrius");

// ---------2-------------
let betKoksSkaicius = () => Math.floor(Math.random() * 5) + 1;
console.log(betKoksSkaicius());

// ---------3-------------
let sumNameSurname = (name, surname) => name.length + surname.length;
let name = "Petras";
let surname = "Slekys";
let resultFullName = sumNameSurname(name, surname);
console.log(resultFullName);

// ---------4-------------
let leidimas = (amzius) => {
  if (amzius >= 18) {
    return "Galima gerti";
  } else {
    let leidzia = confirm("Reikia tėvų leidimo. Ar tėvai leidžia?");
    return leidzia ? "Leidžiama su tėvų leidimu" : "Negalima be tėvų leidimo";
  }
}
console.log(leidimas(17));


// ---------5-------------
let raidesPakeistSkaiciais = (random) => {
  const raides = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];
  return raides[random]
}
console.log(raidesPakeistSkaiciais(5));


// ---------6-------------
let skaiciuVeiksmas = (n1, n2, operator) => {
  switch (operator) {
    case "sum":
      return n1 + n2;
    case "sub":
      return n1 - n2;
    case "div":
      return n1 / n2;
    case "multi":
      return n1 * n2;
    default:
      return "Nežinomas operatorius";
  }
}
console.log(skaiciuVeiksmas(5, 7, "multi"));
console.log(skaiciuVeiksmas(6, 3, "sum"));


// ---------7-------------
let generateRandomNumber = () => Math.floor(Math.random() * 11);
let squareNumber = (number) => Math.pow(number, 2);
console.log(squareNumber(generateRandomNumber()));


////////////////////////////////////////////////////////
//////////////////////3 uzduotis///////////////////////
////////////////////////////////////////////////////////

// ---------------------1-------------------------
let masyvas = [2, 3, 4, 5, 6];

let masyvoElementuSuma = (skaitmenys) => {
  let suma = 0;
  for (let i = 0; i < skaitmenys.length; i++) {
    suma += skaitmenys[i];
  }
  return suma;
}
console.log(masyvoElementuSuma(masyvas));

// ---------------------2-------------------------
let suskaiciuotiZodzius =(sakinys) => {
  let zodziai = sakinys.trim().split(/\s+/);
  return zodziai.length;
}
let sakinys = "Labas pasauli kaip sekasi";
console.log(suskaiciuotiZodzius(sakinys));

// ---------------------3-------------------------
let skaiciuPalyginimas = (rasomasSkaicius) => {
  if (rasomasSkaicius % 2 === 0) {
    return "Lyginis"
  } else {
    return "Nelyginis"
  }
}
console.log(skaiciuPalyginimas(4));


// ---------------------4-------------------------
let didziausiasIsTriju = (a, b, c) => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(didziausiasIsTriju(5, 8, 9));



////////////////////////////////////////////
//////////////////////////////////////////////
////////////////////UZDUOTIS 4///////////////
////////////////////////////////////////////////
//////////////////////////////////////////////////////

// whale language uzduotis

const inputWord = "turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArrayWhale = [];

let whaleLanguage = () => {
  for (let i = 0; i < inputWord.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (inputWord[i] === vowels[j]) {
        if (inputWord[i] === 'e' || inputWord[i] === 'u') {
          resultArrayWhale.push(inputWord[i], inputWord[i]);
        } else {
          resultArrayWhale.push(inputWord[i]);
        }
      }
    }
  }
}

whaleLanguage();
console.log(resultArray.join('').toUpperCase());

// robot language

const input = "hello worldg";
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

let resultArray = [];
let RoboCopSpeak = () => {
  for (let i = 0; i < input.length; i++) {
    const char = input[i].toUpperCase();
    if (consonants.includes(char)) {
      resultArray.push(char);
    }
  }
}
RoboCopSpeak();
console.log(resultArray.join('-'));


///////////////////////////////////////////////
////////////////////////////////////////////
//////////////////////////////////////////////
////////////////////UZDUOTIS 5///////////////
////////////////////////////////////////////////
//////////////////////////////////////////////////////

let skaiciuVeiksmas = (n1, n2, operator) => {
  switch (operator) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "/":
      return n1 / n2;
    case "*":
      return n1 * n2;
    default:
      return "Nežinomas operatorius";
  }
}

let testi = true;

while (testi) {
  let pirmas = Number(prompt("Įveskite pirmą skaičių:"));
  let operator = prompt("Pasirinkite veiksmą: +, -, *, /");
  let antras = Number(prompt("Įveskite antrą skaičių:"));

  let rezultatas = skaiciuVeiksmas(pirmas, antras, operator);

  alert(`Rezultatas: ${pirmas} ${operator} ${antras} = ${rezultatas}`);

  let ats = prompt("Ar norite tęsti skaičiavimą? (taip / ne)").toLowerCase();
  if (ats !== "taip") {
    testi = false;
    alert("Skaičiuotuvas išjungtas. Ačiū!");
  }
}