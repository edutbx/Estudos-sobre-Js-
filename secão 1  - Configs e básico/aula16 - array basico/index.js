//ARRAYS
//                0          1        2        3       4
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo

console.log(typeof alunos); // array é um objeto pro js
console.log(alunos instanceof Array) // pergunta pro js se alunos é uma instância de array (se é uma array) TEM QUE SER COM A MAIUSCÚLO Array 

//console.log(alunos.slice(0, 2)); //fatiar a array(exibir o que você pede). Lembrar de colocar o segundo número maior (quer que exiba luiz, maria ---  0,2 -->coloca um a mais)
//console.log(alunos.slice(0,-2)); // mesma lógica do slice positivo
//alunos.push('Luiza');
//alunos.push('Eduardo');


//delete alunos [1]; // deleta um valor da array

//console.log(removido);
//alunos.shift(); // remove o primeiro item da array
//const removido = alunos.shift(); //salva o valor removido do primeiro elemento

//alunos.pop(); // remove o último item da array
//const removido = alunos.pop(); //salva o valor removido do último item da array

//alunos.unshift('Luiza'); //adiciona no começo
//alunos.unshift('Fábio');

//alunos.push('Luiza'); // adiciona o valor no final da array
//alunos.push('Otávio');
//alunos[alunos.length] = 'Luiza'; //adiciona o valor no final da array (mais dificil)

//console.log(alunos.length); //tamanho da array

//alunos[0] = 'Eduardo'; //altera
//alunos [3] = 'Luiza'; //adiciona
//console.log(alunos[0]);