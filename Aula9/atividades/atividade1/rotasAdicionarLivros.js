const fs = require('fs')
const express = require('express')
const router = express.Router()

const logger = (req, res, next) => {
    const data = new Date()
    console.log(`[${data.toISOString()}] - ${req.method} - ${req.url}`)
    next()
}

const autenticar = (req, res, next) => {
    // SIMULAÇÃO!!!! NUNCA usar em PRODUÇÃO!!!!!!!
    const token = req.headers['authorization']
    if (token === 'admin') {
        next()
    } else {
        res.status(401).send('Não autorizado')
    }
}

router.use(logger)

router.post('/', autenticar, (req, res) => {
    const novoLivro = {id: 4, titulo: 'Diário de um Banana', autor: 'Jeff Kinney'}
    fs.readFile('livros.json', 'utf8', (err, data) => {
        if (err) throw err
        const livrosArray = JSON.parse(data)
        livrosArray.push(novoLivro)
        fs.writeFile('livros.json', JSON.stringify(livrosArray, null, 2), err => {
            if (err) throw err
            res.status(200).send('Livro adicionado!')
        })
    })
})

router.get('/', autenticar, (req, res) => {
})

router.options('/', (req, res) => {
    res.header('Allow', 'POST, OPTIONS')
    res.status(204).send()
})

module.exports = router