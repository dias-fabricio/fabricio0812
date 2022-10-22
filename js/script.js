function calcular(){
    // Pegando os dois valores colocados
    let valor1 = Number(document.getElementById('valor1').value);
    let valor2 = Number(document.getElementById('valor2').value);
    
    

    // Criando uma constante para o resultado
    const resultado = document.getElementById('resultado');
    
    
    
    // Pegando a conta aritmética
    const departamento = document.getElementById('departamento');
    
    
    
    // Condição dependente da conta aritmética
    if(departamento.value == "1"){
        var op = valor1 + valor2;
        console.log(".");
        console.log(op);
        resultado.value = Number(op);
    }
    else if(departamento.value == "2"){
        var op = valor1 - valor2;
        resultado.value = Number(op);
    }
    else if(departamento.value == "3"){
        var op = valor1 / valor2;
        resultado.value = Number(op);
    }
    else if(departamento.value == "4"){
        var op = valor1 * valor2;
        resultado.value = Number(op);
    }
}