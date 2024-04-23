// Função construtora -> objetos
// Função fabrica -> objetos 
// Construtora -> Pessoa (new)
function Pessoa (nome, sobrenome) { //começa com letra maiúscula pra mostrar que é uma função construtora
    //Atributos ou métodos privados
    const ID = 1234;
    const metodoInterno = function (){
        console.log('teste');
    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p2.metodo();