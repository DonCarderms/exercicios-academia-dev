/* * 3 - Faça uma função que recebe um valor inteiro e verifica se o valor é par ou ímpar.
 *      A função deve retornar um valor booleano.*/

function positivo (numero){       
    return numero % 2 === 0 ? true :false
}
const rl = require('readline-sync')
const numero = rl.questionInt('informe um numero: ')
console.log(positivo(numero))