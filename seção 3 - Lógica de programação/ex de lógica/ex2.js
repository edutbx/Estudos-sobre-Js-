//Escreva uma função chamada ePaisagem que recebe dois argumentos , largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem.


//Modo que eu fiz
// function ePaisagem(al, lar){
//     if (al >= 1080 && lar >=566){
//         return true;
//         }else{
//             return false;
//         }
//     }
//     console.log(ePaisagem(1080,566));


///outra forma
// function ePaisagem(largura, altura){
//     return largura > altura ? true : false;
// }
// console.log(ePaisagem(1080, 1920));


//outra forma
// function ePaisagem(largura, altura){
//     return largura > altura;
// }
// console.log(ePaisagem(1080, 1920));

//arrow function

const ePaisagem = (largura, altura) => largura > altura    ;
console.log(ePaisagem(1080, 1920));