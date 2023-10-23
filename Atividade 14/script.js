function maiusculas(){
    document.getElementById("texto").value = document.getElementById("texto").value.toUpperCase();
    document.forms.teste.opcao1.checked = true;
    document.forms.teste.opcao2.checked = false;
}    

function minusculas(){
    document.getElementById("texto").value = document.getElementById("texto").value.toLowerCase();
    document.forms.teste.opcao1.checked = false;
    document.forms.teste.opcao2.checked = true;
}
