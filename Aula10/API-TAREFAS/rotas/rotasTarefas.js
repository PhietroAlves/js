const fs = require('fs')
const express = require('express')
const app = express()
const router = express.Router()
const autenticar = require('../middlewares/autenticacao')

router.get('/', autenticar, (req, res) => {
    fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
        if (err) throw err
        res.status(200).send(`Conteúdo do arquivo:\n${data}`)
    })
})

router.post('/', autenticar, (req, res) => {
    const novaTarefa = req.body
    fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
        if (err) throw err
        const conteudoAtual = JSON.parse(data)
        conteudoAtual.push(novaTarefa)
        fs.writeFile('./dados/tarefas.json', JSON.stringify(conteudoAtual, null, 2), err => {
            if (err) throw err
            res.status(200).send('Item adicionado!')
        })
    })
})

router.put('/', autenticar, (req, res) => {

})

router.delete('/', autenticar, (req, res) => {
    const objetoEncontrar = req.body
    fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
        if (err) throw err
        const array = JSON.parse(data)
            if (err) throw err
            const novoArquivo = array.map(linha => {
                if (linha != objetoEncontrar) {
                    const [id, descricao, status] = [linha.id, linha.descricao, linha.status]
                    return { id, descricao, status }
                }
                fs.writeFile('./dados/tarefas.json', JSON.stringify(novoArquivo, null, 2))
            })
    })
})

router.options('/visualizar', (req, res) => {
    res.header('Allow', 'GET, OPTIONS')
    res.status(204).send()
})

router.options('/criar', (req, res) => {
    res.header('Allow', 'POST, OPTIONS')
    res.status(204).send()
})

router.options('/atualizar', (req, res) => {
    res.header('Allow', 'POST, OPTIONS')
    res.status(204).send()
})

router.options('/deletar', (req, res) => {
    res.header('Allow', 'POST, OPTIONS')
    res.status(204).send()
})

module.exports = router