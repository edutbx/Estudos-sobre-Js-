class DispositivoEletronico { 
     constructor(nome) {
        this.nome = nome;
        this.ligado = false;
     }

     ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já esta ligado');
            return;
        }
        
        this.ligado = true;
     }

     desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        
        this.ligado = false;
     }
};

class Smartphone extends DispositivoEletronico { // esse extends serve para falar de quem vai herdar (assim já esta funcionando e pode usar)
    constructor(nome, cor, modelo) {
        super(nome); //super serve para chamar o construtor da classe pai para ser executado aqui dentro (nesse caso é o nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor (nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.');
    }
}
const s1 = new Smartphone('Iphone', 'Vermelho', '15 Pro Max');
console.log(s1)

const t1 = new Tablet('iPad', true);


// const d1 = new DispositivoEletronico('Celular');
// d1.ligar();
// d1.desligar();
// console.log(d1);