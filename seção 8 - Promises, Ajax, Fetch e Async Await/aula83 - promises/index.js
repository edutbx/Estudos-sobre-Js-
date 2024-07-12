function rand(max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { //resolve =  o código ta certo, resolve ai pra mim js! rejecet = rejeita o código ai js! n precisa ser esses nomes, porém é o comum.
        setTimeout(() => {
            if(typeof msg !== 'string') reject ('BAD VALUE'); // o reject cai no catch
            resolve(msg);
        }, tempo)
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando os dados da BASE', rand(1, 3));
    })
    .then(reposta => {
        console.log(reposta);
        return esperaAi(2222, rand (1, 3));
    })
    .then(reposta => {
        console.log(reposta);
        return esperaAi('Tratando os dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela')
    })
    .catch(e => { //catch É erro, sempre!!!!
        console.log('ERROR:', e)
    });

    console.log('Isso será exibido antes de qualquer promise');