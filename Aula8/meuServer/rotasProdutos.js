const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const id = req.params.id
    res.status(200).send(`Detalhes do produto com o Id: ${id}`)
})

router.options('/', (req, res) => {
    res.header('Allow', 'GET, OPTIONS')
    res.status(204).send()
})

router.options('/:id', (req, res) => {
    res.header('Allow', 'GET, OPTIONS')
    res.status(204).send()
})

module.exports = router