/* * 14 - Escreva  uma  função  que  verifique  se  um  número  é  primo.
 *      Sua  função  deve  retornar verdadeiro ou falso.*/

function primo (numero){
    let contador = 0
    for(let index = 1; index <= numero; index++){
        if(numero % index === 0 ){
            contador++
        }
    }

    if(contador === 2){
        return true
    }

    return false
}

console.log(primo(9))