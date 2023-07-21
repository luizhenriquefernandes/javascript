//Referência ao formulário e resultado
let form = document.getElementById("calcForm");
let divResultado = document.getElementById("resultado");
//adicionar um evento de envio ao formulario
form.addEventListener("submit",function(event){
    event.preventDefault();
    calculoMedia();
});
function calculoMedia(){
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let parImpar = valor1 % 2;
    
    if(parImpar == 0){
        divResultado.textContent = "O valor " + valor1 +" é par";
    }
    else if (parImpar == 1 || parImpar == -1){
        divResultado.textContent = "O valor " + valor1 + " é ímpar";
    }
    else
    {
        divResultado.textContent = "O valor " + valor1 +" não é válido";
    }
}