const express = require('express')
const app = express()
const port = 3000
const rotasTarefas = require('./rotas/rotasTarefas')
const logger = require('./middlewares/logger')

app.use(express.json())
app.use(logger)
app.use('/tarefas', rotasTarefas)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})