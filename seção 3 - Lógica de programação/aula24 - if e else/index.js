/*      IF, ELSE
Entre 5-11 -> Bom dia!
Entre 12-18-> Boa tarde!
Entre 19-23->Boa noite!
Entre 1-4->Boa madrugada!
*/
const hora = 5;

if(hora >= 5 && hora <=11){
    console.log('Bom dia!')
} else if(hora >=12 && hora <=18){
    console.log('Boa tarde!')
} else if(hora >=19 && hora<=23){
    console.log('Boa noite!')
}else if (hora>= 1 && hora<=4){
    console.log('Boa madrugada!')
}
 else {
    console.log('Digite uma hora correta!')
}