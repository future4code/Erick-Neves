
//------------------------EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO----------------------------------

//EXERCICIO 1:
// Temos uma função conversorDeMoeda que recebebe como parâmetro um valor que será utilizado 
// na função para conversão de moeda, na função é declarada uma variável constante cotação, onde vai 
// se atribuir o valor digitado atrávez da caixa do prompt esse valor é convertido para Number, em seguida
// retornamos o valor convertido a partir da operação de multiplicação pelo valor que recebemos do parâmetro
// pelo valor inserido e atribuido a cotacao, juntamente com a mensagem "R$" antes do valor final da operação
// declara se outra variável constante meuDinheiro que vai ser atribuida ao valor retornado pela função 
// conversorDeMoeda, está função usa como parâmetro o valor 100, logo será atribuido a essa constante o valor
// de 100 * valor inserido para const cotação, portanto será impresso no console o valor final atribuido 
// a constante meuDinheiro que será o resultado da operação de multiplicação anterior para chegar na conversão da moeda.

//EXERCICIO 2:
// Temos nesta uma função investeDinheiro que recebe dois parâmetros o tipo e o valor, declara se uma variável
// alterável let que recebera o valor retornado da operação realizada no caso selecionado atrávez do switch pelo
// tipo informado no parâmetro tipoDeInvestimento, e o parametro valor informado para que a operação do caso seja 
// realizada para o seu respectivo caso, no exemplo será chamada a função na primeira constante novoMontante para 
// atribuir o valor retornado da operação do caso, neste caso será Ações o seu tipo, e 150 o valor, assim a função 
// executa a operação do caso Ações onde vai ser atribuido na variável constante valorAposInvestimento, a operação
// do parâmetro definido 150 multiplicado por 1.1, assim o case é parado com break e sua variável passar a ser 
// retornada com o valor da operação que vai ser 165, para então ser atribuida na nossa constate fora da função 
// novoMontante a qual chamou a função com os ditos parâmetros, além de ser impresso seu valor no console. 
//   A mesma lógica acontece com a nossa segunda variável segundoMontante porém com outros parâmetros esses são para
// o switch default pois o tipo informado não existe, resultando em uma mensagem de caixa alert com a mensagem de 
// Tipo informado incorreto.

//EXERCICIO 3:
// Neste exercicio temos um código que declara variáveis constantes sendo a de nome número com com um array de 
// números, as de nome array1 e array2 vazios momentaneamente até se execute o loop for of, onde existem a condicional
// em que se a variável do numero do array de nossa const numeros dividido por 2 tiver resto zero, vai se incrementar
// pelo push o numero ao array1, ou seja todos os pares da nossa const numeros que possui um array com varios números
// que vão ser testados pela condicional um a um, pelo loop, e se não for um número com resto zero, ou seja impar vai
// incrementar o numero ao array2.
//  Fora do loop coloca para imprimir a mensagem de quantidade total de número seguida por todos os número do nosso 
// array numeros, através de length que pega toda a extensão do array, em seguida imprime todos o comprimento do
// array1(pares) e em seguida todo o comprimento do array2(impares)

//EXERCICIO 4:
// Neste código é declarada uma função constante chamada numeros onde é armazenado um array de vários números, 
// também são declaradas duas outras variáveis alteráveis (let) chamadas numero1 e numero2, onde a numero1 armazena 
// o valor de infinito e na numero2 o valor 0, para então fazer um loop com for, onde vai percorrer o array de 
// numeros verificando se é menor do que infinito, se assim ser vai definir a variável numero1 com ele, o mais proximo
//  a infinito, imprimindo no console então 1590, e no loop ainda vai percorrer o array porém verificando para 0, 
//  e  e armazena na variável numero2 sendo esse maior do que 0, imprimindo pela no console lógica o número -10.


//------------------------------------Exercícios de Lógica de Programação ----------------------------------

// 1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

// let array = ["a", "b", "c", "d", "e"]
// let item = "c"

// //primeira maneira de percorrer o array/lista por loop for of, testando percorrer e imprimir um elemento item, e lista completa
//     for (let element of array) {
//         if (element === item){
//     console.log(`primeira maneira, imprimindo somente item: ${element}`)
//         }

//   }

// //segunda maneira de percorrer todo o comprimento do array/lista por loop for, e imprimir ele
//     for (let i = 0; i < array.length; i++) {
//         console.log(`segunda: ${array[i]}`)
//     }

// //terceira maneira de percorrer o array/lista usando forEach, e imprimir ele em lista como os outros passando 1 parametro
//     array.forEach((a) => {
//         console.log(`terceira: ${a}`)
//       })



// 2. Para este exercício considere as seguintes variáveis:

//     ```jsx
//     const booleano1 = true
//     const booleano2 = false
//     const booleano3 = !booleano2 true
//     const booleano4 = !booleano3 false
//     ```

//     Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

//     a) `booleano1 && booleano2 && !booleano4`
//     Vai ser false - false = false 

//     b) `(booleano1 && booleano2) || !booleano3`
//     Vai ser false - false = false

//     c)  `(booleano2 || booleano3) && (booleano4 || booleano1)`
//     vai ser true - true = true

//     d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)`
//     vai ser true 

//     e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
//     vai ser true 


// 3. Você tem que escrever um código que, dado um número **N**, ele imprima (no `console`) os **N** primeiros números pares (por exemplo, se **N** for 3, você deve imprimir 0, 2 e 4; se **N** for 5, deve imprimir 0, 2, 4, 6 e 8).  Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:

//     ```jsx
//     const quantidadeDeNumerosPares
//     let i = 0
//     while(i <= quantidadeDeNumerosPares) {
//       console.log(i*2)
//     }
//     ```

//     Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.

//     Não funciona pois faltou ele definir o array ou valor da variavel const, sendo assim criado no loop while
//     uma condição sem fim(loop infinito), além de não possuir condição de parada que para o while deve parar
//     quando resultar em um valor false

// correção do código: 

    // const numerosPares = 5
    // let i = 0
    // while (i < numerosPares) {
    //   console.log(i * 2)
    //   i++
    // }



// 4. Vocês lembram de trigonometria? ~~(Oh, não, trigonometria)~~. Relaxem. O exercício é simples, 
// mas mexe com isso. Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos 
// como classifica-los dependendo do tamanho de seus lados. Se um triângulo possuir os **três lados iguais**, 
// ele é chamado de "Equilátero". Se possuir, **dois (e somente 2) lados iguais**, diz-se que ele é "Isósceles".
//  Se os **três lados tiverem medidas diferentes**, ele é "Escaleno". Faça uma função que receba como parâmetro 
//  os tamanhos dos três lados do triângulo: `a, b, c`  e retorne se ele é equilátero, isósceles ou escaleno.

// function tipoDoTriangulo(ladoA, ladoB, ladoC) {
//     if (ladoA === ladoB && ladoB === ladoC) {
//         return("O triângulo possui todos os lados iguais, é equilátero!!")
//     } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
//         return("O triângulo possui dois lados iguais, porém um lado dos 3 é diferente, é um isósceles!!")
//     } else {
//         return("O triângulo é escanelo!!, pois tem os três lados diferentes um do outro, não sendo nem equi.. nem iso..")
//     }
//   }
//   console.log(tipoDoTriangulo(1, 2, 1))
      
    

// 5. Faça um programa que, dados dois números,

//     i. indique qual é o maior,

//     ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e

//     iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)

// function MaiorDivisiveisDifNumeros(a,b) {
//     let maiorNumero = 0
//     let menorNumero = 0
  
//     if(a > b) {
//       maiorNumero = a 
//       menorNumero = b
//     } else {
//       maiorNumero = b
//       menorNumero = a
//     }
  
//     console.log("O maior é ", maiorNumero)
//     console.log("O menor é ", menorNumero)
  
//     if(menorNumero % maiorNumero === 0) {
//         console.log(`${menorNumero} é divisível por ${maiorNumero}`)
//     } else {
//         console.log(`${menorNumero} não é divisível por ${maiorNumero}`)
//     }
  
//     if(maiorNumero % menorNumero === 0) {
//         console.log(`${maiorNumero} é divisível por ${menorNumero}`)
//     } else {
//         console.log(`${maiorNumero} não é divisível por ${menorNumero}`)
//     }
//     console.log("A diferença entre eles é ", maiorNumero - menorNumero)

//     return
//   }

//   console.log(MaiorDivisiveisDifNumeros(20, 2))