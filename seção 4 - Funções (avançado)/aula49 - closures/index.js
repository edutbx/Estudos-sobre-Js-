//Global
function retornaFuncao(nome) {
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('Eduardo'); // o closures é isso de alterar o valor apenas aqui (habilidade da função de acessar o seu escopo lexo)
const funcao2 = retornaFuncao('Gabriel');
console.dir(funcao); // console.dir -> exibe a função anonima
console.dir(funcao2);