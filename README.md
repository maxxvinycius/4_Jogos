# 🎮 4 Jogos em JavaScript

Este projeto contém um **menu principal** que dá acesso a 4 jogos feitos com HTML, CSS e JavaScript puro.

---

## 📁 Estrutura do Projeto
4_jogos/
│
├── menu/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── Jogo da Memória/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── Jogo da Velha/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── Jogo da Adivinhação/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
└── Pedra, Papel, Tesoura/
├── index.html
├── style.css
└── script.js


---

## 🧭 MENU PRINCIPAL

O menu serve como **hub de navegação** para os jogos.

### 📌 HTML (menu)

```html
<div class="container">

  <div class="card">
    <p>Jogo da Memória</p>
    <button>Jogar</button>
  </div>

  <div class="card">
    <p>Jogo da Velha</p>
    <button>Jogar</button>
  </div>

  <div class="card">
    <p>Jogo da Adivinhação</p>
    <button>Jogar</button>
  </div>

  <div class="card">
    <p>Pedra, Papel e Tesoura</p>
    <button>Jogar</button>
  </div>

</div>
⚙️ JavaScript do MENU
document.addEventListener("DOMContentLoaded", () => {

  const botoes = document.querySelectorAll(".card button");

  // JOGO DA MEMÓRIA
  botoes[0].onclick = () => {
    window.location.href = "../Jogo da Memória/index.html";
  };

  // JOGO DA VELHA
  botoes[1].onclick = () => {
    window.location.href = "../Jogo da Velha/index.html";
  };

  // JOGO DA ADIVINHAÇÃO
  botoes[2].onclick = () => {
    window.location.href = "../Jogo da Adivinhação/index.html";
  };

  // PEDRA PAPEL TESOURA
  botoes[3].onclick = () => {
    window.location.href = "../Pedra, Papel, Tesoura/index.html";
  };

});
🧠 JOGO DA MEMÓRIA

Um jogo estilo “Simon Says” onde o jogador deve repetir a sequência de cores.

🎯 Objetivo:

Memorizar e repetir a sequência correta.

🧩 Tecnologias:
HTML
CSS
JavaScript (DOM + lógica de sequência)
❌ JOGO DA VELHA

Jogo clássico de X e O.

🎯 Objetivo:

Formar uma sequência de 3 símbolos iguais.

🧩 Funcionalidades:
Alternância de jogadores
Verificação de vitória
Botão de reset
🔢 JOGO DA ADIVINHAÇÃO

O jogador tenta descobrir um número secreto de 1 a 100.

🎯 Objetivo:

Adivinhar o número com menos tentativas possíveis.

🧩 Recursos:
Dicas (maior ou menor)
Contador de tentativas
Reinício do jogo
✊ PEDRA, PAPEL E TESOURA

Jogo contra a máquina.

🎯 Objetivo:

Vencer a IA com escolhas estratégicas.

🧩 Funcionalidades:
Sistema de pontuação
Animações
Botão de próxima rodada
Botão de reiniciar
🚀 Tecnologias usadas
HTML5
CSS3
JavaScript Vanilla
DOM Manipulation
LocalStorage (no jogo da memória)
