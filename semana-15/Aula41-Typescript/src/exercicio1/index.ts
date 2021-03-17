//Exercicio 1

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a 
// esta variável. O que acontece?

// let minhaString: string = "letras";
// minhaString = 3
// É apontado um erro a atribuição pois a variável é do tipo string e não do tipo number: Type 'number' is not assignable to type 'string'

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. 
// Como podemos fazer para que essa variável também aceite strings?

// let meuNumero: Number = 5;
// let meuNumero2: Number | string = 5 // com a barra de separação podemos fazer aceitar strings ou outros
// meuNumero2 = "nome"

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.

// const pessoa00 = {
//     nome: "Erick",
//     idade: "25",
//     corFavorita: "azul"
// }

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
// d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um `enum` para isso.

enum corFavorita {
  vermelho = "vermelho",
  laranja = "laranja",
  amarelo = "amarelo",
  verde = "verde",
  azul = "azul",
  anil = "anil",
  violeta = "violeta",
}

type pessoaObj = {
    nome: string,
    idade: number,
    corFavorita: corFavorita,
}

const pessoa00: pessoaObj = {
    nome: "Erick",
    idade: 25,
    corFavorita: corFavorita.azul,
}

const pessoa01: pessoaObj = {
    nome: "Charles",
    idade: 25,
    corFavorita: corFavorita.verde,
}

const pessoa02: pessoaObj = {
    nome: "Cassiano",
    idade: 25,
    corFavorita: corFavorita.anil,
}



