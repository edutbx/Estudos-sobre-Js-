//Aula sobre os erros

function soma (x, y){
    if(
        typeof x !== 'number' || typeof y !== 'number'
    ) {
        throw new Error('x e y precisam ser números') //para "fazer" o erro
    }
    return x + y;
}


try { //se esse bloco try estiver com um erro, ele executa o bloco catch que captura o erro!
    console.log(soma(1, 2));
    console.log(soma(1, '2'));
} catch(error){ //para capturar o erro
    console.log(error);
    console.log('Alguma coisa mais amigável para o usuário')
}