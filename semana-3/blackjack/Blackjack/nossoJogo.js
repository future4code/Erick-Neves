/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   alert("Bem vindo ao jogo de Blackjack!")

if(confirm("Deseja iniciar uma nova rodada?")) {
   const carta = comprarCarta()
   const pc1 = comprarCarta()
   const pc2 = comprarCarta()
   const user1 = comprarCarta()
   const user2 = comprarCarta()

   const somaPc = pc1.valor + pc2.valor
   const somaUser = user1.valor + user2.valor

   console.log("Computador:", pc1.texto, pc2.texto, "Pontuação:", somaPc)
   console.log("Usuário:", user1.texto, user2.texto, "Pontuação:", somaUser)

   if (somaUser >= 17 && somaUser <= 21 && somaPc < 17){
      alert("Usuário venceu")
   } else if (somaPc >= 17 && somaUser <= 21 && somaPc < 17){
      alert("Computador venceu")
   } else {
      alert("Empate não alcançou 21!")
   }

} else {
	console.log("Fim de jogo")
}

