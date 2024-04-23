function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaBackspace(); 
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },
        
        realizaConta() {
            let conta = this.display.value;

            try{
                conta = eval(conta); // eval é perigoso usar

                if(!conta){
                    alert ('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            }catch(e){
                alert ('Conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); //o tamanho da string -1 (ai apaga só 1)
        },


        // cliqueBotoes(){
        //     // this -> calculadora
        //     document.addEventListener('click', function(e){
        //         const el = e.target;
        //     //this -> virou o document
        //         if(el.classList.contains('btn-num')) {
        //             this.btnParaDisplay(el.innerText);
        //         }
        //     }.bind(this)); // volta o this para a calculadora

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            }); //se usar a arrow function n precisa do .bind pq ele n deixa alterar o this
        },

        pressionaBackspace() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 8) {
                    this.clearDisplay();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();