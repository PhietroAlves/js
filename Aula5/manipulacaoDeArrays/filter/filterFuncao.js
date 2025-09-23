const idades = [15, 22, 18, 34, 17]
const maioresDeIdade = idades.filter(function(idade) {
    return idade >= 18
})

// Resultado: [22, 18, 34]
console.log(maioresDeIdade)