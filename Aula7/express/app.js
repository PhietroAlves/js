const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('Página inicial do meu primeiro WEB SERVER')
})

app.get('/usuarios', (req, res)=>{
    res.send('Lista de usuários.')
})

app.get('/usuarios/:id', (req, res)=>{
    const id = req.params.id
    res.send(`Detalhes do usuário com o ID: ${id}`)
})

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})