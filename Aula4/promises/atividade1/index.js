const fs = require('fs').promises

fs.mkdir('pastaNova', {recursive:true})
    .then(() => console.log('Pasta Criada!'))
    .catch((err) => console.error('Erro ao criar pasta: ', err))