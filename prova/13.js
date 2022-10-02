/*dado a seguinte lista de numeros em 'numeros.json', mostre a quantidade de numeros repetidos na lista*/
const numeros = [
        6, 33, 21, 3, 24, 11, 37, 8, 6, 3, 26, 28, 20, 23, 41, 1, 13, 22, 25,
        41, 37, 19, 37, 10, 32, 45, 13, 19, 38, 14, 13, 1, 11, 35, 7, 0, 45, 2,
        43, 5, 2, 4, 45, 49, 30, 31, 8, 48, 24, 26
    ]


let x  = 0, y =0
    
numeros.sort();

let current = null;
let cnt = 0;
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] != current) {
        if (cnt > 0) {
           console.log()
        }
        current = numeros[i];
        cnt = 1;
    } else {
        cnt++;
    }
}

 console.log(cnt)