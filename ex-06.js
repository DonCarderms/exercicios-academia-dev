// /** 7 - Faça um jogo da velha em javascript no terminal*/

const rl = require('readline-sync')

let escolha = 0, jogada_pc = 0


do {//inciar partida
     escolha = rl.question(`
 Escolhe X ou n para iniciar a partida
 
 `) 

 if(escolha.toLowerCase() === "x" ){
    jogada_pc = 'n'
 }else{
    jogada_pc = 'x'
 }
} while (escolha.toLowerCase() !== 'x' && escolha !== '0');
 

 const jogo = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
 ]


 let contador = 0 

 do {
            contador++

                    let posicao_hu = rl.questionInt(` 
                        ${jogo[0][0]} (1) ${jogo[0][1]} (2) ${jogo[0][2]} (3)

                        ${jogo[1][0]} (4) ${jogo[1][1]} (5) ${jogo[1][2]} (6)

                        ${jogo[2][0]} (7) ${jogo[2][1]} (8) ${jogo[2][2]} (9)

                        Escolhe uma posiçõa vazio :_
                    `)

                    if(posicao_hu === 1){
                    jogo[0][0] = escolha 
                    }else if(posicao_hu === 2){
                        jogo[0][1] = escolha 
                    }else if(posicao_hu === 3){
                        jogo[0][2] = escolha
                    }else if(posicao_hu === 4){
                        jogo[1][0] = escolha 
                    }else if(posicao_hu === 5){
                        jogo[1][1] = escolha
                    }else if(posicao_hu === 6){
                        jogo[1][2] = escolha
                    }else if(posicao_hu === 7){
                        jogo[2][0] = escolha 
                    }else if(posicao_hu === 8){
                        jogo[2][1] = escolha
                    }else if(posicao_hu === 9){
                        jogo[2][2] = escolha
                    }


                        
                    let posicao = Math.floor(Math.random() * 9) + 1


                    while(
                        (posicao === 1 && !jogo[0][0]) || (posicao === 2 && !jogo[0][1])  || (posicao === 3 && !jogo[0][2]) || (posicao === 4 && !jogo[1][0]) || (posicao === 5 && !jogo[1][1]) 
                        || (posicao === 6 && !jogo[1][2]) || (posicao === 7 && !jogo[2][0]) || (posicao === 8 && !jogo[2][1]) || (posicao === 9 && !jogo[2][2]) 
                    ){
                        console.log(`
                        Entrou aqui 
                        ${posicao}

                        `);
                        break
                        
                    }
                    
                    if(posicao === 1 && !jogo[0][0]){
                    jogo[0][0] = jogada_pc
                    }else if(posicao === 2 && !jogo[0][1]){
                        jogo[0][1] = jogada_pc
                    }else if(posicao === 3 && !jogo[0][2]){
                        jogo[0][2] = jogada_pc
                    }else if(posicao === 4 && !jogo[1][0]){
                        jogo[1][0] = jogada_pc
                    }else if(posicao === 5 && !jogo[1][1]){
                        jogo[1][1] = jogada_pc
                    }else if(posicao === 6 && !jogo[1][2]){
                        jogo[1][2] = jogada_pc
                    }else if(posicao === 7 && !jogo[2][0]){
                        jogo[2][0] = jogada_pc
                    }else if(posicao === 8 && !jogo[2][1]){
                        jogo[2][1] = jogada_pc
                    }else if(posicao === 9 && !jogo[2][2]){
                        jogo[2][2] = jogada_pc
                    }



                    console.log(` 
                        
                        ${jogo[0][0]} (1) ${jogo[0][1]} (2) ${jogo[0][2]} (3)

                        ${jogo[1][0]} (4) ${jogo[1][1]} (5) ${jogo[1][2]} (6)
                        
                        ${jogo[2][0]} (7) ${jogo[2][1]} (8) ${jogo[2][2]} (9)
                        
                        `)
                    } while (jogo[0][0] && jogo[0][1] && jogo[0][2] && jogo[1][0] && jogo[1][1] && jogo[1][2] && jogo[2][0] && jogo[2][1] && jogo[2][2]);
    

 