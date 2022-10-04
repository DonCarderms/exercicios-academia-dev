/*14 -  Faça um algoritmo para ler 10 números e armazenar em um vetor. Após isto, o algoritmo deve
ordenar os números no vetor em ordem crescente. Escrever o vetor ordenado. */

const rl = require('readline-sync')
 let vetor = []
let x = 0, y = 0
do {    
    vetor[x] = rl.questionInt(`digite o ${x + 1}° numero`) 
    x++
} while(vetor.length < 10);


console.log(vetor.sort(function(a, b){return a - b}))
