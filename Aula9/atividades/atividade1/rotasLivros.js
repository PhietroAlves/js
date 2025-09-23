const fs = require('fs')
const express = require('express')
const router = express.Router()

const logger = (req, res, next) => {
    const data = new Date()
    console.log(`[${data.toISOString()}] - ${req.method} - ${req.url}`)
    next()
}

router.use(logger)

router.get('/', (req, res) => {
    fs.readFile('livros.json', 'utf8', (err, conteudoLivro) => {
        if (err) throw err
        const dados = JSON.parse(conteudoLivro)
        res.status(200).json(dados)
    })
})

router.options('/', (req, res) => {
    res.header('Allow', 'GET, OPTIONS')
    res.status(204).send()
})

module.exports = router