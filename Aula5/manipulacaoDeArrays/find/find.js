const usuarios = [
    {id : 1, nome: "Ana"},
    {id : 2, nome: "Bruno"},
    {id : 3, nome: "Carlos"},
]

const usuarioEncontrado = usuarios.find(function(usuario) {
    return usuario.id === 2
})

// Resultado: {id: 2, nome: "Bruno"}
console.log(usuarioEncontrado)