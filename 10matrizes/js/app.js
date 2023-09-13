// Definindo as matrizes
let matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
];

let matrizB = [
    [7, 8, 9],
    [10, 11, 12]
];

// Inicializando a matriz resultante com zeros
let matrizResultante = [];
for (let i = 0; i < matrizA.length; i++) {
    matrizResultante[i] = [];
    for (let j = 0; j < matrizB[0].length; j++) {
        matrizResultante[i][j] = 0;
    }
}

// Realizando a multiplicação das matrizes
for (let i = 0; i < matrizA.length; i++) {
    for (let j = 0; j < matrizB[0].length; j++) {
        for (let k = 0; k < matrizB.length; k++) {
            matrizResultante[i][j] += matrizA[i][k] * matrizB[k][j];
        }
    }
}

// Apresentando o resultado no console
for (let i = 0; i < matrizResultante.length; i++) {
    document.write(matrizResultante[i].join(' '));
    document.write("<br>");
    console.log(matrizResultante[i].join(' '));
}

