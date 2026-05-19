const botoes = document.querySelectorAll("#card button");


// ===============================
// JOGO DA MEMÓRIA
// ===============================
botoes[0].addEventListener("click", () => {

  window.location.href =
    "./Memoria/index.html";

});


// ===============================
// JOGO DA VELHA
// ===============================
botoes[1].addEventListener("click", () => {

  window.location.href =
    "./Velha/index.html";

});


// ===============================
// JOGO DE ADIVINHAÇÃO
// ===============================
botoes[2].addEventListener("click", () => {

  window.location.href =
    "./Adivinhacao/index.html";

});


// ===============================
// PEDRA PAPEL TESOURA
// ===============================
botoes[3].addEventListener("click", () => {

  window.location.href =
    "./Jokempo/index.html";

});