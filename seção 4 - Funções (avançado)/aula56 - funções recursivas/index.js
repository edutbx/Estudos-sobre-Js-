//função recursiva - se executa e se chama de volta (eh fácil, só se preocupar com o quando ela vai parar)

function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max ++;
    recursiva(max);
}

recursiva(0);