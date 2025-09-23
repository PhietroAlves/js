const express = require('express')
const app = express()
const port = 3000
const rotasLivros = require('./rotasLivros')
const rotasAdicionarLivros = require('./rotasAdicionarLivros')

app.use('/livros', rotasLivros)
app.use('/adicionarLivros', rotasAdicionarLivros)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})