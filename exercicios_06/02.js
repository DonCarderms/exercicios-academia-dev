/* 
 *  2 - Faça uma função que recebe um valor inteiro e verifica se o valor é positivo ou negativo.
 *      A função deve retornar um valor booleano.*/

function positivo (numero){       
    return numero < 0 ? false : true   
}
const rl = require('readline-sync')
const numero = rl.questionInt('informe um numero')
console.log(positivo(numero))