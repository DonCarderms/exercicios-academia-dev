/* Crie uma função que permita contar o número de vezes que aparece uma letra em uma string.*/
function contar(letra, palavra) {
    let contador = 0
    const pl = palavra.toLowerCase()
    for (const index in pl) {
        if(letra === pl[index]){
            contador++
        }
    }
    return contador
}

console.log(contar('k', 'Kaka'))