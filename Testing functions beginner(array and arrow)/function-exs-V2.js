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

let result1234 = sumNameSurname();
console.log(result1234);

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
let result = sumNameSurname(name, surname);
console.log(result);

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

const input = "turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

let whaleLanguage = () => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        if (input[i] === 'e' || input[i] === 'u') {
          resultArray.push(input[i], input[i]);
        } else {
          resultArray.push(input[i]);
        }
      }
    }
  }
}

whaleLanguage();
console.log(resultArray.join('').toUpperCase());

// robot language

const input123 = "hello worldg";
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

let result123Array = [];
let RoboCopSpeak = () => {
  for (let i = 0; i < input.length; i++) {
    const char = input[i].toUpperCase();
    if (consonants.includes(char)) {
      result123Array.push(char);
    }
  }
}
RoboCopSpeak();
console.log(result123Array.join('-'));


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
      return n2 !== 0 ? n1 / n2 : "Dalyba iš nulio negalima";
    case "*":
      return n1 * n2;
    default:
      return "Nežinomas operatorius";
  }
}

let testi = true;
let rezultatas = null;

while (testi) {
  let pirmas;

  if (rezultatas === null) {
    let pirmasIvestis = prompt("Įveskite pirmą skaičių:");
    if (pirmasIvestis === null || pirmasIvestis.trim() === "" || isNaN(Number(pirmasIvestis))) {
      alert("Neteisinga įvestis. Skaičiuotuvas išjungtas. Ačiū!");
      break;
    }
    pirmas = Number(pirmasIvestis);
  } else {
    let naudotiRezultata = prompt(`Naudoti ankstesnį rezultatą (${rezultatas}) kaip pirmą skaičių? (T / N)`);
    if (naudotiRezultata && naudotiRezultata.toLowerCase() === "t") {
      pirmas = rezultatas;
    } else {
      let pirmasIvestis = prompt("Įveskite pirmą skaičių:");
      if (pirmasIvestis === null || pirmasIvestis.trim() === "" || isNaN(Number(pirmasIvestis))) {
        alert("Neteisinga įvestis. Skaičiuotuvas išjungtas. Ačiū!");
        break;
      }
      pirmas = Number(pirmasIvestis);
    }
  }

  let operator = prompt("Pasirinkite veiksmą: +, -, *, /");
  if (!["+", "-", "*", "/"].includes(operator)) {
    alert("Neteisingas operatorius. Skaičiuotuvas išjungtas. Ačiū!");
    break;
  }

  let antrasIvestis = prompt("Įveskite antrą skaičių:");
  if (antrasIvestis === null || antrasIvestis.trim() === "" || isNaN(Number(antrasIvestis))) {
    alert("Neteisinga įvestis. Skaičiuotuvas išjungtas. Ačiū!");
    break;
  }
  let antras = Number(antrasIvestis);

  rezultatas = skaiciuVeiksmas(pirmas, antras, operator);

  alert(`Rezultatas: ${pirmas} ${operator} ${antras} = ${rezultatas}`);

  let ats = prompt("Ar norite tęsti skaičiavimą? (T / N)");
  if (!ats || ats.toLowerCase() !== "t") {
    testi = false;
    alert("Skaičiuotuvas išjungtas. Ačiū!");
  }
}



///////////////////////////////////////////////
////////////////////////////////////////////
//////////////////////////////////////////////
////////////////////UZDUOTIS 6///////////////
////////////////////////////////////////////////
//////////////////////////////////////////////////////

let knygos = [];
let testinis = true;

while (testinis) {
  let pasirinkimas = prompt(
    "Pasirinkite veiksmą:\n1 – Pridėti naują knygą\n2 – Rodyti knygų sąrašą\n3 – Ištrinti knygą\n4 – Baigti programą"
  );

  switch (pasirinkimas) {
    case "1":
      let naujaKnyga = prompt("Įveskite knygos pavadinimą:");

      if (naujaKnyga === null || naujaKnyga.trim() === "") {
        alert("Nepateiktas pavadinimas.");
      } else if (knygos.includes(naujaKnyga.trim())) {
        alert("Tokia knyga jau egzistuoja.");
      } else {
        knygos.push(naujaKnyga.trim());
        alert("Knyga pridėta.");
      }
      break;

    case "2":
      if (knygos.length === 0) {
        alert("Sąrašas tuščias.");
      } else {
        alert("Knygų sąrašas:\n" + knygos.map((k, i) => `${i + 1}. ${k}`).join("\n"));
      }
      break;

    case "3":
      if (knygos.length === 0) {
        alert("Sąrašas tuščias – nėra ką trinti.");
      } else {
        let trinti = prompt("Įveskite knygos pavadinimą, kurią norite ištrinti:");
        let indeksas = knygos.indexOf(trinti?.trim());

        if (indeksas !== -1) {
          knygos.splice(indeksas, 1);
          alert("Knyga pašalinta.");
        } else {
          alert("Tokia knyga nerasta.");
        }
      }
      break;

    case "4":
      testinis = false;
      alert("Programa baigta.");
      break;

    default:
      alert("Neteisingas pasirinkimas. Bandykite dar kartą.");
  }
}










