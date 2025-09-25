const fs = require('fs')
const express = require('express')
const app = express()
const router = express.Router()
const autenticar = require('../middlewares/autenticacao')

router.get('/', autenticar, (req, res) => {
    fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
        if (err) throw err
        res.status(200).send(`Conteúdo do arquivo:\n${data}`)
    })
})

router.post('/', autenticar, (req, res) => {
    const novaTarefa = req.body
    fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
        if (err) throw err
        const conteudoAtual = JSON.parse(data)
        conteudoAtual.push(novaTarefa)
        fs.writeFile('./dados/tarefas.json', JSON.stringify(conteudoAtual, null, 2), (err) => {
            if (err) throw err
            res.status(200).send('Tarefa adicionada!')
        })
    })
})

router.put('/:id', autenticar, (req, res) => {
    const id = req.params.id
    const novoConteudo = req.body
    fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
        if (err) throw err
        const arrayTarefas = JSON.parse(data)
        const index = arrayTarefas.findIndex(tarefa => tarefa.id === id)
        if (index === -1) return res.status(204).send('Erro ao tentar encontrar o index.')
        arrayTarefas[index] = {id, ...novoConteudo}
        fs.writeFile('./dados/tarefas.json', JSON.stringify(arrayTarefas, null, 2), (err) => {
            if (err) throw err
            res.status(200).send('Tarefa atualizada!')
        })
    })
})

router.delete('/:id', autenticar, (req, res) => {
    const id = req.params.id
    fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
        if (err) throw err
        const arrayTarefas = JSON.parse(data)
        const index = arrayTarefas.findIndex(tarefa => tarefa.id === id)
        if (index === -1) return res.status(404).send('Erro ao tentar encontrar o index.')
        arrayTarefas.splice(index, 1)
        fs.writeFile('./dados/tarefas.json', JSON.stringify(arrayTarefas, null, 2), err => {
            if (err) throw err
            res.status(200).send('Tarefa deletada!')
        })
    })
})

router.options('/', (req, res) => {
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS')
    res.status(204).send()
})

module.exports = router