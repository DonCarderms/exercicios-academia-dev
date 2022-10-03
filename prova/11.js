/*
11 - Escreva um algoritmo que simule um caixa eletronico
*/

const rl = require('readline-sync')
let saldo = 0

function adicionarSaldo(valor){
    saldo += valor
}
function sacar(valor){
     let céd100, céd50, céd10, céd5, céd1
    if(saldo < valor ){
        console.log('Voçê não possui saldo suficiente para esta operação.') 
    }else if(saldo === 0){
        console.log('Saldo zerado. ') 
    }else{
        saldo -= valor
       
            céd100 = valor / 100
            céd50 = valor % 100 / 50
            céd10 = valor % 50 / 10
            céd5  = valor % 10 / 5
            céd1 = valor % 5 / 1

            console.log(
            `
            Está disponivel para sacar :   
            ${Math.floor(céd100)} nota(s) de 100 reias
            ${Math.floor(céd50)}  nota(s) de 50 reias
            ${Math.floor(céd10)}  nota(s) de 10 reias
            ${Math.floor(céd5)}   nota(s) de 5 reias
            ${Math.floor(céd1)}   nota(s) de 1 real
            `)

    }
}

function consultaSaldo(){
   console.log(`Saldo da conta: ${saldo}`) 
}

let valor_opcao = 0

do {
    opcao = rl.questionInt(`

    Escolhe uma opção:

    1- Depositar valor
    2- Sacar valor
    3- Consultar saldo disponível
    
    digite 0 para sair
         
        `)

    if(opcao === 1){
         valor_opcao = rl.questionFloat("informe o valor: ")
         adicionarSaldo(valor_opcao)
    }else if(opcao === 2){
        valor_opcao = rl.questionFloat("informe o valor: ")
         sacar(valor_opcao)
    }else if(opcao === 3){
        consultaSaldo()
    }else  if(
        opcao !== 1 &&
        opcao !== 2 &&
        opcao !== 3 &&
        opcao !== 0 )
        {
    console.log('opcao invalída')
    }
} while (opcao !== 0)