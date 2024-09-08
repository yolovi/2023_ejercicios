// PROYECTO en PAREJAS -------------

// -------------------- Variables -----------------------

// ejercicio 1 ---------------------
let variableSinValor;

// ejercicio 2 ---------------------

let booleano1 = true;
let booleano2 = true;

// ejercicio 3 ---------------------

const PI = 3.14;

// ejercicio 4 ---------------------

const TAU = 2 * PI;

// -------------------- Booleanos -----------------------

// ejercicio 5 ---------------------

let booleanoAnd = booleano1 && booleano2;

// ejercicio 6 ---------------------

let booleanoNot = !booleano1;

// ejercicio 7 ---------------------

let booleanoMix0 =
  (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

// -------------------- Operadores -----------------------

// ejercicio 8 ---------------------

let incrementarDesp = 2;
let resultadoDesp = 0;

resultadoDesp += incrementarDesp++;
console.log(resultadoDesp);

// ejercicio 9 ---------------------

let incrementarAntes = 2;
let resultadoAntes = 0;

resultadoAntes += ++incrementarAntes;
console.log(resultadoAntes);

// -------------------- Bucles -----------------------

// ejercicio 10 ---------------------

let contarHasta10_2 = 0;

for (let i = contarHasta10_2; i <= 10; i++) {
  contarHasta10_2 = i;
}

// ejercicio 11 ---------------------

let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
  postI = postI + postJ++;
  console.log(postI);
}

// ejercicio 12 ---------------------

let sumaPares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    sumaPares = i + sumaPares;
  }
}

// PROYECTO INDIVIDUAL -------------

// -------------------- Variables -----------------------

// ejercicio 13 --------------------

let variableValorNumerico = 7;

// ejercicio 14 --------------------

const MiNombre = "tu nombre";

// ejercicio 15 --------------------

const MiNumeroFav = 3;

// -------------------- Booleanos -----------------------

// ejercicio 16 --------------------

let booleanoOr = booleano1 || booleano2;

// ejercicio 17 --------------------

let booleanoMix1 = (booleano1 && TAU / 2 == PI) || variableValorNumerico >= MiNumeroFav;

// ejercicio 18 --------------------

let seisNoEsNueve = 6 !== 9;

// ejercicio 19 --------------------

let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU)

// -------------------- Operadores -----------------------

// ejercicio 20 --------------------

let valorSuma = MiNumeroFav + variableValorNumerico;

// ejercicio 21 --------------------

let valorResta = MiNumeroFav - variableValorNumerico;

// ejercicio 22 --------------------

let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

// ejercicio 23 --------------------

let valorDivision = MiNumeroFav / 3;

// -------------------- Bucles -----------------------

// ejercicio 24 --------------------

let contarHasta10 = 0;

while (contarHasta10 < 10 ) {
    contarHasta10++
}

// ejercicio 25 --------------------


let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++) {
    preI = preI + ++preJ
    console.log(preI);
}

// ejercicio 26 --------------------
let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
    if( i %2 == 1) {
        sumaImpares = sumaImpares + i;
    }
}