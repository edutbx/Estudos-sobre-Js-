//Funções :))))))))

const pessoa1 = {
    nome:'Eduardo',
    sobrenome:'Abreu',
    idade: 18,

    fala () {
        console.log(`O ${this.nome} ${this.sobrenome} disse oi...`)
    }
}

pessoa1.fala()











// function criaPessoa (nome, sobrenome, idade){
//     return { nome, sobrenome, idade}
// }

// const pessoa1 = criaPessoa('Eduardo', 'Abreu', 18);
// const pessoa2 = criaPessoa('Mário', 'Luidi', 65);
// const pessoa3 = criaPessoa('Roberto', 'Moreira', 78);
// console.log(pessoa1.nome, pessoa2.nome,  pessoa3.nome)