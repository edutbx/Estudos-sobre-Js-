let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let aa = varA

varA = varB
varB = varC
varC = aa

console.log(varA, varB, varC);

// [varA, varB, varC] = [varB, varC, varA] MANEIRA MAIS NOVA DE RESOLVER ESSE PROBLEMA!