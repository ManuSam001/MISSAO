const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".texto-resultado");
const textoResultado = document.querySelector(".caixa-resultado");

const perguntas = [
    {
    enunciado: "Pergunta 1", 
    alternativas: [
        "Alternativa 1", 
        "Alternativa 2"
    ]
  },
  {
    enunciado: "Pergunta 1", 
    alternativas: [
        "Alternativa 1", 
        "Alternativa 2"
    ]
  },
 {
    enunciado: "Pergunta 1",
    alternativas: [
        "Alternativa 1",
        "Aternativa 2"
    ]
 },
 {
    enunciado: "Pergunta 1",
    alternativas: [
        "Alternativa 1",
        "Aternativa 2"
    ]
 },
 {
    enunciado: "Pergunta 1",
    alternativas: [
        "Alternativa 1",
        "Aternativa 2"
    ]
}
];

let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
