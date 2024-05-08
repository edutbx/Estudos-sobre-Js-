//Factory Functions 
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const pe1 = criaPessoa('Eduardo', 'Abreu');
// console.log(p1.nomeCompleto);

//Construction Functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // congela o objeto -> você não pode fazer literalmente NADA
}

// {} -> atrela o this para o objeto -> e o this retorna como this (this = ao objeto {})
const p1 = new Pessoa('Eduardo', 'Abreu');
delete p1.nome; // n funciona pq tem o Object.freeze antes
const p2 = new Pessoa('Luiz', 'Miranda');
console.log(p1);
console.log(p2);