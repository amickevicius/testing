// 1. Vardo spausdinimas kelis kartus plius kintamuju pridejimas
let name = "Audrius";
let ciklas = 5;

for (let i = 0; i < ciklas; i++) {
  console.log(i + ". " + name);
}
console.log("------- atskyrimas-------")
// 2. Skaičių spausdinimas nuo 1 iki 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("------- atskyrimas-------")
// 3. Skaičių spausdinimas nuo 2 iki 10, kas 2
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}
console.log("------- atskyrimas-------")
// 4. Skaičių spausdinimas nuo 10 iki 1 atgal
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
