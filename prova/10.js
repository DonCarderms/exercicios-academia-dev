//10 - Escreva uma função que recebe um número N e então devolve a sequência de fibonacci até N sequêncial.
const rl = require('readline-sync')

function fibonaci(numero, limite){
    let x = 0, y = 0
    for(let index = numero; index <= limite; index++){
        x++
        if(numero >= limite){
            
        }
        if(x === 1){
            y  = numero
            y += numero
        }
         console.log(y + '   ' + x) 
           y += (y + 1)
                
    }
}
let numero = rl.questionInt('informe um numero: ')
const limite = rl.questionInt('informe um limite: ')
console.log(fibonaci(numero, limite))