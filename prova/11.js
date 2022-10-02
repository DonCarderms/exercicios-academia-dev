//11 - Escreva um algoritmo que simule um caixa eletronico
 const rl = require('readline-sync')
let saldo = 0

function adicionarSaldo(valor){
    saldo += valor
}
function sacar(valor){
     let nota100, nota50, nota10, nota5, nota1
    if(saldo < valor ){
        console.log('voçê não tem saldo suficiente') 
    }else if(saldo === 0){
        console.log('sua conta está zerada ') 
    }else{
        saldo -= valor
       
            nota100 = valor / 100
            nota50 = valor % 100 / 50
            nota10 = valor % 50 / 10
            nota5  = valor % 10 / 5
            nota1 = valor % 5 / 1

            console.log(
            `
            Está disponivel para sacar :   
            ${Math.floor(nota100)} nota(s) de 100 reias
            ${Math.floor(nota50)}  nota(s) de 50 reias
            ${Math.floor(nota10)}  nota(s) de 10 reias
            ${Math.floor(nota5)}   nota(s) de 5 reias
            ${Math.floor(nota1)}   nota(s) de 1 real
            `)

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
    }else  if(
        entrada !== 1 &&
        entrada !== 2 &&
        entrada !== 3 &&
        entrada !== 0 )
        {
    console.log('entrada invalída')
    }
} while (entrada !== 0)


