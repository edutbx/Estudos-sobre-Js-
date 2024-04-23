//Valor por Referência
//                 0       1          2             0       1           2       3       4
const nomes = ['Eduardo', 'Maria', 'João']; // ['Ligia', 'Eduardo', 'Maria', 'João', 'Weverton'];
const novo = [...nomes]; // se fizer const novo = nomes; vai apontar para o mesmo local da memória e se alterar um altera o outro. Se você fizer[... nomes] você irá criar uma cópia do elemento e pode alterar como quiser que não vai mudar o elemnto original
const novo1 = [...nomes];


const removido = novo.pop(); // remove o último dado do array e ao mesmo tempo estou armazenando oq ue foi removido em uma variável
nomes.push('Weverton'); // adiciona no final da array

const removido2 = novo1.shift(); // remove o primeiro elemnto do array, o 0, e muda a ordem de array (o 1 vira o 0)
nomes.unshift('Ligia'); // adiciona no começo da array

const a = nomes.slice(1,-2); //fatiar a array (só exibe o indice 1 e 3) e funciona os números negativos

console.log(a);
console.log(nomes);
console.log(novo, removido);
console.log(novo1);
console.log(nomes.length);// .length é pra ver o tamanho da array

//////////////////////////

// converter string em array

const nome1 = 'Eduardo Cleber Mário';
const nome2 = nome1.split(' '); // .slipt -> usa para separar e (' '); eh a forma que vai ser separada (por espaços)
console.log(nome2);
const nome3 = [ 'Eduardo', 'Cleber', 'Mário' ];
const nome4 = nome3.join(' '); //unir uma array em uma string (transformar em uma string) pode escolher o separador -> (' ') (',')
console.log(nome4);
