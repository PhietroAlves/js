const fs = require('fs').promises

fs.readFile('arquivo.txt', 'utf8')
    .then(data => {
        console.log('Conteúdo do arquivo: ', data)
        return data.toUpperCase()
        console.log('Não será exibido pois está depois do RETURN')
    })
    .then(dataMaiusculas => {
        console.log('Conteúdo em maiúsculas:', dataMaiusculas)
    })
    .catch(err => {
        console.error('Erro: ', err)
    })