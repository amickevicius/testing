// pirma uzduotis

let randomNumber = 0;

for (let randomNumber = 0; i <= 16; i += 4) {
  console.log(randomNumber);
}

let f = 0;
do {
  console.log(f);
  f += 4;
} while (f <= 16);

let  = 1;

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

// antra uzduotis

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


// whale language uzduotis


const input = "turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if(input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i], input[i]);
      } else {
        resultArray.push(input[i]);
      }
    }
  }
}
const whaleTalk = resultArray.join('').toUpperCase();
console.log(whaleTalk);

// robot language

const inputWord = "hello worldg";
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

let resultArrayRobot = [];

for (let i = 0; i < inputWord.length; i++){
  const char = inputWord[i].toUpperCase();
  if (consonants.includes(char)) {
      resultArrayRobot.push(char);
  }
}

const robotSpeak = resultArrayRobot.join('-');
console.log(robotSpeak);

