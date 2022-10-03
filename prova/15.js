/*15 - Faça uma função que cheque se uma palavra é um palindromo*/

function verifica(palavra){
  palavra.toString()
  const nova_plavra =  Array.from(palavra)
  const palavra_inverso = Array.from(palavra).reverse()
  return palavra_inverso.toString().toLowerCase() === nova_plavra.toString().toLowerCase() ? true : false
 
}

console.log(verifica('Renner'))