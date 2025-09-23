const fs = require('fs')

const dados = {
    nome: 'Rodrigo',
    idade: 39,
    cidade: 'São Caetano do Sul'
}

try {
    const dados2 = JSON.stringify(dados, null, 2)
    fs.writeFile('dados2.json', dados2, 'utf8', err => {
        if (err) {
            console.error('Erro ao transferir os dados: ', err)
            return
        }
        console.log('Dados transferidos: ', dados2)
    })
} catch (error) {
    console.error('Erro na conversão para string: ', error)
}