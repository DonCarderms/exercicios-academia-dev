/**
 *  1 - Faça uma função que recebe a idade de uma pessoa em anos,
 *      meses e dias e retorna essa idade expressa em dias.
 * 2003/11/26
 *  */


const rl = require('readline-sync')

function idade (anos, meses, dias){
    
   const idade_em_anos = anos * 365
   const  idade_em_meses = meses * 30 
   const idade_em_dias = idade_em_anos + idade_em_meses + dias  
     
   return idade_em_dias
}

console.log('informe a sua idade em anos, meses e dias: ')
const anos = rl.questionInt('anos :_ ')
const meses = rl.questionInt('meses :_ ')
const dias = rl.questionInt('dias :_ ')


console.log(idade(anos, meses, dias))
