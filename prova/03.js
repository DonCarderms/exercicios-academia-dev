//3 - Dado a lista de objetos em 'listaObjetos.json', crie uma função que receba uma lista e um intervalo de valores, 
//e que então devolva uma nova lista composta apenas dos objetos cujo Valor esteja dentro do intervalor fornecido:
const rl = require('readline-sync')
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
    

    function retornaNovaLista(objetos){
            const intervalo = rl.questionInt("informe um intervalo: ")
            let y = 0
            let nova_lista = []
            for(let index in objetos){
               posicao = objetos[index]
               if(posicao.valor <= intervalo){
                  y++  
                  nova_lista[y] = posicao
               }
            }
            return nova_lista
    }
   

   console.log(retornaNovaLista(objetos))