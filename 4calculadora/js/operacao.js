//Referência ao formulário e resultado
let form = document.getElementById("calcForm");
let divResultado = document.getElementById("resultado");
//adicionar um evento de envio ao formulario
form.addEventListener("submit",function(event){
    event.preventDefault();
    calculoSoma();
});
function calculoSoma(){
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let soma = valor1+valor2;
    divResultado.textContent = "A soma é: " + soma;
}
