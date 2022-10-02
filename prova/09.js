//9 - Usando loops, peça do usuário uma lista de compras contendo nome do produto e valor e no final apresente a lista e o total dos itens.
 const rl = require('readline-sync')
let x = 0
let lista = []
do {
  x++ 
  produto = rl.question(`informe o nome do ${x}° produto: `)
  valor = rl.questionFloat(`informe o valor do ${x}° produto: `)  
  lista[x-1] = `${produto} ${valor}`
  entrada = rl.question ('digite 0 para finalizar ou qualquer tecla para continaur: ') 
} while (entrada != 0)

console.log('----------------------------------------------------')
for(let index in lista){
    console.log(lista[index])
}
console.log('----------------------------------------------------')
console.log(`total dos itens: ${x} `)