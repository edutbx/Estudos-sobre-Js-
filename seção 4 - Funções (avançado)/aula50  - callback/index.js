// callback (do google:  é uma rotina que é passada como parâmetro para outro método.) 
// -> serve para exibir de forma certa (na ordem certa)

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
} //função feita para gerar um tempo aletorio de 1 a 3 segundos

function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    }, rand());
}

function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    }, rand());
}

function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    }, rand());
}

f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log('Olá Mundo!');
}
