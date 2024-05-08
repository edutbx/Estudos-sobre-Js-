// defineProperty (singular -> um objeto) - defineProperties (plural -> dois ou mais objetos)
function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //serve para exibir se usar um for in (mostra a chave)
        value: estoque, // valor
        writable: false, // se pode alterar o valor ou não
        configurable: true // configurável (ele que manda em tudo)
    });
    
    Object.defineProperties(this, {
        nome: {
        enumerable: true, 
        value: nome, 
        writable: true, 
        configurable: true
        },

        preco: {
        enumerable: true,
        value: preco,
        writable: true,
        configurable: true
        }
    });
};

const p1 = new Produto ('Camiseta', 20, 3);
console.log(Object.keys(p1)); // pra ver as chaves dos objetos
