function validarFormulario() {
    var nome = document.forms["meuForm"]["nome"].value;
    var email = document.forms["meuForm"]["email"].value;
    var comentario = document.forms["meuForm"]["comentario"].value;
    var pesquisa = document.forms["meuForm"]["pesquisa"].value;

    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres.");
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("O email deve conter @ e . (ponto).");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter pelo menos 20 caracteres.");
        return false;
    }

    var radios = document.forms["meuForm"]["pesquisa"];
    var selecionado = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selecionado = true;
            break;
        }
    }

    if (!selecionado) {
        alert("A pesquisa é obrigatória.");
        return false;
    }

    return true;
}
