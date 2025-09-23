const dados = {
    "nome": "Phietro Alves",
    "idade": 16,
    "endereço": {
        "rua": "Rua Principal, 123",
        "cidade": "São Caetano do Sul"
    },
    "telefones": [
        "11-1234-5678",
        "11-9876-5432"
    ],
    "ativo": true,
    "nulo": null
}

console.log(dados.nome)
console.log(dados.endereço.rua)
console.log(dados.telefones[1])
dados.telefones.forEach(telefone =>{
    console.log(telefone)
})
dados.nome = 'Raphael'
console.log(dados)