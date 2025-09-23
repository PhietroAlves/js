const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual é o nome do usuário? ', nome => {
    try {
        if (nome.length <= 5 && nome == nome.trim() && nome == nome.toLowerCase()) {
            console.log('O usuário é válido.')
        } else {
            console.log('O usuário é inválido.')
        }
    } catch (error) {
        console.log('Falha na verificação do nome: ', error)
    }
    readline.close()
})