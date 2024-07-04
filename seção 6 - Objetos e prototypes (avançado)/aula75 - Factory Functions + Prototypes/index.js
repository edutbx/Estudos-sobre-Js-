const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
};

// const pessoaPrototype = {...falar, ...comer,...beber}; //spread operator
const pessoaPrototype = Object.assign( {}, falar, comer, beber); // esse {} é um objeto vazio, o objeto q ta sendo criado

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    });
};

const p1 = criaPessoa('Eduardo', 'Tbx');
const p2 = criaPessoa('Odraude', 'Xbt');
console.log(p2);