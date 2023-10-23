function abrirJanela() {
  document.getElementById('janelaImagem').src = "img/open.jpg";
  document.getElementById('estado').textContent = "Janela Aberta ☀️.";
}

function fecharJanela() {
  document.getElementById('janelaImagem').src = "img/closed.png";
  document.getElementById('estado').textContent = "Janela Fechada.";
}

function quebrarJanela() {
  document.getElementById('janelaImagem').src = "img/broken.png";
  document.getElementById('estado').textContent = "Janela Quebrada!🫥";
}
