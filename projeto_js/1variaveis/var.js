document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const numeroDigitado = document.getElementById('numero').value;
        
        // Armazene o número em uma variável
        const meuNumero = parseFloat(numeroDigitado); // Use parseFloat para permitir números decimais

        // Faça o que desejar com a variável meuNumero
        document.write('Número digitado: ' + meuNumero);
    });
});