// Dobre os números...
//
//               0   1   2  3  4 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(function(valor){
//     return valor * 2;
// });

// arrow function
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Eduardo', idade: 18 },
    {nome: 'Caio', idade: 23 },
    {nome: 'Alberto', idade: 22 },
    {nome: 'Yuri', idade: 20} ,
    {nome: 'Camila', idade: 58 },
    {nome: 'Paula', idade: 55 },
];

// 1)
const nomes = pessoas.map(valor => valor.nome);
// console.log(nomes);

// 2)
// const nomes2 = pessoas.map(function(valor) {
//     delete valor.nome;
//     return valor;
// });

const nomes2 = pessoas.map(valor => ({ idade: valor.idade}));
// console.log(nomes2);

// 3) esse altera o array principal
// const id = pessoas.map(function(valor, indice) {
//     valor.id = indice;
//     return valor;
// });
// console.log(id);

//esse não
const id = pessoas.map(function(valor, indice) {
    const newObj = {... valor};
    newObj.id = indice;
    return newObj;
});
console.log(id);