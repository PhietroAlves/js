const fs = require('fs')

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err)
        return
    }
    console.log('Conteúdo do arquivo:', data)
})

console.log('Esta linha será executada antes da leitura do arquivo!')