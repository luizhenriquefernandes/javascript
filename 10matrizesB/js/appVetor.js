let vetA = [
    [1,2],
    [3,4],
    [5,6]
];
let vetB = [
    [1,2,3],
    [4,5,6]
];
let vetR = [];
let resultado;
//construção da matriz 3x3 iniando com valor 0
for(let linha = 0; linha < vetA.length; linha++){
    vetR[linha]=[];  
    for(let coluna = 0; coluna < vetB.length; coluna++){
        vetR[linha][coluna] = 0;
    }    
}
//multiplicação das matrizes

for(let linha = 0; linha< vetA.length; linha++){
    for(let coluna = 0; coluna < vetB.length; coluna++){
        for( let r = 0; r < vetB.length; r++){
            vetR[linha][coluna] += vetA[linha][r] * vetB[r][coluna];
        }
    }
}
for (let i = 0; i < vetR.length; i++) {
    document.write(vetR[i].join(' '));
    document.write("<br>");
    
    }


