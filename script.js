// Variável com o array notas
let notas = [8.0, 7.5, 6.0, 9.0];

// Função para cálculo de média de notas
function calcularMedia(notas) {
  let total = 0;

  for (let i = 0; i < notas.length; i++) {
    total += notas[i];
  }

  let media = total / notas.length;
  return media;
}

let mediaNotas = calcularMedia(notas);

//----------------------------------------------------------------------------
// Verificar média
function verificarMedia(media) {
  if (media > 7) {
    document.write("Parabéns você passou na média!" + "<br>");
  } else {
    document.write("Infelizmente você está de recuperação." + "<br>");
  }
}

// Chamada da função verificarMedia com a média das notas
verificarMedia(mediaNotas);

//----------------------------------------------------------------------------
// Função para nome dos alunos
function imprimirNomes(alunos) {
  alunos.forEach((nome) => document.write(nome + "<br>"));
}

// Array de alunos
let nomeAlunos = ["João", "Lucas", "Isadora", "Maria", "Ana"];

// Chamando a função para imprimir nomes
imprimirNomes(nomeAlunos);

//----------------------------------------------------------------------------
//Tabuada do 8
function tabuadaOito() {
  for (let i = 0; i <= 10; i++) {
    let resultado = 8 * i; // Fazendo a multiplicação
    document.write(i + 1 + " - 8x" + i + " = " + resultado + "<br>");
  }
}

// Chamando tabuada do 8
tabuadaOito();

//----------------------------------------------------------------------------
// Perguntas ao usuário
let nomeAluno = prompt("Qual o nome do aluno?");
let idadeAluno = prompt("Qual a idade do aluno?");
let serieAluno = prompt("Qual a série do aluno?");
let nomeEscola = prompt("Qual o nome da escola?");
let materiaFavorita = prompt("Qual a sua matéria favorita?");

// Confirmar os dados inseridos
let confirmacao = confirm("Confirma os dados inseridos?");

// Se o usuário confirmar, exibir todas as informações
if (confirmacao) {
  document.write("<h2>Dados do Aluno:</h2>");
  document.write("<p><strong>Nome do aluno:</strong> " + nomeAluno + "</p>");
  document.write("<p><strong>Idade do aluno:</strong> " + idadeAluno + "</p>");
  document.write("<p><strong>Série do aluno:</strong> " + serieAluno + "</p>");
  document.write("<p><strong>Nome da escola:</strong> " + nomeEscola + "</p>");
  document.write(
    "<p><strong>Matéria favorita:</strong> " + materiaFavorita + "</p>"
  );
} else {
  document.write("<p>Dados não confirmados. Encerrando programa.</p>");
}

//----------------------------------------------------------------------------
// Objeto para armazenar as informações da matéria e suas notas
let materiaENotas = {};

// Capturar o nome da matéria
materiaENotas.nomeMateria = prompt("Digite o nome da matéria:");

// Array para armazenar as notas
materiaENotas.notas = [];

// Laço while para capturar as 4 notas
let contador = 0;
while (contador < 4) {
  let nota = parseFloat(prompt("Digite a nota " + (contador + 1) + ":"));
  if (!isNaN(nota)) {
    materiaENotas.notas.push(nota);
    contador++;
  } else {
    alert("Por favor, digite um número válido para a nota.");
  }
}

// Calculando a média das notas usando a função calcularMedia
let media = calcularMedia(materiaENotas.notas);

// Exibindo o objeto e a média das notas
console.log("Objeto com as informações da matéria e suas notas:");
console.log(materiaENotas);
console.log("Média das notas:", media);

//----------------------------------------------------------------------------
// Função para encontrar o maior número
function encontrarMaiorNumero(numeros) {
  if (numeros.length === 0) {
    return "O array está vazio.";
  }

  let maior = numeros[0]; // Definindo o primeiro número como o maior inicialmente

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  return maior;
}

// Utilizando a função
let numeros = [10, 5, 8, 20, 15];
let maiorNumero = encontrarMaiorNumero(numeros);
console.log("O maior número é:", maiorNumero);
