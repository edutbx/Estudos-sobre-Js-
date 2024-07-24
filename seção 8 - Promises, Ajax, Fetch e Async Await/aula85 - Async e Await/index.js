function rand(min = 0, max = 3) {
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

// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand())
//     })
//     .then(valor => {
//         console.log(valor);
//         return esperaAi( 3, rand())
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .catch(e => console.log(e));

async function executa() { //o async serve para deixar o código de maneira síncrona, um de cada vez.
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

        console.log ('Terminamos na fase:', fase3);
    } catch (e) { // o try e catch foi adicionado para capturar se tiver algum erro
        console.log(e);
    }
}
executa();

/*
Promise tem 3 estados:
pending -> pendente
fulfilled -> resolvida
rejected -> rejeitada
*/