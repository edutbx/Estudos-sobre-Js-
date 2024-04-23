// try{
//     // É executada quando não há erros
// } catch (e){
//     // É executada quando há erros
// } finally{
//     // Sempre executado
// }

// try{
//     console.log('teste');
//     console.log('teste1');
//     console.log(teste1); // ele para de ler o try se encontrar um erro
//     console.log('teste1');

// } catch (e){
//     console.log('aqui tem um erro');
// } finally{
//     console.log('aqui sempre será executado')
// }

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false //para retornar a hora no modo 24H
    });
}

const hora = retornaHora();
console.log(hora);