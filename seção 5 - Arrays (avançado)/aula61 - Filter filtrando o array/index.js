// Filter - filtra os elementos do array (ele passa checando de um em um!) -> O Flter só retorna true or false (booleano) 
// Filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos.
// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) {
//     return valor > 10;
// };

//                                      isso eh a FUNÇÂO de cima, por incrivel que pareça!
const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);

// 1) Retorne as pessoas que tem o nome com cinco letras ou mais 
// 2) Retorne as as pessoas com mais de 50 anos
// 3) Retorne as pessoas cujo nome termina com a

// 1)
const pessoas = [
    {nome: 'Eduardo', idade: 18 },
    {nome: 'Caio', idade: 23 },
    {nome: 'Alberto', idade: 22 },
    {nome: 'Yuri', idade: 20} ,
    {nome: 'Camila', idade: 58 },
    {nome: 'Paula', idade: 55 },
];

// const pessoasComNomeGrande = pessoas.filter(function(obj) {
//     return obj.nome.length >= 5; //lemrbando que length eh pra ver o tamanho do valor (quantos caracteres ele possui)
// }); 
//                                                    arrow function
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoasComNomeGrande);


// 2)
// const pessoas50Mais = pessoas.filter(function(idd) {
//     return idd.idade > 50;
// });
const pessoas50Mais = pessoas.filter(idd => idd.idade > 50);
console.log(pessoas50Mais);

// 3)
// const nomeTerminaComA = pessoas.filter(function(obj) {
//     return obj.nome.toLowerCase().endsWith('a'); //toLowerCase é para transformar tudo em letras minúsculas e endsWith é termina com
// })
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);
