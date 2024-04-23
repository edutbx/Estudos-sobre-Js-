function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


// setInterval() -> vai configurar o intervalo de tempo para que alguma função seja executada em determinado momento

// function funcaoDoInterval() {
//     console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000 ) // <- apenas chama a função sem executar. se quiser executar seria setInterval(funcaoDoInterval()) -> com () --------- o 1000 é o tempo em milisegundos = 1000 milisec é igual a 1 sec!

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000) // ctrl + alt + M -> tecla de atalho para fazer o código parar

setTimeout(function() { // ele é a mesma coisa do setInterval só que ele executa uma vez
    clearInterval(timer); // uma função para fazer a outra função parar. passa o que voce quer parar clearInterval(aqui)
}, 10000);