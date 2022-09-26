/* * 13 - Escreva  uma função  que  receba  como parâmetro  dois números inteiros e
 *    retorne -1 se o primeiro for menor que o segundo número, 0 se forem iguais 
 *    ou 1 se o primeiro for maior que o segundo número.*/

function numero (num1, num2){
    if (num1 < num2) {
        return -1
    }else if(num1 === num2) {
        return 0
     }else{
        return 1
     }
        
}

console.log(numero(2, 1))
