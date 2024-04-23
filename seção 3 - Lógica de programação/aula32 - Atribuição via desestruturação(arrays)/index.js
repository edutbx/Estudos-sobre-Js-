// Atribuição via desestruturação(arrays)!!
// ...resto <- é uma variável para pegar o resto que sobrou da array\ 
//               0  1  2  3  4  5  6  7
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const [primeironumero, segundonumero, ...resto] = numeros;

// console.log(primeironumero, segundonumero);
// console.log(resto);

//                     0           1           2
//                  0  1  2     0  1  2    0  1  2
const numeros2 =[ [ 1, 2, 3], [ 4, 5, 6], [ 7, 8, 9] ];
console.log(numeros2[2][2]); // primeiro em qual array está e segundo ond esta naquele array
