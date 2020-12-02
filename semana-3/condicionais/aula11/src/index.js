//EXERCICIO - 1

//const respostaDoUsuario = prompt("Digite o número que você quer testar")
//const numero = Number(respostaDoUsuario)
//
//if(numero % 2 === 0) {
//  console.log("Passou no teste.")
//} else {
//  console.log("Não passou no teste.")
//}
//
//Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"?

//RESPOSTA:
//O código armazena o número digitado na variável respostaDoUsuario em outra variavel número coloca a respostaDoUsuario
// usuario como variável do tipo número, e faz o teste para: se o resto da divisão do número for 0 imprimir no
// console log a que passou no teste, se não(else) imprime no console.log que não passou no teste.



//EXERCICIO - 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
    
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. Para que serve o código acima?

// b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

// c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

//RESPOSTA: 
// a) Para que assim que o usuário inserir cada caso do switch case, o programa imprima qual a fruta e seu valor correspondente
// b) O preço da fruta  Maçã  é  R$  2.25
// c) Será o valor diretamente do valor do default já que retiramos o break ele lê diretamente o default
//    O preço da fruta  Pêra  é  R$  5



//EXERCICIO - 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// RESPOSTAS
// a. O que a primeira linha está fazendo?
// Faz com que o valor de números digitados seja a atribuido na variável const numero e seja um número definido por number

// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Como o número 10 obedece ao condicional por ser maior que 0, imprime a mensagem Esse número passou no teste no console
// Como o número não obedece ao condicional por ser menor ele não imprimira nada

// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Sim, haverá, pois o console.log de mensagem está fora do escopo pai, e como a variavel let foi definida no
// escopo filho, ela não saíra de dentro do escopo pai para que seja impressa no console.log fora.



//EXERCICIO - 4

// Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a 
// idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// 1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// 2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// 3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`


// const idade = Number(prompt("Qual a sua idade em números?"))

// if(idade >= 18) {
//  console.log("Você pode dirigir")
// } else {
//  console.log("Você não pode dirigir.")
// }


//EXERCICIO - 5

// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) 
// ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
//  Utilize o bloco if/else

// const turno = prompt("Digite o turno que você estuda:  M (matutino), V (Vespertino), N (Noturno)")

// if(turno === 'M') {
//  console.log("Bom Dia!")
// } else if(turno === 'V') {
//  console.log("Boa Tarde!")
// } else if(turno === 'N') {
//     console.log("Boa Noite!")
// } else {
//     console.log('Digite o turno em formato válido!')
// }



//EXERCICIO - 6

// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const turno = prompt("Digite o turno que você estuda:  M (matutino), V (Vespertino), N (Noturno)")

// switch(turno){
//     case 'M':
//       console.log("Bom Dia!")
//       break
//     case 'V':
//       console.log("Boa Tarde!")
//       break
//     case 'N':
//       console.log("Boa Noite!")
//       break
//     default:
//         console.log('Digite o turno em formato válido!')
// }



//EXERCICIO - 6

// Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia
//  e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão
//   assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir 
//   o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima 
//   "Escolha outro filme :("

