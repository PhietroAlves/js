const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Digite uma frase: ', frase => {
    const fraseSeparada = frase.split(" ")
    console.log(fraseSeparada.length)
    readline.close()
})