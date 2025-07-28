console.log('Nr.1');
//1 practice
let a = 10;
let b = 3; // bet koks skaičius
let result = a ** b;
console.log(result);

//2 practice
let year = new Date().getFullYear() - 31; // vietoje 25 įrašykite savo amžių
console.log(year);

//3 practice
let name = 'Audrius';
let surname = 'Mickevicius';
let fullname = `${name} ${surname}`;
console.log(fullname);

//4 practice
let celsius = 27;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit);

console.log('');
console.log('Nr. 2');

let balance = 999.99;
console.log('Initial balance: ' + balance.toFixed(2) + ' €');

// Add 9%
balance += balance * 0.09;
console.log('After adding 9%: ' + balance.toFixed(2) + ' €');

// Multiply by 2
balance *= 2;
console.log('After multiplying by 2: ' + balance.toFixed(2) + ' €');

// Subtract 50
balance -= 50;
console.log('After subtracting 50 €: ' + balance.toFixed(2) + ' €');

console.log('');
console.log('Nr.3');
let humanName = 'Audrius';
let humanAge = '31';
// Paverčiam į skaičių
humanAge = Number(humanAge);
let dogYears;
if (humanAge <= 2) {
  dogYears = humanAge * 10.5;
} else {
  dogYears = 2 * 10.5 + (humanAge - 2) * 4;
}
console.log(`My name is ${humanName}, in human years
I am ${humanAge} years old and that means
I am ${dogYears} years old in dog years.`);

console.log('');
console.log('Nr.4');
// Pradiniai duomenys (gali laisvai keisti)
let initialHeight = 20; // cm, koks buvo kai įsigijo
let yearsOwned = 3; // kiek metų jau turi
let growthPlan = 5; // kiek metų planuoja auginti iš viso

// Sezoniniai augimo tempai per metus
let springGrowth = 10; // cm per pavasarį
let summerGrowth = 8; // cm per vasarą
let autumnGrowth = 4; // cm per rudenį
let winterGrowth = 2; // cm per žiemą

// Bendras augimas per metus
let yearlyGrowth = springGrowth + summerGrowth + autumnGrowth + winterGrowth;

// Dabartinis augalo aukštis
let currentHeight = initialHeight + yearsOwned * yearlyGrowth;

// Prognozuojamas aukštis po viso plano
let expectedHeight = initialHeight + growthPlan * yearlyGrowth;

// Suapvalinimas iki 2 skaičių po kablelio
currentHeight = currentHeight.toFixed(2);
expectedHeight = expectedHeight.toFixed(2);
initialHeight = initialHeight.toFixed(2);

// Rezultatas
console.log(`The plant's initial height is ${initialHeight} cm, 
its current height is ${currentHeight} cm, 
and it's expected height after ${growthPlan} years is ${expectedHeight} cm.`);

console.log('');
console.log('Nr.5');
// Pradiniai duomenys
let amount = 150; // suma, kurią norime iškeisti
let currency = 'USD'; // valiuta, į kurią keičiame
let rates = 1.17; // kursas

// Patikriname, ar amount yra skaičius
if (typeof amount === 'number') {
  // Skaičiuojame konvertuotą sumą
  let converted = amount * rates;
  let rounded = converted.toFixed(2);

  // Išvedame
  console.log('You want to exchange ' + amount + ' EUR to ' + currency + '.');
  console.log('You will get ' + rounded + ' ' + currency + '.');
} else {
  // Jei ne skaičius
  console.log('Amount must be a number.');
}

console.log('');
console.log('Nr.5+');
//let amountt = Number(prompt('Įveskite sumą eurais, kurią norite iškeisti:'));

// Simuliuojamas valiutų pasirinkimas (tarsi select)
//let currencyy = prompt("Pasirinkite valiutą: įveskite 'USD', 'GBP' arba 'PLN'");

// Patikriname, ar amount yra skaičius
if (typeof amountt === 'number' && !isNaN(amountt)) {
  let rate;

  // Kursai pagal pasirinkimą
  if (currencyy === 'USD') {
    rate = 1.17;
  } else if (currencyy === 'GBP') {
    rate = 0.86;
  } else if (currencyy === 'PLN') {
    rate = 4.25;
  } else {
    console.log('Tokios valiutos nėra sąraše.');
  }

  if (rate !== undefined) {
    let result = amountt * rate;
    let roundedd = result.toFixed(2);

    console.log('You want to exchange ' + amountt + ' EUR to ' + currencyy + '.');
    console.log('You will get ' + roundedd + ' ' + currencyy + '.');
  }
} else {
  console.log('Įvesta neteisinga suma!');
}


console.log('');
console.log('papildomos');

//1
let age = 11;
let ticketPrice;

if (age < 12) {
  ticketPrice = 5;
} else if (age >= 12 && age <= 18) {
  ticketPrice = 10;
} else {
  ticketPrice = 15;
};

console.log("Ticket price is: " + ticketPrice);

//2
let isLoggedIn = false;
let isAdmin = false;
let statusMessage;

if(isLoggedIn && isAdmin){
  statusMessage = 'Welcome, Admin!';
} else if (isLoggedIn && !isAdmin){
  statusMessage = 'Welcome, User!';
}else {
  statusMessage = 'Please log in.';
};
console.log(statusMessage);

//3
let numm = -7;
let numberType;

if(numm > 0){
  numberType = "Positive";
}else if (numm < 0){
  numberType = "Negative";
}else{
  numberType = "Zero";
};
console.log(numberType);

//4
let score = 55;

let gradeLetter;

if(90 < score){
  gradeLetter = "A";
} else if (80 < score) {
  gradeLetter = "B";
} else if (70 < score){
  gradeLetter = "C";
}else if (60 < score) {
  gradeLetter = "D";
}else {
  gradeLetter = "F";
}
console.log('Your grade is: ' + gradeLetter);





