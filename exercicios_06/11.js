/* 11 - Crie uma função de conversão de temperaturas, a função deve receber um parametro 
 *  que indique quando é de  Celsius para Farenheit ou  Farenheit para Celsius*/

function conversão (indique, valor){
    if(indique === 0){
        return ((valor * 9/5) + 32).toFixed(1)

    }else if(indique === 1){  
        return ((valor - 32) * 5/9).toFixed(2)
    }else{
        return 'opção inválida'
    }
}
const rl = require('readline-sync')
const indique = rl.questionInt('digitar 0 se é de  Celsius para Farenheit ou 1 Farenheit para Celsius: ')
const  valor = rl.questionInt('informe o valor: ')

console.log(conversão(indique, valor))
