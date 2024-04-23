/*
Operadores de comparação
> maior que 
>= maior que ou igual a -- apenas um valor verdadeiro para retornar verdadeiro!
< menor que 
<= menor que ou igual a -- apenas um valor verdadeiro para retornar verdadeiro!
== igualdade (valor) -------  NÂO USAR ------------ const comp = 10 == '10'; true->javascript converteu mas não é o certo a se fazer
=== igualdade estrita (valor e tipo) ------------- const comp = 10 === '10'; false-> mudou o tipo do dado -- number e string!
!= diferente (valor) ------- NÂO USAR ------------ const comp = 10 != '10'; false->js converteu e não é o certo a se fazer
!== diferente estrito (valor e tipo) ------------- const comp = 10 !== '10'; true-> mudou o tipo do dado -- number e string!
*/

const comp = 10 !== '10';
console.log(comp);


