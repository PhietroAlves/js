const fs = require('fs').promises

fs.readFile('arquivo.txt', 'utf8')
    .then(data => {
        console.log('Conteúdo do arquivo: ', data)
        return data.toLowerCase()
        console.log('Não será exibido pois está depois do RETURN')
    })
    .then(dataMinusculas => {
        console.log('Conteúdo em minúsculas:', dataMinusculas)
    })
    .catch(err => {
        console.error('Erro: ', err)
    })