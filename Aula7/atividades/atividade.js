const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Página inicial do meu WEB SERVER')
})

app.get('/arquivo', (req, res) => {
    fs.readFile('arquivo.json', 'utf8', (err, data) => {
        if (err) throw err
        console.log('Arquivo lido.')
        const dataArray = JSON.parse(data)
        res.send(dataArray)
    })
})

app.get('/arquivo/:idBuscar', (req, res) => {
    const idBuscar = req.params.idBuscar
    fs.readFile('arquivo.json', 'utf8', (err, data2) => {
        if (err) throw err
        const dataArray2 = JSON.parse(data2)
        const usuarioEncontrado = dataArray2.find(function (usuario) {
            return usuario.id === idBuscar
        })
        res.send(usuarioEncontrado)
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})