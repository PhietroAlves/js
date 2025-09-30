const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = 3000;

// Atenção: Garanta que a pasta 'data' e o arquivo 'tarefas.json' existam!

const DATA_FILE = path.join(__dirname, 'data', 'tarefas.json');

const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] - ${req.method} ${req.originalUrl}`);
};

const autenticar = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token === '123@321') {
        next();
    } else {
        res.status(401).json({ message: 'Acesso não autorizado. Token inválido.' });
    }
};

app.use(logger);

const tarefasRouter = express.Router();

tarefasRouter.use(autenticar);

tarefasRouter.get('/', (req, res) => {
    fs.readFile(DATA_FILE, 'utf-8')
        .then(data => res.status(200).json(JSON.parse(data)))
        .catch(error => res.status(500).json({ message: 'Erro ao ler as tarefas.' }));
});
tarefasRouter.post('/', (req, res) => {
    const { descricao } = req.body;
    let novaTarefa;
    if (!descricao) {
        res.status(400).json({ message: 'A descrição é obrigatória.' });
    }
    fs.readFile(DATA_FILE, 'utf8')
        .then(data => {
            const tarefas = JSON.parse(data);
            novaTarefa = {
                id: tarefas.length + 1,
                descricao: descricao,
                status: 'pendente'
            };
            tarefas.push(novaTarefa);
            fs.writeFile(DATA_FILE, JSON.stringify(tarefas, null, 2));
        })
        .then(() => {
            res.status(201).json(novaTarefa);
        })
        .catch(error => res.status(500).json({message:'Erro ao salvar a nova tarefa.'}));
});
tarefasRouter.post('/:id/concluir', (req, res) => {
        const idTarefa = req.params.id;
        let tarefaAtualizada;
        fs.readFile(DATA_FILE, 'utf8')
            .then(data => {
                const tarefas = JSON.parse(data);
                const tarefaIndex = tarefas.findIndex(t => t.id === idTarefa);
                if (tarefaIndex === -1) {
                    const error = new Error('Tarefa não encontrada.');
                    error.statusCode = 404;
                    throw error;
                }
                tarefas[tarefaIndex].status = 'concluída';
                tarefaAtualizada = tarefas[tarefaIndex];
                return fs.writeFile(DATA_FILE, JSON.stringify(tarefas, null,2));
            })
            .then(() => {
                res.status(200).json(tarefaModificada);
            })
            .catch(error => {
                res.status(500).json({
                    message:
                        'Ocorreu um erro genérico ao atualizar a tarefa.'
                });
            });
    });

tarefasRouter.delete('/:id', (req, res) => {
        const idTarefa = parseInt(req.params.id);
        fs.readFile(DATA_FILE, 'utf-8')
            .then(data => {
                let tarefas = JSON.parse(data);
                const tarefasFiltradas = tarefas.filter(t => t.id !== idTarefa);
                return fs.writeFile(DATA_FILE, JSON.stringify(tarefasFiltradas, null, 2));
            })
            .then(() => {
                res.status(204).send();
            })
            .catch(error => {
                res.status(500).json({message: 'Erro ao deletar a tarefa.'});
            });
    });

app.use(tarefasRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});