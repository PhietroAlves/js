const fs = require('fs')
const os = require('os')

const conteudo = {
    plataforma: os.platform(),
    arquitetura: os.arch(),
    cpus: os.cpus(),
    memoriaTotal: os.totalmem(),
    memoriaLivre: os.freemem(),
    hostname: os.hostname(),
    usuario: os.userInfo().username,
    diretorioHome: os.homedir(),
}

fs.writeFile('info_sistema.txt', JSON.stringify(conteudo, null, 1), err => {
    if (err) throw err
    console.log('Arquivo criado!')
})