// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar valores
// Reduzir (somar tudo)
//               0   1   2  3  4 ...

// sem arrow function
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosPares = numeros.filter(function(valor) {
//     return valor % 2 === 0;
// }).map(function(valor){
//     return valor * 2;
// }).reduce(function(acumulador, valor) {
//     return acumulador + valor;
// });

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);







const pessoas = [
    {nome: 'Eduardo', idade: 18 },
    {nome: 'Caio', idade: 23 },
    {nome: 'Alberto', idade: 22 },
    {nome: 'Yuri', idade: 20} ,
    {nome: 'Camila', idade: 68 },
    {nome: 'Paula', idade: 55 },
];


