const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual valor você deseja ver? ', (err, valor) => {
    try {
        fs.readFile('config.json', 'utf8', (err, data) => {
            if (err) throw err
            dados = JSON.parse(data)
            console.log(dados[`${valor}`])
            readline.close()
        })
    } catch (error) {
        console.error('Falha na leitura do arquivo: ', error)
    }
})
if (err) throw err