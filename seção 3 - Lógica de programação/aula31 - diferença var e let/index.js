/////Diferença entra var e let

const verdadeira = true;

//Let tem escopo de bloco { ... bloco}
//Var só tem escopo de função

let nome = 'Eduardo'; //criando
var nome2='Alberto';  //criando

if (verdadeira){
    let nome = 'Yuri'; //criando
    var nome2 = 'Borboleto'; //redeclarando

    if (verdadeira){
        let nome = 'Cláudio'; //criando
        var nome2 = 'Calabreso'; //redeclarando
    }
}

console.log(nome, nome2);

function testee (){
    let teste = 'teste mesmo';
}

console.log(teste);