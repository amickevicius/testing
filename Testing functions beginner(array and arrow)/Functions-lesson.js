//1 uzduotis (19 skaidre)
let runner = 'John';
let position = 4;
let medal;

if (position === 1) {
  medal = 'gold medal';
}else if (position === 2) {
  medal = 'silver medal';
} else if (position === 3) {
  medal = 'bronze medal';
} else {
  medal = 'no medal';
}
console.log(runner + ' received ' + medal);

switch (position) {
  case 1:
    medal = 'Gold';
  break;
  case 2:
    medal = 'Silver';
  break;
  case 3:
    medal = 'Bronze';
  break;
  default:
    medal = 'no medal';
  break;
}
console.log(runner + ' received ' + medal);

//2 uzduotis (20 skaidre)
let country = prompt('Smallest country is ...');

if (country == 'Vatican' || 'vatican') {
  console.log('You are right');
} else {
  alert('Nope, the correct answer is Vatican.');
}


//3 uzduotis (21 skaidre)
//3.1
let a = 4;
let b = 1;
let resultMath = (a + b < 4) ? 'Below' : 'Over';
console.log(resultMath);

//3.2
let login = '';
let messageLogin = (login == 'Employee') ? 'Hello':
              (login == 'Director') ? 'Greetings': 
              (login == '') ? 'No login':
              '';
console.log(messageLogin);

//4uzduotis (22 skaidre)
//4.1
let legalAge = 20;
let clientAge = 19;
let legalOrNot = (clientAge >= legalAge) ? 'Good to go' : 'Not good'
console.log(legalOrNot);

//4.2
function age(clientAge) {
  let legalAge = 20;

  if (clientAge >= legalAge) {
    return "Good to go";
  } else {
    return "not good";
  }
}
let messageForClient = age(19);
console.log(messageForClient);

//4.3
function nameLenght(){
let name = 'audrius';

if (name.lenght < 6){
  return ('Ilgas vardas');
  }else {
    return ('Trumpas vardas');
  }
}
let howLong = nameLenght('audrius');
console.log(howLong);

//4.4
function manAge(myAge) {
  if (myAge > 100 || myAge < 0) {
    return "Invalid age";
  } else if (myAge >= 1 && myAge <= 18) {
    return "Child";
  } else {
    return "Adult";
  }
}

let messageAge = manAge(19);
console.log(messageAge);

//4.5

let car = "BMW";

if (
  car === "VW" || car === "Audi" || car === "Bentley" ||
  car === "Bugatti" || car === "Lamborghini" || car === "Porsche"
) {
  console.log("VW Group");
} else if (
  car === "BMW" || car === "Mini" || car === "Rolls-Royce"
) {
  console.log("BMW Group");
} else {
  console.log("Nepriklauso nei vienam");
}


//5 uzduotis (23 skaidre)

//5.1
function nameLenght() {
  let name = 'audrius';

  if (name.lenght < 6) {
    return ('Ilgas vardas');
  } else {
    return ('Trumpas vardas');
  }
}
let nameLen = nameLenght('audrius');
console.log(nameLen);

//5.2
function ageLimit(clientAge) {
  let legalAge = 18;

  if (clientAge >= legalAge) {
    return "Can Drive";
  } else {
    return "Can't drive";
  }
}
let messageLimit = ageLimit(17);
console.log(messageLimit);

//5.3
let age = 20;

let result =
  age < 0 || age > 120
    ? "Invalid Age"
    : age >= 18
      ? "Can Drive"
      : "Can't drive";

console.log(result);

//5.4

let phone = "iPhone1";
let isIphoneUser = phone === "iPhone";

console.log(isIphoneUser);  // išves true


//6 uzduotis (24 skaidre)
console.log(2 === 2); //true
console.log(2 == "2"); //true
console.log(2 != 2); //false
console.log(5 < 5); //false
console.log(5 <= 4); //false
console.log(true !== false); //true
console.log(9 - 5 == 4); //true
console.log(5 * 5 == "25"); //true
console.log(true && true); //true
console.log(2 == 5 && true); //false
console.log(6 * 6 === 36 && 15 - 9 == "6"); //true
console.log(false || false); //false
console.log(10 === 10 || 5 == 2); //true
console.log(2 * 2 / 2 == "1" || 5 * 5 === 25); //true
console.log("2" + 2 == "22" || "Jonas" === "Jonas"); //true
console.log(0 && 15 > 10); // //false
console.log("Petras" && 0); //0
console.log(("Petras" || "Jonas") && (22 < 5 || 15 - 2 === 13)); //110
console.log("jonas" === "Jonas"); //false
console.log("Petras" + 5 === "Petras" + "5"); // true
console.log("Jonas" + 5 + 5 === "Jonas10"); //false
console.log(5 + 10 + "Antanas" === "15Antanas"); //true
console.log(2 + 1 + "Jonas" + 3 + 2 === "3Jonas32"); //true
console.log(10 % 1 == 1); //liekana 0 todel false
console.log(5 * "5" === 25); //true


//7 uzduotis (25 skaidre)

let fruit = "apelsinas";

let citrusFruits = ["apelsinas", "citrina", "greipfrutas", "mandarinas", "laimas"];
let berries = ["braškė", "mėlynė", "avietė", "gervuogė", "spanguolė"];

if (citrusFruits.includes(fruit)) {
  console.log(fruit + " priklauso Citrusinių vaisių grupei.");
} else if (berries.includes(fruit)) {
  console.log(fruit + " priklauso Uogų grupei.");
} else {
  console.log(fruit + " nepriklauso nei vienai iš šių grupių.");
}



//8 uzduotis (26 skaidre)
let carName = prompt("Įveskite automobilio markę:").toLowerCase().trim();
let carYear = parseInt(prompt("Įveskite automobilio pagaminimo metus:").trim());

let currentYear = 2025;
let age = currentYear - carYear;

// Leistinos markės masyvai
let bmwGroup = ["bmw", "mini", "rolls-royce"];
let vwGroup = ["vw", "audi", "bentley", "bugatti", "lamborghini", "porsche"];

let group = "";
let message = "";

// Pirmas if – tikrinam ar markė priklauso BMW grupei
if (bmwGroup.includes(car)) {
  group = "BMW Group";

  // Tik jei markė teisinga – leidžiam rodyti automobilio amžiaus žinutę
  if (age <= 5) {
    message = "Jūs turite naują automobilį.";
  } else if (age <= 10) {
    message = "Jūs turite apynaujį automobilį.";
  } else if (age <= 35) {
    message = "Jūs turite automobilį, kuris dar važiuoja.";
  } else {
    message = "Automobilis dar važiuoja?";
  }

  console.log(`${carName.toUpperCase()} (${age} m.) priklauso: ${group}. ${message}`);

} else if (vwGroup.includes(carName)) {
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

  console.log(`${carName.toUpperCase()} (${age} m.) priklauso: ${group}. ${message}`);

} else {
  // Jei markė ne BMW/VW – pranešame tik apie grupę, bet ne apie amžių
  console.log(`${carName.toUpperCase()} nepriklauso žinomoms gamintojų grupėms.`);
}

//PAPILDOMAI :
/*
16. Maršruto laiko skaičiuoklė.
Parašykite programą kuri paskaičiuotų kiek laiko užtruks automobiliu nuvažiuoti iš taško A į taško B. 
Sąlyga - Žmogus turi įvesti visą kelio atstumą, ir tarpinius. 
Koks atstumas yra važiuojant per miestus kur greitis yra 50km/h, 
koks atstumas yra važiuojant žvyrkeliu kur greitis yra 70km/h, 
koks atstumas yra važiuojant užmiestyje kur greitis yra 90km/h ir 
koks atstumas yra važiuojant autostrada kur geritis yra 130km/h.
*/
// 1. Ask the user to enter distances for each road type (in kilometers)
let city = parseFloat(prompt("Enter distance through city (km):"));
let gravel = parseFloat(prompt("Enter distance through gravel road (km):"));
let rural = parseFloat(prompt("Enter distance through rural area (km):"));
let highway = parseFloat(prompt("Enter distance through highway (km):"));

// 2. Speed limits for each road type (in km/h)
let speedCity = 50;
let speedGravel = 70;
let speedRural = 90;
let speedHighway = 130;

// 3. Calculate time for each section: time = distance / speed
let timeCity = city / speedCity;
let timeGravel = gravel / speedGravel;
let timeRural = rural / speedRural;
let timeHighway = highway / speedHighway;

// 4. Total time in hours (with decimals)
let totalTime = timeCity + timeGravel + timeRural + timeHighway;

// 5. Convert to hours and minutes
let hours = Math.floor(totalTime);
let minutes = Math.round((totalTime - hours) * 60);

// 6. Show the result
console.log(`Estimated travel time: ${hours} hour(s) and ${minutes} minute(s).`);















