var entrevistados = new Array(45);
var i;

maisNovo = 110;
totalIdade = 0;
qtdPessimo = 0; 
qtdBom = 0;
qtdOtimo = 0;
mulheres = 0;
homens = 0;
MaisVelho = 0;

for(i=0; i<entrevistados.length; i++){
    nome = prompt("Nome: ");
    idade = parseInt(prompt("Idade: "));
    sexo = prompt ("Sexo (F - feminino e M - Masculino): ");
    opniao = parseFloat(prompt("Opinião sobre o filme(ótimo=4, bom=3, regular=2, péssimo=1): "));
   
    totalIdade += idade;  

    if (MaisVelho < idade)
        MaisVelho = idade;
    
    if (maisNovo > idade)
        maisNovo = idade;
    
    if(opniao === 1)
        qtdPessimo++;
    
    if(opniao === 3)
        qtdBom++;
    
    if(opniao === 4)
        qtdOtimo++;

    if(sexo.toUpperCase() === "F")
        mulheres++;
    else if (sexo.toUpperCase() === "M")
        homens++;
}

media = totalIdade / entrevistados.length; /*lenght vai saber o tamanho da lista*/

alert("Idade média dos entrevistados: " + media + " anos.");
alert("Idade da pessoa mais velha: " + MaisVelho + " anos.");
alert("Idade da pessoa mais nova: " + maisNovo + " anos.");
alert("Quantidade de pessoas que responderam Péssimo: " + qtdPessimo);
alert("Porcentagem de pessoas que responderam Ótimo: " + ((qtdOtimo*100)/entrevistados.length).toFixed(2) + "%.");
alert("Porcentagem de pessoas que responderam Bom: " + ((qtdBom*100)/entrevistados.length).toFixed(2) + "%.");
alert("Total de mulheres que respoderam ao questionário: " + mulheres + ".");
alert("Total de homens que respoderam ao questionário: " + homens + ".");
