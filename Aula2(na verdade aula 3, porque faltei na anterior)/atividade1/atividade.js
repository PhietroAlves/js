const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Digite o nome de um arquivo de origem: ', arquivoOrigem => {
    fs.readFile(`${arquivoOrigem}.txt`, 'utf8', (err, data) => {
        if (err) throw err
        readline.question('Digite o nome de um arquivo de destino: ', arquivoDestino => {
            fs.appendFile(`${arquivoDestino}.txt`, data, err => {
                if (err) throw err
                console.log('Cópia bem sucedida!')
            })
            readline.close()
        })
    })
})