 //Crie uma função para sortear numeros da mega-sena

 function megaSena(quantidade) {
    let mega = []
    for(let index = 0; index < quantidade; index++){
         mega[index] = Math.floor(Math.random() * 100) + 1        
    } 
    console.log(` os numeros sorteados são: ${mega.toString()}`)
 }
const rl = require('readline-sync')
const quantidade = rl.questionInt('informe a quantidade de numeros: ')
megaSena(quantidade)