var number = new Array (3);
var i;
var cont =1;
var maior = 0;

for(i=0; i<number.length; i++){
    number[i] = parseFloat (prompt("Digite o "+ cont+ "º número: "));
    cont++;
}

function maiorNum(number){
    for(i=0; i<number.length; i++)
        if(number[i] > maior)
            maior = number[i];
    return maior; 
  
}

function sortfunction(a, b){
    return (a - b)
  }

function crescente (number){
    return number.sort(sortfunction);
}

alert("O maior número entre " + number[0] + ", " + number[1] + ", " + number[2] + " é o " + maiorNum(number) + ".");
alert("A ordem crescente é: " + crescente(number));