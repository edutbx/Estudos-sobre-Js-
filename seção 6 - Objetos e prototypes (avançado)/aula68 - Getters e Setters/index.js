// defineProperty (singular -> um objeto) - defineProperties (plural -> dois ou mais objetos)
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //serve para exibir se usar um for in (mostra a chave)
        configurable: true, // configurável (ele que manda em tudo)
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                console.log('Bad Value');
                return;
            }

            estoquePrivado = valor;
        }
    });
}
const p1 = new Produto('Camisa', 20, 3);
// console.log(p1);
p1.estoque = 123;
console.log(p1.estoque);