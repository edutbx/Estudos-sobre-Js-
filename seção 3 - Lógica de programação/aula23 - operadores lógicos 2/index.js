/*
Operadores Lógicos
&& -> false && true -> false  "o valor mesmo"
|| -> true || false -> true vair retornar "o valor verdadeiro"

Valores que retornam falso em js
FALSY
False
0
'  ' "   "  `   `------> aspas vazias
null/undefined
NaN
QUALQUER COISA DIFERENTE DESSES VALORES RETORNA VERDADEIRO EM JAVASCRIPT!!!!!
*/
//                              &&
console.log('luiz' && 'maria'); //se tudo estiver certo ele retorna o último valor
console.log('luiz' && 0 && 'maria'); // se estiver algo errado ele exibe o erro(se tiver dois erros ele exibe o primeiro)


//                              ||
//fazer o usuário setar a cor do fundo
const corUsuario = null; // se caso o usuário setar uma cor ela irá tomar o lugar da cor padrão já setada!
const corPadrao = corUsuario || 'black'; // retorna o primeiro valor verdadeiro

console.log(corPadrao);