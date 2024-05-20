function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
};

//Pessoa.prototype === pessoa1.___proto___

Pessoa.prototype.nomeCompleto = function() { // o proto serve para armazenar algo no pai do objeto para não "lotar" o objeto original.
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Luiz', 'O.'); // Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);