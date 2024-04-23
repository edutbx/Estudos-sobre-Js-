// ForS :
// For Clássico - Geralmente com iteráveis (array ou strings)
// For In - Retorna o índice ou chave (string, array ou objetos)
// For On - Retorna o valor em si (iteráveis, array ou strings)

const nome = 'Eduardo Tbx';

// for (i = 0; i < nome.length; i++){
//     console.log(nome[i]);
// }

// for (let i in nome){
//     console.log(nome[i]);
// }

for (let valor of nome){
    console.log(valor);
}