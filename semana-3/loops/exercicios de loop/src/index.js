// Exercícios de interpretação de código
// EXERCÍCIO 1

// Temos um loop por for, onde nossa variável valor inicia com 0, o loop for incrementa na varivel i que inicia em
// 0, mais 1 com a condição de que i seja menor do que 5, então ao incrementar 1 o i=1 vai somar ao valor, 
// e seguir novamente, para i=2 somando ao valor que já era 1 vai passar a ser 2, e continua somar i=2 ao valor
// que já estava em valor=2 passando a ser i=2 + valor=2 assim valor = 4, o loop vai incrementar i até que seja menor
// do que 5, então vai incrementar até 4 e sair do loop, logo o valor vai chegar a ser 6 + 4 de i, assim valor = 10
// imprimindo no console o valor 10.


// ---------------------------------------------------------------------------------------------------------------
// EXERCÍCIO 2
// a. O que vai ser impresso no console?
// Temos o mesmo que um loop for com um condicional de que vai ser impresso o número do array.length lista se for maior
// do que 18, logo no array temos 6 elementos maiores, sendo impressos assim em ordem:
// 19
// 21
// 23
// 25
// 27
// 30

// ---------------------------------------------------------------------------------------------------------------
// b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
//  creio que por indexOf(num) que dava certo acessar um índice da lista de cada elemento


// ***---------------------------------------------------------------------------------------------------------------
// ***---------------------------------------------------------------------------------------------------------------
// EXERCÍCIO 3

// a) Imprima cada um dos valores do array original.

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let num of array) {
//         console.log(num)
// }


// ---------------------------------------------------------------------------------------------------------------
// b) Imprima cada um dos valores do array original divididos por 10

// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//  for (let numeros of array) {
   
//         console.log(numeros/10)   
//  }

// ---------------------------------------------------------------------------------------------------------------
// c.) Escreva um programa que:

// - **Crie** um novo array contendo, somente, os números pares do array original.
// - **Imprima** esse novo array
 
// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let par=[]

//  for (let numeros of array) {
//     if (numeros%2 === 0) {
//         par.push(numeros)
//     }
//  }
//  console.log(par)  

// ---------------------------------------------------------------------------------------------------------------
// d.) Escreva um programa que:

// - **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
// - **Imprima** este novo array

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novoArrayStrings = []

//  for (i=0; i < array.length; i++ ) {
//      const arraystring = `O elemento do index ${i} é: ${array[i]}`
//      novoArrayStrings.push(arraystring)
//  }
//  console.log(`Novo array contendo strings: `, novoArrayStrings)


// ---------------------------------------------------------------------------------------------------------------
// e.) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let menorValor = array[0]
// let maiorValor = array[0]

// for (i=0; i < array.length; i++) {
//     if (array[i] > maiorValor) {
//         maiorValor = array[i]
//     }  else if (array[i] < menorValor) {
//         menorValor = array[i]
//     }
// }
// console.log(`O maior número do array é ${maiorValor} e o menor número do array é ${menorValor}`)



  