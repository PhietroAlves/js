const express = require('express')
const app = express()
const port = 3000

const logger = (req, res, next) => {
    const data = new Date()
    console.log(`[${data.toISOString()}] - ${req.method} - ${req.url}`)
    next()
}

const autenticar = (req, res, next) => {
    // SIMULAÇÃO!!!! NUNCA usar em PRODUÇÃO!!!!!!!
    const token = req.headers['authorization']
    if (token === 'SEGREDO') {
        next()
    } else {
        res.status(401).send('Não autorizado')
    }
}

app.use(logger)

app.get('/', (req, res) => {
    res.status(200).send('Página inicial do servidor web com Middlewares.')
})

app.get('/admin', autenticar, (req, res) => {
    res.status(200).send('Painel de Administração\nUsuário autorizado')
})

app.get('/recurso', (req, res) => {
    res.status(200).send('Lista de um recurso qualquer.')
})

app.get('/recurso/:id', (req, res) => {
    const id = req.params.id
    res.status(200).send(`Detalhes do recurso com ID: ${id}`)
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})