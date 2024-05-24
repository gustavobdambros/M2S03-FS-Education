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

// Verificar média
function verificarMedia(media) {
  if (media > 7) {
    document.write("Parabéns você passou na média !");
  } else {
    document.write("Infelizmente você está de recuperação.");
  }
}

// Chamada da função verificarMedia com a média das notas
verificarMedia(mediaNotas);
