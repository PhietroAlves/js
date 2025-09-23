const fs = require('fs')

const novaLinha = '\nNova linha adicionada!'

fs.appendFile('arquivo.txt', novaLinha, err => {
    if (err) throw err;
    console.log('Informação Adicionada!')
})