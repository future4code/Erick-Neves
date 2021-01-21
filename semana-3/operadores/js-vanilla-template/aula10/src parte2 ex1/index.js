//1. Faça um programa que:
//a. Pergunte a idade do usuário
//b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga
//
//    Dica: não se esqueça de converter as respostas para o tipo número
//
//    c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
//    d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo)



let idade = prompt("Qual é sua idade?")
let idadeMelhorAmg = prompt("Qual é a idade do seu melhor amigo?")
Number(idade, idadeMelhorAmg)

    console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeMelhorAmg)
    console.log("A diferença de idade entre vocês é", idade % idadeMelhorAmg)