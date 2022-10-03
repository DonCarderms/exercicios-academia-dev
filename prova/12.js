
const fs = require('fs');
const data = fs.readFileSync('./pessoas.json',
			{encoding:'utf8', flag:'r'});
const pessoas = JSON.parse(data)

for(let index = 0; index < 90; index++){
    console.log(pessoas.pessoas[index].nome)
}

