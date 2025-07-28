console.log("------Uzduotis 1-------")
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
console.log("------Uzduotis 2-------")
console.log(fruits[2]);
console.log("------Uzduotis 3-------")
let fruitAddLast = fruits.push("Durian");
console.log(fruits);
console.log("------Uzduotis 4-------")
let fruitRemoveLast = fruits.pop("Durian");
console.log(fruits);
console.log("------Uzduotis 5-------")
let fruitRemoveFirst = fruits.shift();
console.log(fruits);
console.log("------Uzduotis 6-------")
let fruitAddFirst = fruits.unshift("Melon");
console.log(fruits);
console.log("------Uzduotis 7-------")
fruits[2] = "Mango";
console.log(fruits);
console.log("------Uzduotis 8-------")
let fruitRemove = fruits.pop();
let fruitAdd = fruits.push("Peach");
console.log(fruits);
console.log("------Uzduotis 9-------")
let fruitFirstDelete = fruits.shift();
let fruitLastDelete = fruits.pop();
let fruitAddNew = fruits.push("Grapes");
console.log(fruits);



let car = prompt("Įveskite automobilio markę:").toUpperCase().trim();
let carYear = parseInt(prompt("Įveskite automobilio pagaminimo metus:").trim());

let currentYear = 2025;
let age = currentYear - carYear;

// Leistinos markės masyvai
let bmwGroup = ["BMW", "MINI", "ROLLS-ROYCE"];
let vwGroup = ["AUDI", "SEAT", "SKODA", "VW", "BUGATTI", "LAMBORGHINI", "PORSCHE"];
let psaGroup = ["PEUGEOT", "CITROEN", "OPEL"];
let fcaGroup = ["MASERATI", "ALFA-ROMEO", "JEEP", "FIAT", "RAM", "CHRYSLER"];

let group = "";
let message = "";

if (bmwGroup.includes(car)) {
  group = "BMW Group";

  if (age <= 5) {
    message = "Jūs turite naują automobilį.";
  } else if (age <= 10) {
    message = "Jūs turite apynaujį automobilį.";
  } else if (age <= 35) {
    message = "Jūs turite automobilį, kuris dar važiuoja.";
  } else {
    message = "Automobilis dar važiuoja?";
  }
  console.log(`${car.toUpperCase()} (${age} m.) priklauso: ${group}. ${message}`);

} else if (vwGroup.includes(car)) {
  group = "VW Group";

  if (age <= 5) {
    message = "Jūs turite naują automobilį.";
  } else if (age <= 10) {
    message = "Jūs turite apynaujį automobilį.";
  } else if (age <= 35) {
    message = "Jūs turite automobilį, kuris dar važiuoja.";
  } else {
    message = "Automobilis dar važiuoja?";
  }
  console.log(`${car.toUpperCase()} (${age} m.) priklauso: ${group}. ${message}`);

} else if (psaGroup.includes(car)) {
  group = "PSA Group";

  if (age <= 5) {
    message = "Jūs turite naują automobilį.";
  } else if (age <= 10) {
    message = "Jūs turite apynaujį automobilį.";
  } else if (age <= 35) {
    message = "Jūs turite automobilį, kuris dar važiuoja.";
  } else {
    message = "Automobilis dar važiuoja?";
  }
  console.log(`${car.toUpperCase()} (${age} m.) priklauso: ${group}. ${message}`);

} else if (fcaGroup.includes(car)) {
  group = "FCA Group";

  if (age <= 5) {
    message = "Jūs turite naują automobilį.";
  } else if (age <= 10) {
    message = "Jūs turite apynaujį automobilį.";
  } else if (age <= 35) {
    message = "Jūs turite automobilį, kuris dar važiuoja.";
  } else {
    message = "Automobilis dar važiuoja?";
  }
  console.log(`${car.toUpperCase()} (${age} m.) priklauso: ${group}. ${message}`);

} else {
  console.log(`${car.toUpperCase()} nepriklauso žinomoms gamintojų grupėms.`);
}


console.log("--------1 uzduotis--------");
let secretMessage = [
  'Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,',
  'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'
];
console.log(secretMessage);
console.log("--------2 uzduotis--------");
let messageDeleteLastString = secretMessage.pop();
console.log(secretMessage);
console.log("--------3 uzduotis--------");
console.log(secretMessage.length);
console.log("--------4 uzduotis--------");
secretMessage.push("to", "Program");
console.log(secretMessage);
console.log("--------5 uzduotis--------");
secretMessage[7] = "right";
console.log(secretMessage);
console.log("--------6 uzduotis--------");
let messageDeleteFirstWord = secretMessage.shift();
console.log(secretMessage);
console.log("--------7 uzduotis--------");
let messageAddFirstWord = secretMessage.unshift("Programming");
console.log(secretMessage);
console.log("--------8 uzduotis--------");
let start = secretMessage.indexOf("get"); // Find index of "get"

if (start !== -1) {
  secretMessage.splice(start, 5, "know,"); // Replace 5 items starting from "get"
}
console.log(secretMessage);
console.log("--------9 uzduotis--------");
console.log(secretMessage.join());

