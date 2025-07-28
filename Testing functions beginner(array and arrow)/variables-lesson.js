// 1.Sukurkite tris kintamuosius.
let x = 5;
let y = 10;
let z = x + y;
//alert("Rezultatas z: " + z);


// 2.Kodas, kuris palygina du tekstus
let persona1 = "labas";
let person2 = "Labas";
let persona11 = "labas";
let person22 = "labas";
console.log(persona1 === person2); // false
console.log(persona11 === person22); // true
console.log('');


// 3.Palyginimai su number ir text
let number = 10;
let text = "10";

console.log(number === text); // false (skiriasi tipai)
console.log(number == text);  // true (leidžiama konversija)
console.log(text === "10");   // true (tie patys tipai ir reikšmės)
console.log('');


// 4.Palyginimas ar užtenka balanso
function canAfford(currentBalance, transaction) {
  return currentBalance + transaction >= 0;
}
console.log(canAfford(50, -50)); // true
console.log(canAfford(50, 50)); // true
console.log(canAfford(50, -51)); // false
console.log(canAfford(50, 51)); // true
console.log('');


// 5.Patikrinkite ar dalijasi be liekanos
let abc = 10;
let bcd = 2;
console.log(abc % bcd === 0);
console.log('');


// 1. Pakelti a laipsniu b
let att = 10;
let bvv = 3; // gali būti bet koks skaičius
let result = att ** bvv; // 10 pakelta 3 laipsniu
console.log(result); // 1000
console.log('');


// 2. Iš metų atimti savo amžių (be papildomų kintamųjų)
let year = 2025 - 31; // tarkim tau 31 metai
console.log(year); // 1994
console.log('');


// 3. Sujungti vardą ir pavardę
let vardas = "Jonas";
let pavarde = "Petrauskas";
console.log(vardas + " " + pavarde); // Jonas Petrauskas
console.log('');


// 4. Konvertuoti temperatūrą iš Celsijaus į Farenheitus
let celsius = 20;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit); // 68
