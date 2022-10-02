//Remova desta questão tudo o que não é consoante.
let x = 0, y =0 
let palavra2 = []
palavra  = 'Remova desta questao tudo o que nao é consoante.'

nova_palavra  = Array.from(palavra)
for(let index in nova_palavra){
    console.log(nova_palavra[index])
    if(nova_palavra[index] === 'a' || 
       nova_palavra[index] === 'e' || 
       nova_palavra[index] === 'i' || 
       nova_palavra[index] === 'o' || 
       nova_palavra[index] === 'u' || 
       nova_palavra[index] === 'A' || 
       nova_palavra[index] === 'E' || 
       nova_palavra[index] === 'I' || 
       nova_palavra[index] === 'O' || 
       nova_palavra[index] === 'U' ||
       nova_palavra[index] === 'é' ||  
       nova_palavra[index] === 'É'      
       ){
        x++
        nova_palavra[index] = 0
    }
}

for(let index in nova_palavra){
    if(nova_palavra[index] !== 0){
        y++
        palavra2[y] = nova_palavra[index]
    }
}

console.log(palavra2.toString())