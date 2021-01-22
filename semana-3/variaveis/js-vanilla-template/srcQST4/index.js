

//PARTE2

//QST4
let perguntas = ["Você gosta de azul?", "Você trabalha?", "Você gosta de futebol", "Você gosta de esportes?"]
let respostas = [true, true, false, true]


console.log (perguntas[0], respostas[0])
console.log (perguntas[1], respostas[1])
console.log (perguntas[2], respostas[2])
console.log (perguntas[3], respostas[3])



//A outra forma:
//PpreencherAbaixoComValorDigitado
respostas[0] = prompt(perguntas[0])           //Subistitui array de respostas[0] com o valor digitado (prompt) o array perguntas[0] é só para imprimir a pergunta 0 em console log, não vai substituir array respostas por perguntas[0] 

console.log (perguntas[0], respostas[0])    //imprime o novo valor 
