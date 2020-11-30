//QST1

a = 10
b = 10

console.log(b)  //imprime no console o valor 10

b = 5
console.log(a, b)  // imprime 10 e ao lado separado por espaço 5   (pois b foi substituido)

//QST 2

a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c) //imprime 10 10 10  (pois há uma cadeia de substituições a ser seguida por linha)

//PARTE2

//QST1
let variavelNome

let variavelIdade

console.log(typeof variavelNome)   //imprime que é undefined
console.log(typeof variavelIdade) //imprime que é undefined

//os tipos undefined são impresos pois não definimos nenhum valor para as variáveis.

variavelNome = prompt("Digite qual é seu nome?")
variavelIdade = prompt("Digite qual é sua idade?")

console.log(typeof variavelNome)   //imprime que é uma string
console.log(typeof variavelIdade) //imprime que é ums string

//Os tipos strings estão sendo impressos pois o está considerando typeof como valor string até mesmo o número

console.log( "Olá", variavelNome,",você tem", variavelIdade,"anos.")



