/*
 * 8 - Crie uma função que calcule as raizes de uma função de segundo grau.
 * (formula de bhaskara)*/

function calcular_raiz(a, b, c){
  let x1 = 0, x2 = 0
  const delta = (b * b) - 4 * a * c
   if (delta === 0) {
    return 'O valor de a, deve ser diferente de 0'
   } else if(delta < 0){
     return 'Sem raízes reais'
   }else{
     x1 = (-b + delta ** (1 / 2)) / (2 * a)
     x2 = (-b - delta ** (1 / 2)) / (2 * a)
   }
    return `x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`
}

console.log(calcular_raiz(2,9,3))