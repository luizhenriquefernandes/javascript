let maior = 0, menor = 0;
for(let i = 0; i < 5; i++){
    n = parseInt(prompt("Digite o valor: "));
    if(i == 0){
        maior = n; 
        menor = n;
    }else{
        if(n < menor){
            menor = n;
        }
        if(n > maior){
            maior = n;
        }
    }
}
document.write(`O menor valor foi ${menor} e o maior valor foi ${maior}`);