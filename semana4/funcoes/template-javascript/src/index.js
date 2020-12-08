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
// ex:
// ```
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// ```
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprimir essa mensagem.

// Solução:

// function imprimirInfosDef() {
//     console.log("Eu sou Erick, tenho 25 anos, moro em João Pessoa e sou estudante.")
// } 

// imprimirInfosDef()


// ou 

// const nome = 'Erick'
// const idade = '25'
// const endereco = 'João Pessoa'
// const souEstudante = 'sou estudante'

// function imprimirInfosDef(){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${souEstudante}.`)
// }

// imprimirInfosDef()



// b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

// ```
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.
// ```
// - Exemplo

//     Para a entrada:  `"Goli"`, `23`, `"São Paulo"` e `true`, deve retornar:

//     `"Eu sou Goli, tenho 23 anos, moro em Rua Guarapari 190 e sou estudante."`

// Solução:

// function imprimirInfosDef2(){
//     if(souEstudante === true){
//         souEstudante = 'sou estudante'
//     } else {
//         souEstudante = 'não sou estudante'
//     }
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${souEstudante}.`)
// }

// imprimirInfosDef2(nome = prompt("Insira seu nome"), idade = Number(prompt("Insira sua idade")), 
// endereco = prompt("Insira o seu endereço"), souEstudante = prompt("Você é estudante? Digite true ou false")) 

// Ou a maneira mais correta para a questão:


// function imprimirInfosDef2(nome, idade, endereco, souEstudante){
//     if(souEstudante){
//         souEstudante = 'sou estudante'
//     } else {
//         souEstudante = 'não sou estudante'
//     }
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${souEstudante}.`
// }

// console.log(imprimirInfosDef2('Erick', 25, 'João Pessoa', true))



// EXERCICIO 5

// a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// Solução:

// function somaNum (num1, num2){
//     return num1 + num2
// }

// console.log('A soma é:', somaNum(4,9))


// b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
// Solução:

// function comparaMaiorNum (num1, num2){
//     return num1 > num2
// }

// console.log('O primeiro será o maior:', comparaMaiorNum(4,9))

// c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso)
// Solução:
   
// function imprime10Msn (mensagem) {
//     for (i=0; i<10; i++) {
//         console.log(mensagem)
//     }
// }

// imprime10Msn ('Vai imprimir esta mensagem 10x')
    

// EXERCICIO 6
// Para os itens a seguir, considere o seguinte array para os seus testes:
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele
// Solução:

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


// function quantidadeTamanElem (elementosPcontar) {
//     return elementosPcontar.length
// }

// console.log('Quantidade de elementos do array:', quantidadeTamanElem(array))


// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
// Solução:

function verificaParidade(numero) {
    return numero % 2 === 0;
}

console.log('O número é par:', verificaParidade(6))



// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele
// Solução:
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function calculaNumPares(elementosPcontarPar){
    let numerosPares = []
    for(const numero of elementosPcontarPar){
        if(numero % 2 === 0){
            numerosPares.push(numero)
        }
    }   
    return numerosPares.length  
}
console.log('Quantidade de números pares será', calculaNumPares(array))
    


// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par
// Solução:

function calculaNumPares(elementosPcontarPar){
    let numerosPares = []
    for(const numero of elementosPcontarPar){
        if(verificaParidade(numero)){
            numerosPares.push(numero)
        }
    }   
    return numerosPares.length  
}
console.log('Utilizando a função de Par da B, quantidade de números pares será', calculaNumPares(array))