for (let index = 1; index <= 9 ; index++) {
    document.write(`<label for="txtNumero${index}">Número ${index}</label>`);
    document.write(`<input type="text" name="txtNum${index}" id="txtNumero${index}">`);
    }
document.write(`<input type="submit" value = "calcular">`);
