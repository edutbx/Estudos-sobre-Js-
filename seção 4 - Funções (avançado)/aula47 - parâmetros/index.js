// arguments -> sustenta todos os argumentos enviados
function funcao(a, b, c){
    console.log(arguments[0], b, c)
}
funcao('aqui são os arguments', 1, 2, 3, 4);

function funcao2 (a, b = 2, c = 4){
    console.log(a + b + c);
}

funcao2(2, undefined, 4); // esse undefined é para preservar o valor que já foi atribuido para o b (não é muito legal)
 
function funcao3([valor1, valor2, valor3]){ //atribuição via desestruturação com arrays
    console.log(valor1, valor2, valor3);
}
funcao3(['Eduardo', 'Tbx', 18]);

function conta (operador, acumulador, ...numeros) { //rest operators
    console.log(operador, acumulador, numeros);
}
conta('+', 0, 20, 10, 30); //exibe em forma de array com o rest operators

function conta2 (operador, acumulador, ...numeros){
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero; 
    }

    console.log(acumulador);
}

conta2('+', 1, 20, 30, 40, 50);