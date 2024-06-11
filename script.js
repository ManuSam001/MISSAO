const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".texto-resultado");
const textoResultado = document.querySelector(".caixa-resultado");

const perguntas = [
    {
      enunciado: "Qual a melhor meneira de se combater o desmatamento", 
      alternativas: [
        "Reflorestamento de áreas degradadas", 
        "Implementação de leis mais rigorosas para a proteção das florestas"
    ]
  },
  {
    enunciado: "Como podemos combater a desigualdade social eficaz e sustentável", 
    alternativas: [
        "Implementar programas de educação e formação profissional acessíveis a todos", 
        "Políticas de redistribuiçaõ de renda e oportunidades"
    ]
  },

];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const Alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent = alternativas;
        caixaAlternativas.appendChild(botaoAlternativas);

    }
}

mostraPergunta();
