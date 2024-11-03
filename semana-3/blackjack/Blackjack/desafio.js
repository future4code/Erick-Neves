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

const mensagem = console.log("Bem vindo ao jogo de Blackjack!")

let jogo = confirm("Deseja iniciar uma nova rodada?")

if(jogo) {
      let cartaPc = [comprarCarta(), comprarCarta()]
      let cartaUser = [comprarCarta(), comprarCarta()]
    

      if(cartaUser[0].texto === 'A' && cartaUser[1].texto === 'A'){
         cartaUser = [comprarCarta(), comprarCarta()]
         
      } else if(cartaPc[0].texto === 'A' && cartaPc[1].texto === 'A'){
         cartaPc = [comprarCarta(), comprarCarta()]
      }


      let resulSomaPc = cartaPc[0].valor + cartaPc[1].valor
      let resulSomaUser = cartaUser[0].valor + cartaUser[1].valor

      mensagem1 = ("Usuário:", cartaUser[0].texto, cartaUser[1].texto)
      console.log("Carta revelada do computador:", cartaPc[0].texto, "Deseja comprar mais cartas?")

      i=2
      while(confirm(mensagem1) === true && (resulSomaUser <=21)) {
         
         cartaUser[i] =  comprarCarta()
         resulSomaUser += cartaUser[i].valor
         mensagem1[0] += ' ' + cartaUser[i].texto
         i++
      }

      while(resulSomaPc) {
         if (resulSomaPc < resulSomaUser) {
            i=2
            cartaPc[i] = comprarCarta()
            resulSomaPc += cartaPc[i].valor
            mensagem1[1] += ' ' + cartaPc[i].texto
            console.log(cartaPc[i].valor)
            i++
         } else if (resulSomaPc >= resulSomaUser) {
            break;
         }
      }


      if (resulSomaPc > 21 && resulSomaUser <= 21) {
         console.log("Usuário venceu!")
      } else if (resulSomaPc > resulSomaUser && resulSomaPc < 21) {
         console.log("Computador venceu!")
      } else if (resulSomaUser === resulSomaPc) {
         console.log("Empate!")
      } else if (resulSomaUser > 21 && resulSomaPc > 21) {
         console.log("Empate! Ambos ultrapassaram 21, tente novamente.")
      } else if (resulSomaUser > 21) {
         console.log("Você perdeu! Ultrapassou 21, tente novamente.")
      } else if (resulSomaPc > 21) {
         console.log("Computador perdeu! Ultrapassou 21, jogue novamente ;)")
      } 



      arrayPc = ""
      for(elemento of cartaPc) {
         arrayPc += (elemento.texto)
      }

      console.log(mensagem1[0], "pontuação do usuário é", resulSomaUser, '\n', "As cartas do pc foram:", arrayPc, "total:", resulSomaPc)
      

} else {
	console.log("Fim de jogo!")
}
