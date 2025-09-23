const fs =  require('fs');

const conteudo = 'Este é o conteúdo do arquivo da turma 2TD'

fs.writeFile('arquivo.txt', conteudo, err => {
    if (err) throw err;
    console.log('Arquivo criado!');
});