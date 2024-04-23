const nome = 'eduardo';
const sobrenome='tebexerini abreu';
const idade = 19;
const altura = 1.83;
const peso = 85;
let IMC;
let nascimento;
IMC = peso / (altura * altura) //raiz quadrada
nascimento = 2024-idade
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}m de altura, seu IMC é de ${Math.round(IMC)} e nasceu no ano de ${nascimento}`) //Math.round() arredonda o valor