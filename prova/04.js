//4 - Escreva uma função que, substitua todas as instâncias de uma letra arbitrária dessa questão por outra letra arbitrária.

function substitua(letra){
  return  letra.replace(/u/g, 'x');
}
console.log(substitua( "qualquer frase"))