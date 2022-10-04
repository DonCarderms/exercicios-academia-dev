//5 - Colete a soma dos valores pares e impares, cada um em sua própria variável, dos itens da questão 3.
 const objetos = 
    [
        { "id": 0, "valor": 6 },
        { "id": 1, "valor": 7 },
        { "id": 2, "valor": 54 },
        { "id": 3, "valor": 9 },
        { "id": 4, "valor": 8 },
        { "id": 5, "valor": 7 },
        { "id": 6, "valor": 2 },
        { "id": 7, "valor": 4 },
        { "id": 8, "valor": 1 },
        { "id": 9, "valor": 20 },
        { "id": 10, "valor": 2 },
        { "id": 11, "valor": 34 },
        { "id": 12, "valor": 18 },
        { "id": 13, "valor": 4 },
        { "id": 14, "valor": 6 },
        { "id": 15, "valor": 9 },
        { "id": 16, "valor": 7 },
        { "id": 17, "valor": 14 },
        { "id": 18, "valor": 7 },
        { "id": 19, "valor": 8 },
        { "id": 20, "valor": 14 },
        { "id": 21, "valor": 1 },
        { "id": 22, "valor": 4 },
        { "id": 23, "valor": 7 },
        { "id": 24, "valor": 3 },
        { "id": 25, "valor": 39 },
        { "id": 26, "valor": 7 },
        { "id": 27, "valor": 9 },
        { "id": 28, "valor": 22 },
        { "id": 29, "valor": 9 }
    ]
    

    function somaParesEimpares(objetos){
           
            let somaPares = 0, somaImpares = 0
            for(let index in objetos){
               posicao = objetos[index]
               if(posicao.valor % 2 === 0){
                  somaPares += posicao.valor
               }else {
                somaImpares += posicao.valor
               }
            }
            
           return `
                 A soma dos pares: ${somaPares}
                 A soma dos impares: ${somaImpares}
                 `
           
    }
   
    console.log(somaParesEimpares(objetos))