const fs = require('fs')

fs.mkdir('novapasta', {recursive:true}, err => {
    if (err) throw err;
    console.log('Pasta criada!!')
})