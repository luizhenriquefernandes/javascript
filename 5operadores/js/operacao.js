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
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let media = (valor1+valor2)/2;
    if(media < 6)
    {        
        divResultado.textContent = "A média é: " + media + " Aluno reprovado";
    }
    else
    {        
        divResultado.textContent = "A média é: " + media + " Aluno Aprovado";   
    }
}