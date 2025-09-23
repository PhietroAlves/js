const fs = require('fs')

fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo: ', err)
        return
    }
    try {
        const dados = JSON.parse(data)
        console.log('Dados lidos do arquivo: ', dados)
    } catch(error) {
        console.error('Erro ao converter para JSON: ',error)
    }
})