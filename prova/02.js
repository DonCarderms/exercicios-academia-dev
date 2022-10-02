//2 - Dado uma lista preenchida com uma sequencia de 0 até 1000, separe os valores impares e pares em duas listas.

let lista = []

for(let index = 0;  index <= 1000; index++){
    lista[index] = index
}

let pares = [], impares = []
let x = 0, y = 0

for(let index in lista){
    if (index % 2 == 0) {
        x++
        pares[x] = index
    }else{
        y++
        impares[y] = index
    }
}
console.log(lista)
// 
 console.log(`
 os numeros pares da lista são ${pares.toString()}

 e os numeros impares da lista são ${impares.toString()}
 `)
