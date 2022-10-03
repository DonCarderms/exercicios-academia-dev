/*dado a seguinte lista de numeros em 'numeros.json', mostre a quantidade de numeros repetidos na lista*/
const numeros = [
        6, 33, 21, 3, 24, 11, 37, 8, 6, 3, 26, 28, 20, 23, 41, 1, 13, 22, 25,
        41, 37, 19, 37, 10, 32, 45, 13, 19, 38, 14, 13, 1, 11, 35, 7, 0, 45, 2,
        43, 5, 2, 4, 45, 49, 30, 31, 8, 48, 24, 26
    ]
let x  = 0, y =0
for(let index = 0; index < numeros.length(); index++ ){
    x = 0
    for(let index2 = 0; index2 < numeros; index2++){
        if(numeros[index] === numeros[index2]){
          x++ 
        }
    }
    
    if(x > 0){
        y++
    }
}

console.log(y)