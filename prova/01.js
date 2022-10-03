//1 - Faça uma função que mostre quantos digitos tem em um numero inserido pelo usuario

const rl = require('readline-sync')

const numero = rl.questionInt("digite um numero: ")

function quantidade_digitos(numero){
    return numero.toString().length
}

console.log(`o numero tem ${quantidade_digitos(numero)} digitos `)