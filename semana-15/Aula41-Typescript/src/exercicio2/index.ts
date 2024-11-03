// Exercicio 2
// a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts 
// e faça a tipagem desses parâmetros

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// Entradas: array de números.  Saidas: estatisticas de maior , menor e media do array de números.

// b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas 
// const numeros: number, 
// let soma: number,
// const estatisticas = {maior: number, menor: number, media: number, };


// c. Crie um *type* para representar uma **amostra** de dados, isto é, um objeto com as chaves **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type amostraDados = {
    numeros: number[],
    obterEstatisticas: (numeros:number[]) => {}
}

const amostraDeIdades: amostraDados = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas,
};





