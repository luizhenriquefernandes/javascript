let frutas = ["aborora", "maçã", "tomate", "morango"]
frutas.forEach(element => {
    document.write(`${element}<br>`); 
    element.forEach(element1 => {
        document.write(element1);
    })   
});