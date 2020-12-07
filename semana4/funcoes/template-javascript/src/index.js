// -----------------------------------Exercicios de interpretação ----------------------------------- //

// EXERCICIO 1
// a. O que vai ser impresso no console?
// Será impresso o valor retornado da multiplicação da variavel declarada () ao chamar a função, no caso 10 e 50
// um abaixo do outro no console pois está multiplicando por 5

// b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// Não apareceria nada no console, pois não pedimos para imprimir os resultados, porém a função foi chamada 
// e executada armazenando os valores, mas não exibindo.


// EXERCICIO 2
// a. Explicite quais são as saídas impressas no console
// Será impresso no console oque a função outraFuncao definiu no loop for, para o (arrayDeNomes) definido na chamada
// ou seja o loop definiu que inicia no indice 0, com a condição de que i < 2, incrementa novamente se obedecer a condição,
// logo faz duas vezes o loop e imprime as duas primeiras strings do array: Darvas Caio, abaixo da outra

// b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
// Será impresso no console do mesmo modo os nomes Amanda Caio abaixo do outro

// EXERCICIO 3
// O código mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras 
// o que ela faz e sugira um nome melhor para ela!
// a função faz um loop for com for..of iterando os valores da propriedade array, se o valor de x dividido 
// por 2 tiver resto 0, ou seja ser é Par, vai incluir na nossa variável let arrayFinal com o push a operação 
// de multiplicação de x * x, e retornar o arrayFinal desta operação. 
// Mudar o nome de metodo para operacaoParMultiplica.

// -----------------------------------Exercicios de escrita de código ----------------------------------- //

// EXERCICIO 4
// a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você,: 

// function imprimirInfosDef() {
//     console.log("Eu sou Erick, tenho 25 anos, moro em João Pessoa e sou estudante.")
// } 

// imprimirInfosDef()

// b. (falta terminar)

// function imprimirInfosDef2(nome, idade, endereco, profissao){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
// }

// let nome = prompt("Insira seu nome")
// let idade = Number(prompt("Insira sua idade"))
// let endereco = prompt("Insira o seu endereço")
// let profissao = prompt("Insira sua profissão")

// imprimirInfosDef2()
