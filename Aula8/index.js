const express = require('express');
const app = express();
const port = 3000;

// Middleware para tratamento de requisição JSON
app.use(express.json())

// Middleware para tratamento de requisição de formulário
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Página inicial do web server.');
});

app.get('/usuarios', (req, res) => {
    res.send('Lista de usuários');
});

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Detalhes do usuário com ID: ${id}`);
});

app.get('/ola/:nome', (req, res) => {
    const nome = req.params.nome;
    res.send(`Olá, ${nome}, seja muito bem vindo ao meu web server!`)
})

app.get('/categorias/:categoria/produtos/:produtoId', (req, res) => {
    const categoria = req.params.categoria;
    const produtoId = req.params.produtoId;
    res.send(`Categoria: ${categoria}, Produto ID: ${produtoId}`);
})

app.options

app.post('/produtos', (req, res) => {
    const novoProduto = req.body
    console.log('Novo produto: \n', novoProduto)
    res.send('Produto criado com sucesso!')
})

app.post('/cadastro', (req, res) => {
    const nome = req.body.nome
    const email = req.body.email
    res.send(`Cadastro realizado com sucesso!!!\nNome: ${nome}\nE-mail: ${email}`)
})

app.options('/cadastro', (req, res) => {
    res.header('Allow', 'POST, OPTIONS')
    res.status(204).send()
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});