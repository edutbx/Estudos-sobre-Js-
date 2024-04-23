//For In -> lê os índices ou chave do objeto
// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let indice in frutas){
//     console.log(frutas[indice]);
// }

const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Tbx',
    idade: 18
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave]) // pega a chave -> chave, pessoa -- pessoa[chave] -> pega o valor da chave dentro do objeto!
} 