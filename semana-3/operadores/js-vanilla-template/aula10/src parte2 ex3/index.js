//3. Faça um programa, seguindo os passos:
//a. Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
//b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
//c. Imprima o array na tela
//d. Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
//e. Remova da lista o item de índice que o usuário escolheu.
//f. Imprima o array na tela

let listaDeTarefas = []

listaDeTarefas.push(prompt("Qual a sua primeira tarefa do dia?"))
listaDeTarefas.push(prompt("Qual a sua segunda tarefa do dia?"))
listaDeTarefas.push(prompt("Qual a sua terceira tarefa do dia?"))

console.log(listaDeTarefas)

let indiceDaTarefa = prompt("Digite o índece de uma tarefa já realizada começando por 0, 1 ou 2:")

let indiceDaTarefaNumero = Number(indiceDaTarefa)
listaDeTarefas.splice(indiceDaTarefaNumero, 1)

console.log(listaDeTarefas)