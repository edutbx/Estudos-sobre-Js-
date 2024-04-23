// função geradora -> gera coisas (função preguiçosa)

function* geradora1() {
    //Código qualquer...
    yield 'Valor1' ; //yield eh tipo return só que diferente KKKK
    //Código qualquer...
    yield 'Valor2' ;
    //Código qualquer...
    yield 'Valor3' ;
}

const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
// console.log(g1.next()); // aqui executa o done : true porque ele mostra que não tem um próximo valor

function* geradora2() {
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}
const g2 = geradora2();
// console.log(g2.next().value); // executa e vai somando um valor a cada vez que chama essa função geradora
// console.log(g2.next().value);
// console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield*geradora3(); // delogou parte da tarefa da geradora3 na geradora4 (recebe os valores da geradora3 como se fosse feito tudo junto)
    yield 3;
    yield 4;
    yield 5;
}

// const g4 = geradora4();
// for (let valor of g4){
//     console.log(valor);
// }

function* geradora5() {
    yield function() { //mostra que pode retornar não só string e números
        console.log('Vim do y1'); 
    };

        //....

    yield function() {
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();