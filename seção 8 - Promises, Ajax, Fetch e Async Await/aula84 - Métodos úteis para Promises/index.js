function rand(max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (typeof msg !== 'string') {
            reject('CAI NO ERRO'); //lembrando, reject cai no erro
            return;
        }

            resolve(msg.toUpperCase() + ' - passei na Promise');
        }, tempo)
    });
}

// Tipos de Promises = Promisse.all \\ Promise.resolve \\ Promise.reject
// const promises = [

//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),
//     esperaAi(123, rand(1, 5)),

// ];

// Promise.all(promises) // resolve todas as promises (se tiver erro, ele rejeita todas)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     })

// Promise.race(promises) // race = corrida -> ele entrega a primeira coisa que resolver (se tiver erro, o erro só será executado se ele vir antes, se ele "ganhar" a corrida, vier antes dos certos)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     })



// function baixaPagina () {
//     const emCache = false;

//     if(emCache) {
//         return Promise.resolve('Página em cache'); // serve apenas para resolver uma promise de cara
//     } else {
//         return esperaAi('Página baixada', 3000);
//     }
// }

function baixaPagina () {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache'); // serve apenas para rejeitar uma promise de cara (cai no catch sempre que tem o reject)
    } else {
        return esperaAi('Página baixada', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERROR', e));