const numero = Number(prompt("Digite um número: "));
const numero_titulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");
 
numero_titulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p> Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é interio: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima:${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para baixo${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`;
