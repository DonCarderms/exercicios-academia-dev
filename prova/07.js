//7 - Crie uma função que recebe uma string, e peça para o usuário quão muito eles desejam encurtar ela.
const rl = require('readline-sync')


function encurtar(palavra, quantidade_caracter){
  nova_palavra = Array.from(palavra)
   for(let index = 0; index < quantidade_caracter; index++){
       nova_palavra.pop()
   }
   return nova_palavra.toString()
}

const palavra = rl.question("informe uma palavra: ")
const quantidade_caracter = rl.questionInt("informe a quantidade de caracter que quer encutrtar: ")

console.log(encurtar(palavra, quantidade_caracter))
