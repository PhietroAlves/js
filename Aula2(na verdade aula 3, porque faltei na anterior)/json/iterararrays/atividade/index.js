const fs = require('fs')

fs.readFile('dados.json', 'utf8', (err, data) => {
    try {
        const dados = JSON.parse(data)
        try {
            dados.dados.produtos.forEach(produto => {
            console.log(`Nome: ${produto.nome}\nPreço: ${produto.preço}\nDescrição: ${produto.descrição}\nCategoria: ${produto.categoria}\n----------------------`)
        })
        } catch (error) {
            console.error("Houve um erro ao tentar mostrar as informações.")
        }
    } catch (error) {
        console.error("Houve um erro ao transformar o arquivo.")
    }
})