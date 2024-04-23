//              -5         -4        -3        -2         -1    
//                  0         1        2        3         4
const nomes = ['Eduardo', 'Maria', 'João', 'Gabriel', 'Julia'];

//nomes.splice(indice atual, quantos quer deletar, elem1, elem2 , elem3);

const removidos = nomes.splice(4, 1, 'Caio'); // indice 4 e remove 1 elemento dele (exclui Julia) --- fiz a variável para armazenar o q eh removido --- o 'Caio' entra no lugar da Julia que foi removida   

// nomes.splice(0,3); -> fica só Gabriel e Julia (ele excluiu do elemento 0 ate o 3 elemento -> João (elemento 3 mas o indice eh 2) )

//Simulando pop, shift, push e unshift

//pop
// const removidos = nomes.splice(-1, 1); // simula o pop -> remove o Caio que foi adicionado no lugar da Julia

//shift
//const removidos = nomes.splice(0, 1); // Perdeu o eduardo

//push -> adiciona no final
//nomes.splice(5, 0, 'Luiz');

//unshift -> adiciona no começo dom array
//nomes.splice(0, 0, 'Luiz');

console.log(nomes, removidos);

// Number.MAX_VALUE -> representação do infinito no javascript