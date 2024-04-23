// operação ternária
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
//                                    ? se for verdadeiro     : se não for
console.log(nivelUsuario);

// if(pontuacaoUsuario >= 1000){
//     console.log('Usuário vip');
// } else{
//     console.log('Usuário normal');
// }