/*
Primitivos(imutáveis) - string,  number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

//Primitivo - imutável

//           01234
// let teste = 'abcde';
// console.log(teste[2]);
// teste[2] = 't';
// console.log(teste[2]);

//Referência

// let a = [1,2,3];
// let b = a;
// console.log(a, b)

// a.push(4); //adiciona um valor na array
// console.log(a, b);

// b.pop();
// console.log(a, b) //apontaram para o mesmo local na memória 

//para não apontar para o mesmo local da memória 

let a = [1,2,3];
let b = [... a]; // cria uma cópia mas não aponta para o mesmo local da memória
console.log(a, b);

a.push(4);
console.log(a, b);
