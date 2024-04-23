// const data = new Date();
// let diaSemana = data.getDay();
// const diaSemanaTexto = criarDia(diaSemana);

// let numDia = data.getDate();

// let mesNome = data.getMonth();
// const mesNomeRecebe = nomeMes(mesNome);

// let numAno = data.getFullYear();

// let horas = data.getHours();
// let min = data.getMinutes();

// function criarDia(diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             break;
//         case 1:
//             diaSemanaTexto = 'Segunda';
//             break;
//         case 2:
//             diaSemanaTexto = 'Terça';
//             break;
//         case 3:
//             diaSemanaTexto = 'Quarta';
//             break;
//         case 4:
//             diaSemanaTexto = 'Quinta';
//             break;
//         case 5:
//             diaSemanaTexto = 'Sexta';
//             break;
//         case 6:
//             diaSemanaTexto = 'Sábado';
//             break;
//     }
//     return diaSemanaTexto;
// }

// function nomeMes(nome) {
//     let recebeNome;
//     switch (nome) {
//         case 0:
//             recebeNome = 'Janeiro';
//             break;
//         case 1:
//             recebeNome = 'Fevereio';
//             break;
//         case 2:
//             recebeNome = 'Março';
//             break;
//         case 3:
//             recebeNome = 'Abril';
//             break;
//         case 4:
//             recebeNome = 'Maio';
//             break;
//         case 5:
//             recebeNome = 'Junho';
//             break;
//         case 6:
//             recebeNome = 'Julho';
//             break;
//         case 7:
//             recebeNome = 'Agosto';
//             break;
//         case 8:
//             recebeNome = 'Setembro';
//             break;
//         case 9:
//             recebeNome = 'Outubro';
//             break;
//         case 10:
//             recebeNome = 'Novembro';
//             break;
//         case 11:
//             recebeNome = 'Dezembro';
//             break;

//     }
//     return recebeNome;
// }

// const h1 = document.querySelector('.container h1');
// h1.innerHTML = `${diaSemanaTexto}, ${numDia} de ${mesNomeRecebe} de ${numAno} às ${horas}:${min}`

const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);