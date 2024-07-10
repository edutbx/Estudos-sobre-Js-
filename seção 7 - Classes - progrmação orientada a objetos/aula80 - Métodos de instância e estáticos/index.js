class ControleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância (método de referência a instância)

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //Método estático -- só é acessado através da classe (método de referência a classe)
    static trocaPilha() {
        console.log(this); // esse this aponta para a classe
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha(); // aqui está o static
console.log(controle1);