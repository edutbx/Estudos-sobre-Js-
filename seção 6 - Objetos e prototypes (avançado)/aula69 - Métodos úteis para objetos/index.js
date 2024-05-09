/*
Object.values // parecido com Object.keys, ele exibe as coisas (chaves e valores)
Object.entries // parecido com Object.keys também, exibe as coisas como arrays (chaves e valores em forma de arrays)
Object.assign(des, any) // similar ao spread operators, pórem mais complicado (copiar o objeto)
Object.getOwnPropetyDescriptor(o, 'prop') // serve para ver as propriedades do objeto (objeto, 'o que quer ver do objeto');
... (spread)

// Já vimos...
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Produto', preco: 1.8, cor: 'roxo' };
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));
console.log(Object.entries(produto));   
