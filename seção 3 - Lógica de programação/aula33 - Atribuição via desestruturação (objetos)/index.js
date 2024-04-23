//Atribuição via desestruturação (objetos)!!
const pessoa ={
    nome:'Eduardo',
    sobrenome:'Tbx',
    idade: 18,
    endereco: {
        rua: 'rua1',
        numero: 8
    }

}

//Atribuição via desestruturação (objetos)
const { nome } = pessoa; // pega a chave que esta a variavel pessoa
console.log(nome);

const { idade: gaviao } = pessoa; // isso muda o valor da variável -> idade: gaviao -> idaade = o nome da variável antes!
console.log(gaviao);

const { endereco: { rua : r, numero } } = pessoa; // para pegar um valor de dentro do objeto que está dentro do outro objeto!
console.log(r, numero);