const fs = require('fs').promises

fs.readFile('produtos.csv', 'utf-8')
    .then(data => {
        const linhas = data.split('\r\n')
        const produtos = linhas.map(linha => {
            const [id, nome, preco, estoque] = linha.split(',')
            return { id, nome, preco, estoque }
        })
        return fs.writeFile('arquivo.json', JSON.stringify(produtos, null, 2))
    })
    .then(() =>
        console.log('Arquivo JSON criado com sucesso!')
    )
    .catch(error =>
        console.error('Erro ao ler ou escrever o arquivo:', error)
    )