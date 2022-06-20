const imagens = [
  'imagens/bobrossparrot.gif',
  'imagens/explodyparrot.gif',
  'imagens/fiestaparrot.gif',
  'imagens/metalparrot.gif',
  'imagens/revertitparrot.gif',
  'imagens/tripletsparrot.gif',
  'imagens/unicornparrot.gif'
]

let quantidadeCartas
let contador = 0

function comparador() {
  return Math.random() - 0.5
}

quantidadeCartas = prompt('Olá! Com quantas cartas você quer jogar?')
quantidadeCartas = Number(quantidadeCartas)
console.log(quantidadeCartas)
while (
  quantidadeCartas % 2 !== 0 ||
  quantidadeCartas > 14 ||
  quantidadeCartas < 4
) {
  quantidadeCartas = prompt('Digite um número que seja par entre 4 e 14')
  quantidadeCartas = Number(quantidadeCartas)
}
console.log('Você agora está pronto para jogar')
