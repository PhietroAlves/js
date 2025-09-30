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
    if (JSON.stringify(novaTarefa) == '{}') {
        res.status(400).send('A tarefa não pode estar vazia.')
    } else {
        if ((novaTarefa.descricao).length < 5) {
            res.status(400).send('A tarefa deve possuir no mínimo 5 caracteres.')
        } else {
            if (novaTarefa.status != 'Concluida' || novaTarefa.status != 'Pendente') novaTarefa.status = 'Pendente'
            fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
                if (err) throw err
                const conteudoAtual = JSON.parse(data)
                conteudoAtual.push(novaTarefa)
                fs.writeFile('./dados/tarefas.json', JSON.stringify(conteudoAtual, null, 2), (err) => {
                    if (err) throw err
                    res.status(200).json('Tarefa adicionada!')
                })
            })
        }
    }

})

router.put('/:id', autenticar, (req, res) => {
    // Entrada
    const id = parseInt(req.params.id)
    const tarefaAlteracao = req.body

    if (JSON.stringify(tarefaAlteracao) == '{}') {
        res.status(400).send('A tarefa não pode estar vazia.')
    } else {
        if ((tarefaAlteracao.descricao).length < 5) {
            res.status(400).send('A tarefa deve possuir no mínimo 5 caracteres.')
        } else {
            if (tarefaAlteracao.status != 'Concluida' || tarefaAlteracao.status != 'Pendente') tarefaAlteracao.status = 'Pendente'
            // Processamento
            fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
                if (err) {
                    res.status(500).send('Erro ao ler o arquivo.')
                    console.error('Erro ao ler o arquivo:\n', err)
                    return
                }
                try {
                    const dataJson = JSON.parse(data)
                    const index = dataJson.findIndex(tarefa => tarefa.id === id)

                    dataJson[index].descricao = tarefaAlteracao.descricao
                    dataJson[index].status = tarefaAlteracao.status

                    // Saída
                    fs.writeFile('./dados/tarefas.json', JSON.stringify(dataJson, null, 2), (err) => {
                        if (err) {
                            res.status(500).send('Erro ao gravar o arquivo.')
                            console.error('Erro ao gravar o arquivo:\n', err)
                            return
                        }
                        res.status(200).send('Tarefa atualizada com sucesso!!')
                    })
                } catch (error) {
                    res.status(500).send('Erro ao converter o arquivo.')
                    console.error('Erro ao converter o arquivo:\n', error)
                }
            })
        }
    }
})

router.delete('/:id', autenticar, (req, res) => {
    // Entrada
    const id = parseInt(req.params.id)

    // Processamento
    fs.readFile('./dados/tarefas.json', 'utf8', (err, data) => {
        if (err) throw err
        const arrayTarefas = JSON.parse(data)
        const index = arrayTarefas.findIndex(tarefa => tarefa.id === id)
        if (index === -1) return res.status(404).send('Erro ao tentar encontrar o index.')
        arrayTarefas.splice(index, 1)

        // Saída
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