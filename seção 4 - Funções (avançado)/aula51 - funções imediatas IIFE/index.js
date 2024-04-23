// IIFE -> Imediately invoked function expression
(function(idade, peso, altura) {

    const sobrenome = 'Abreu';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Eduardo'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 84, 1.83); 

// (function(){

// })(); -> função anônima e protegida do escopo global (criada entre os () ). os parêteses finais () servem para já executar a função.