//IEEE 754-2008 --- Padrão de contas do js  
let num1 = 0.7;
let num2 = 0.1;
 
// arruma a imprecisão por meio de contas -- pior jeito
// num1 = ((num1 * 100) + (num2 * 100)) /100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) /100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) /100; // 1.0


console.log(num1); // Não é executada de forma precisa
console.log(Number.isInteger(num1));



// função para reoslver a impresição -- melhor jeito ---> num1 = Number(num1.toFixed(2)); //executa de forma precisa por conta do number


//*console.log(num1.toString() + num2) // .toString converte o número em uma string
//*num1=num1.toString(); //converte o tipo da variável
//console.log(typeof num1);
//*console.log(num1.toString(2)); // esse 2 converte o número para binário
//*console.log(num1.toFixed(2)); //arredonda o número e o 2 é o número de casas decimais q voce quer q apareça
//*console.log(Number.isInteger(num1)) //pergunta pro javascript se é int ou não(true e false)
//let temp = num1 * 'Olá'
//*console.log(Number.isNaN(temp)); // pergunta pro js se é um NaN(not a number)


