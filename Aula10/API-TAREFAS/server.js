const express = require('express')
const app = express()
const port = 3000
const rotasTarefas = require('./rotas/rotasTarefas')

app.use(express.json())

app.use('/tarefas', rotasTarefas)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})