const elementos = [
    {tag: 'p', texto: 'teste1'},
    {tag: 'div', texto: 'teste2'},
    {tag: 'section', texto: 'teste3'},
    {tag: 'footer', texto: 'teste4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for ( let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
    console.log(tag);
}

container.appendChild(div);