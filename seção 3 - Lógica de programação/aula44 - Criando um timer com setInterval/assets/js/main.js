function relogio() {
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function criaHoraSec(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function inciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraSec(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('zerar')) {
            relogio.style.color = 'red';
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            segundos = 0;
        }

        if (el.classList.contains('iniciar')) {
            relogio.style.color = 'black';
            clearInterval(timer);
            inciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            relogio.style.color = 'red';
            clearInterval(timer);
        }

    });



}

relogio();