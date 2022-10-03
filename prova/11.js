//11 - Escreva um algoritmo que simule um caixa eletronico
 const rl = require('readline-sync')
let saldo = 0

function adicionarSaldo(valor){
    saldo += valor
}
function sacar(valor){
    if(saldo < valor ){
        return 'voçê não tem saldo suficiente'
    }else if(saldo === 0){
        return 'sua conta está zerada '
    }else{
        saldo -= valor
    }
}

function consultaSaldo(){
   console.log(`saldo da conta: ${saldo}`) 
}

let valor_de_entrada = 0

do {
    entrada = rl.questionInt(`
    Escolhe uma opção:
    1- adicionar saldo
    2- sacar
    3- consultar saldo 
    
    digite 0 para sair
         
        `)

    if(entrada === 1){
         valor_de_entrada = rl.questionFloat("informe o valor: ")
         adicionarSaldo(valor_de_entrada)
    }else if(entrada === 2){
        valor_de_entrada = rl.questionFloat("informe o valor: ")
         sacar(valor_de_entrada)
    }else if(entrada === 3){
        consultaSaldo()
    }else{
    console.log('entrada invalída')
    }
} while (entrada !== 0)