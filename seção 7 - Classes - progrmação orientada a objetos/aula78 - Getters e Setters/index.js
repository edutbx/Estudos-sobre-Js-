const _velocidade = Symbol ('velocidade'); // esse symbol gera um id aleatório cada vez que é chamado (será usad0, nessa caso, para proteger a velociade) e não é fácil acessar ela de fora do objeto! (propriedade privada)
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    
    get velocidade() { //protege para a velocidade nunca ser alterada
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

// for (let i = 0; i <= 200; i++) {
//     c1.acelerar();
// }

c1.velocidade = 55;
console.log(c1.velocidade);
