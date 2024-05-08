// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//               0   1   2  3  4 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
});
// console.log(total);


// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Eduardo', idade: 18 },
    {nome: 'Caio', idade: 23 },
    {nome: 'Alberto', idade: 22 },
    {nome: 'Yuri', idade: 20} ,
    {nome: 'Camila', idade: 68 },
    {nome: 'Paula', idade: 55 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
