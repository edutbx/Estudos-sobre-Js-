// const data = new Date(); // hora 0->zero  01/01/1970 Timesstamp ou época do unix
// const data = new Date(2015, 3, 20, 15, 13, 27,); // ano-mes-dia-hora-minutos-segundos   janeiero-dezembro -> 0-11 janeiro é o 0 em js
const data = new Date('2012-12-09 13:30:09.100'); // data em sting -> pode colocar o mes real que ele lê
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // para obter o número do mês real 1-12 e não 0-11
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds()); //milisegundo
console.log('Dia da Semana', data.getDay() + 1); // 0 é domingo e 6 é sábado
console.log(data.toString());
console.log(Date.now()); // os milisegundos do marco 0 até hoje!

 