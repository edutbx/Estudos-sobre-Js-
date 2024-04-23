// eventos de teclas -> keypress-quando a tecla é pressionada // keyup-tecla pressionada e solta // keydown-pressiona a tecla e ela ainda ta 
//presssionada

const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefa = document.querySelector('.tarefa');

function criaLi() {
    const li =  document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){ // para capturar o evento de apertar o enter para enviar
    if ( e.keyCode === 13){ // 13 é o código da tecla enter
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); // focus é quando você clica na caixa de texto e fica piscando a barrinha lá
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar'); um  jeito de adicionar classes
    botaoApagar.setAttribute('class', 'apagar'); // outro jeito -> (o que voce quer, o nome do que vc criou) ('class', 'apagar')
    botaoApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(botaoApagar);
} 

function criaTarefa(textoInput) {
   const li = criaLi();
   li.innerText = textoInput;
   tarefa.appendChild(li); 
   limpaInput();
   criaBotaoApagar(li);
   salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target; // resgata os eventos esse target
    if (el.classList.contains('apagar')){ // esse contains é conter a classe 'apagar'
        el.parentElement.remove(); // esse parentElement serve para selecionar quem é o pai do elemento el e remove de remover
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
         //  o de cima serve apenas para remover a palavra apagar na hora de exibir -> replace serve pra pegar o lugar. .trim apenas remove o espaço pequeno na hora da exibição.
         listaDeTarefas.push(tarefaTexto); 
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas); // faz ele virar uma string em JSON (converteu a array em string)
    localStorage.setItem('tarefa', tarefasJSON); // como se fosse uma base de dados do navegador e só salva em string
}

function adicionaTarefasSalvas (){
    const tarefas = localStorage.getItem('tarefa');
    const listaDeTarefas = JSON.parse(tarefas); // converte de volta para um objeto em js -> nessa caso voltou a ser uma array
    
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas ()