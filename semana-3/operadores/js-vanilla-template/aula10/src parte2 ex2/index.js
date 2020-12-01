//2. Faça um programa que:
//a. Peça ao usuário que insira um número **par**.
//
//    Dica: não se esqueça de converter a resposta para o tipo número
//
//    b. Imprima na tela **o resto da divisão** desse número por 2.
//    c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//    d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código




let ParNum = prompt("Insira um número par:")
let resultado = ParNum%2

console.log(Number(resultado))
console.log(typeof resultado)

//O padrão para resto de divisão de número par é que sempre será zero, 
//já para número impares o resto da divisão é 1