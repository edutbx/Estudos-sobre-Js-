/*

Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Apenas um valor correto para toda a expressão ser verdadeira
! -> NOT -> NÃO -> Nega um valor e inverte ele !false = true ------------ !!false = false -> Negou duas vezes e retornou pro valor que era 

*/
const expressaoAnd = true && true && true && true;
const expressaoOr = true || false || false;
console.log(!true); // false
console.log(!!true); // true
