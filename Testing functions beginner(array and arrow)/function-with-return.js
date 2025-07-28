function naujaPirmaFun(){
  console.log("Nauja mano funkcija");
}
naujaPirmaFun();

function esamaDiena() {
  let esamaDiena = new Date().getDate();
  console.log("Šiandien yra " + esamaDiena + " mėnesio diena");
}
esamaDiena();

const vaisius = ["obuolys", "apelsinas"];

console.log("Prieš funkciją:", vaisius);

function paverciaDidziosiomis() {
  const didziosios = vaisius.map(v => v.toUpperCase());
  console.log("Po funkcijos:", didziosios);
}

paverciaDidziosiomis();



// 1 uzduotis

function esamasPlotas() {
  let ilgis = 15;
  let plotis = 26;
  return ilgis * plotis;
}

function apskaiciuotiPlota() {
  let plotas = esamasPlotas();
  console.log("Plotas yra:", plotas, "kv. m");
}

apskaiciuotiPlota();

// 2 uzduotis

function nustatytasPlotas(ilgis, plotis){
  return ilgis * plotis;
}

let plotas = nustatytasPlotas(7, 9);
console.log(`Namo plotas ${plotas} kv. m.`)

let plotas2 = nustatytasPlotas(16, 78);
console.log(`Namo plotas ${plotas2} kv. m.`)

// 3 uzduotis

function palyginimasSkaiciu(skaicius) {
  if (skaicius % 2 === 0){
    return "Ivestas skaicius lyginis";
  }else {
    return "Ivestas skaicisu nelyginis";
  }
}
console.log(palyginimasSkaiciu(8));
console.log(palyginimasSkaiciu(15));
console.log(palyginimasSkaiciu(186));
console.log(palyginimasSkaiciu(79));
