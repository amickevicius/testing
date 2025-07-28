let randomNumber = 0;

for (let randomNumber = 0; i <= 16; i += 4) {
  console.log(randomNumber);
}

let y = 0;
do {
  console.log(y);
  y += 4;
} while (i <= 16);

let i = 1;

do {
  if (i % 3 === 0 && i % 5 === 0){
    console.log("Fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else
  console.log('(' + i + ') Nedalomas is 3 & 5');
  i++
} while (i <= 20);

let testing = 10;
while (testing >= 1) {
  console.log(`This is the sentence with the number ${testing}`);
  testing -=1;
}

for (let testing = 10; testing >= 1; testing--) {
  console.log(`This is the sentence with the number ${testing}`);
}

let vilniusCars = ["BMW", "VW", "TOYOTA", "LEXUS"];
let kaunasCars = ["MAZDA", "VW", "BENTLEY", "BMW"];
let commonCars = [];

for (let i = 0; i < vilniusCars.length; i++){
  for (let j = 0; j < kaunasCars.length; j++) {
    if (vilniusCars[i] === kaunasCars[j]){
      commonCars.push(vilniusCars[i])
    }
  }
}
console.log(`Both arrays have the same cars: ${commonCars}`);