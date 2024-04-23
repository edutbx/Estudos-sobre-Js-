//Escreva uma função que recebe 2 números e retorne o maior deles

// let x = 14;
// let y = 13;
// let teste = max(x, y);

// console.log(teste);

// //Jeito q eu fiz
// function max(x, y) {
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// }

// //"Melhorias"
// function max(x, y) {
//     if (x > y) return x; 
//     return y;
// }

// function max (x,y){
//     return x > y ? x : y; // x > y -> ? -> 'sim' : -> se não
// }

const max2 = (x, y) => x > y ? x : y;
console.log(max2(10,20));