/*
PARTIDAS RANKEADAS SÃO PARTIDAS QUE CONTAM PONTUAÇÕES E DE ACORDO COM ESTATÍTISCAS DA INFORMÇAÇÃO DO JOGADOR, O JOGADOR SERÁ COLOCADO NUMA DETERMINADA POSIÇÃO DO RANKING

** O QUE DEVE SER UTILIZADO

VARIÁVEIS
OPERADORES
LAÇOS DE REPETIÇÃO
ESTRUTURAS DE DECISÕES
FUNÇÕES


** OBJETIVO

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador.
Depois disso, retorne o resultado para uma variável, 
o saldo de RANKEADOS deve ser feito através do cálulo (vitórias - derrotas)


** Saída
Ao final deve-se exibir uma mensagem:

"O Herói tem saldo de **{saldoVitorias}**" está no nível de **{nivel}**

*/

//NO MEU ALGORITMO DEFINO QUE QUANDO UM JOGADOR VENCE UMA PARTIDA, ELE GANHA 10 PONTOS. CONSEQUENTEMENTE, CADA PARTIDA PERDIDA OCASIONA UMA PERDA DE 10 PONTOS




//let Player1 = MAYDSON 





rank()


function rank(vitorias=11, derrotas = 20){
    let totalPartidas = 5
    let contador = 0
    let player1_result
    for(contador; contador < totalPartidas; contador++){
        if (vitorias < 10){
            player1_result = "Ferro"
        }else if(vitorias >= 10 && vitorias <= 20){
            player1_result = "Bronze"    
        }else if(vitorias >= 21 && vitorias <= 50){
            player1_result = "Prata"    
        }else if(vitorias >= 51 && vitorias <= 80){
            player1_result = "Ouro"    
        }else if(vitorias >= 81 && vitorias <= 90){
            player1_result = "Diamante"    
        }else if(vitorias >= 91 && vitorias <= 100){
            player1_result = "Lendário"    
        }else if(vitorias >= 101){
            player1_result = "Imortal"    
        }else{
            console.log("Jogador não pode ser rankeado")
        }
        var saldo = vitorias - derrotas
        if(saldo < 0 ){
           saldo = -(saldo)
           console.log("Na " +(contador+1)+ "ª partida o herói obteve um saldo de " +saldo+ " scores. Ele está no nível de "+ player1_result)
        }else{
           console.log("Na " +(contador+1)+ "ª partida o herói obteve um saldo de " +saldo+ " scores. Ele está no nível de "+ player1_result)
        }
        vitorias=vitorias + vitorias^2
        derrotas+=15
    }
    
}
