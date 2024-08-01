// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true); // primerio o verbo, url e se é sincrono ou assincrono ('GET', 'URL', true)
//         xhr.send(); // se fossse POST, deveria usar esse .send(e passar aqui os dados do POST)

//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     });
// };

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);
    
        if (response.status !== 200) throw new Error('ERRO 404!');
    
        const html = await response.text();
        carregaResultado(html);
    } catch(e) {
        console.log(e);
    }

}


function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};


// get -> buscar algum conteúdo da internet