const express = require('express')
const app = express()
const port = 3000
const rotasUsuarios = require('./rotasUsuarios')
const rotasProdutos = require('./rotasProdutos')

app.use('/usuarios', rotasUsuarios)
app.use('/produtos', rotasProdutos)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})