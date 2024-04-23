const data = new Date('1965-07-28 00:00:00');
let diaSemana = data.getDay();
const diaSemanaTexto = criarDia(diaSemana);
// diaSemana = 9;

function criarDia(diaSemana){
    let diaSemanaTexto;

switch (diaSemana){
    case 0:
    diaSemanaTexto = 'Domingo';
    break;
    case 1:
    diaSemanaTexto = 'Segunda';
    break;
    case 2:
    diaSemanaTexto = 'Terça';
    break;
    case 3:
    diaSemanaTexto = 'Quarta';
    break;
    case 4:
    diaSemanaTexto = 'Quinta';
    break;
    case 5:
    diaSemanaTexto = 'Sexta';
    break;
    case 6:
    diaSemanaTexto = 'Sábado';
    break;
    default:
    diaSemanaTexto = 'não existe'
}
return diaSemanaTexto;
}

console.log(diaSemanaTexto);
console.log(diaSemana);
// let diaSemanaTexto;

// switch (diaSemana){
//     case 0:
//     diaSemanaTexto = 'Domingo';
//     break;
//     case 1:
//     diaSemanaTexto = 'Segunda';
//     break;
//     case 2:
//     diaSemanaTexto = 'Terça';
//     break;
//     case 3:
//     diaSemanaTexto = 'Quarta';
//     break;
//     case 4:
//     diaSemanaTexto = 'Quinta';
//     break;
//     case 5:
//     diaSemanaTexto = 'Sexta';
//     break;
//     case 6:
//     diaSemanaTexto = 'Sábado';
//     break;
//     default:
//     diaSemanaTexto = 'não existe'
// }
