const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

for (let numero of numeros){
    
        if (numero === 2){  
            console.log('O número dois foi pulado aqui  ');
            continue;
            console.log('ele pula para as próximas linhas do laço');
        }

        if (numero === 7) {
            break; //para o laço se encontrar esse valor
        }

    console.log(numero);
}
