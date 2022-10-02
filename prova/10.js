//10 - Escreva uma função que recebe um número N e então devolve a sequência de fibonacci até N sequêncial.
const rl = require('readline-sync')

function fibonaci(numero, limite){

    for (let i = numero; i < limite; i++) {
       return ( (numero - 1) + (numero - 2))
    }
}
let numero = rl.questionInt('informe um numero: ')
const limite = rl.questionInt('informe um limite: ')
console.log(fibonaci(numero, limite))