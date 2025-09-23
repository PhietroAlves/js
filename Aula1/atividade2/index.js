const fs = require('fs')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual é o nome?', nome => {
    fs.appendFile('arquivo.txt', `${nome}\n`, err => {
        if (err) throw err;
        console.log('Informação Adicionada!')
    })
    readline.close()
})