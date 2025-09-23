const fs = require('fs').promises
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

fs.readFile('config.json', 'utf8')
    .then(data => {
        readline.question('Qual valor você deseja ver? ', valor => {
            dados = JSON.parse(data)
            console.log(dados[`${valor}`])
            readline.close()
        })
    })
    .catch(err => {
        console.error('Falha na pergunta: ', err)
    })